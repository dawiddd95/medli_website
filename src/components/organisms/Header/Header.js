import Navigation from 'components/molecules/Navigation/Navigation';
import React from 'react';
import * as S from './StyledHeader';
import Logo from 'components/molecules/Logo/Logo';

const Header = () => {
    return (
        <S.Wrapper>
            <Logo />
            <Navigation />
        </S.Wrapper>
    );
}

export default Header;