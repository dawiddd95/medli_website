import React from 'react';
import heroImg from 'assets/images/Hero.png';
import ellipsisIcon from 'assets/images/ellipse2.png';
import * as S from './StyledHero';

const Hero = () => {
    return (
        <S.Wrapper>
            <S.LeftWrapper>
                <S.Row>
                    <S.ExtendH2 big>
                        Check y
                    </S.ExtendH2>
                    <S.Img src={ellipsisIcon} />
                    <S.ExtendH2 big>
                        ur
                    </S.ExtendH2>
                </S.Row>
                <S.Row>
                    <S.ExtendH2 big>
                        well-being
                    </S.ExtendH2>
                </S.Row>
                <S.ExtendRow>
                    <S.ExtendParagraph
                        lightColor
                    >
                        We’re sure that deciding to check on your health is a big step, even if it doesn’t bother in any way. 
                    </S.ExtendParagraph>
                </S.ExtendRow>
                <S.ExtendButton type='button'>Get started</S.ExtendButton>
            </S.LeftWrapper>
            <S.HeroImg src={heroImg} alt="" /> 
        </S.Wrapper>
    );
}

export default Hero;