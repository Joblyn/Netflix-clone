import React, { useState, useContext, createContext } from 'react';
import styled from 'styled-components/macro';

import {
  Container,
  Group,
  Title,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image
} from './styles/card';

const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container className="card-container" {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group className="card-group" {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title className="card-title" {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle className="card-subtitle" {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text className="card-text" {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities className="card-entities" {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta className="card-meta" {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item className="card-item"
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image className="card-image" {...restProps} />;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

  return showFeature ? (
    <Feature className="card-feature" {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <Content className="card-feature-content">
        <FeatureTitle className="card-feature-title">{itemFeature.title}</FeatureTitle>
        <FeatureText className="card-feature-text">{itemFeature.description}</FeatureText>
        <FeatureClose className="card-feature-close" onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group className="grp-margin grp-alignItems grp-flexDirectRow" margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity className="card-feature-maturity rating" rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
          <FeatureText className="feature-text fontweightBold" fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null;
};