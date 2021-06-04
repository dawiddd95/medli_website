import React, { useState } from 'react';
import menuIcon from 'assets/icons/menu.png';
import * as S from './StyledNavigation';
import MobileNavigation from 'components/molecules/MobileNavigation/MobileNavigation';

const Navigation = () => {
    const [visible, setVisibility] = useState(false);

    return (
        <S.Wrapper>
            <S.Img src={menuIcon} alt="menu" onClick={() => setVisibility(!visible)} />
            <S.ActiveStyledLink to='#'>
                Home
                <S.ExtendEllipsis></S.ExtendEllipsis>
            </S.ActiveStyledLink>
            <S.StyledLink to='#'>About</S.StyledLink>
            <S.StyledLink to='#'>Courses</S.StyledLink>
            <S.StyledLink to='#'>News</S.StyledLink>
            <S.StyledLink to='#'>Contact</S.StyledLink>
            <S.StyledLink fancy to='#'>Login</S.StyledLink>
            <MobileNavigation isVisible={visible} />
        </S.Wrapper>
    );
}

export default Navigation;