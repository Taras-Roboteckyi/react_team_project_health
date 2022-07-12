import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { Cont, Diary, Calc } from './AuthNav.styled';

export default function AuthNavLogined() {
  const windowWidth = useWindowWidth();

  return (
    <Cont>
      {windowWidth >= 1280 && <Diary to="diary">Щоденник</Diary>}
      {windowWidth >= 1280 && <Calc to="calculator">Калькулятор</Calc>}
    </Cont>
  );
}
