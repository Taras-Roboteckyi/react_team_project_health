import React from 'react';

import { Container, Link, Sign, Diary, Calc } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Container>
      <Sign to="signin">SIGN IN </Sign>
      <Link to="registration">REGISTRATION</Link>
    </Container>
  );
}
