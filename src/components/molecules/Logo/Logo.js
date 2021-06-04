import React from 'react';
import ellipseIcon from 'assets/images/ellipse2.png';
import * as S from './StyledLogo';

const Logo = ({ footer }) => {
    return (
        <S.Wrapper>
            <S.Img src={ellipseIcon} /> 
            <S.ExtendParagraph logo footer={footer}>
                Medli
                <S.ExtendEllipsis></S.ExtendEllipsis>
            </S.ExtendParagraph> 
        </S.Wrapper>
    );
}

export default Logo;
