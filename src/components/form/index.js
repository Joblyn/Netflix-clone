import React from 'react';
import PropTypes from 'prop-types';
import { Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit } from './styles/form';

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Form.propTypes = {
  children: PropTypes.node
}

Form.Error = function FormError({children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>
}
Form.Error.propTypes = {
  children: PropTypes.node
}

Form.Base = function FormBase({children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>
}
Form.Base.propTypes = {
  children: PropTypes.node
}

Form.Title = function FormTitle({children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Form.Title.propTypes = {
  children: PropTypes.node
}

Form.Text = function FormText({children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
Form.Text.propTypes = {
  children: PropTypes.node
}

Form.TextSmall = function FormTextSmall({children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>
}
Form.TextSmall.propTypes = {
  children: PropTypes.node
}

Form.Link = function FormLink({children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}
Form.Link.propTypes = {
  children: PropTypes.node
}

Form.Input = function FormInput({children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>
}
Form.Input.propTypes = {
  children: PropTypes.node
}

Form.Submit = function FormSubmit({children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>
}
Form.Submit.propTypes = {
  children: PropTypes.node
}