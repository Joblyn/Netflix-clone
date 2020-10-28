import React, { useContext, createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Inner, Title, Item, Header, Body } from './styles/accordion';



export default function Accordion({children, ...restProps}) {
  return(
    <Container {...restProps}>
     <Inner>{children}</Inner>
    </Container>
  )
}
Accordion.propTypes = {
  children: PropTypes.node
}

Accordion.Title = function AccordionTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
} 
Accordion.Title.propTypes = {
  children: PropTypes.node
}


const ToggleContext = createContext();

Accordion.Item = function AccordionItem({children, ...restProps}) {
  const [ toggleShow, setToggleShow ] = useState(false);

  return (
    <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );  
}; 
Accordion.Item.propTypes = {
  children: PropTypes.node
}

Accordion.Header = function AccordionHeader({children, ...restProps}) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
     <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
      {children}
      <pre>{JSON.stringify(toggleShow, null, 2)}</pre>
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="images/icons/add.png" alt="Open" />
      )}
     </Header>
  );
}; 
Accordion.Header.propTypes = {
  children: PropTypes.node
}

Accordion.Body = function AccordionBody({children, ...restProps}) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null; 
}; 
Accordion.Body.propTypes = {
  children: PropTypes.node
}