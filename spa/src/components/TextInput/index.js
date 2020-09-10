import React from 'react';

import { Container, Input, Title } from './styles';

function TextInput({name = "", onChange = () => {}, title = ''}) {
  return (
    <Container>
      <Title>{title}</Title>
      <Input name={name} onChange={onChange} />
    </Container>
  );
}

export default TextInput;