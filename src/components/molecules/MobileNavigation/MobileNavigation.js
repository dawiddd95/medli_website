import React from 'react';
import * as S from './StyledMobileNavigation';

const MobileNavigation = ({ isVisible }) => {
    return (
        <>
            {isVisible && 
                <S.Wrapper>
                    <S.ActiveStyledLink to='#'>
                        Home
                        <S.ExtendEllipsis></S.ExtendEllipsis>
                    </S.ActiveStyledLink>
                    <S.StyledLink to='#'>About</S.StyledLink>
                    <S.StyledLink to='#'>Courses</S.StyledLink>
                    <S.StyledLink to='#'>News</S.StyledLink>
                    <S.StyledLink to='#'>Contact</S.StyledLink>
                    <S.StyledLink fancy to='#'>Login</S.StyledLink>
                </S.Wrapper>
            }
        </>
    );
}

export default MobileNavigation;