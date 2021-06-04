import Card from 'components/molecules/Card/Card';
import React from 'react';
import * as S from './StyledOurAdvantages';
import frameFirstIcon from 'assets/images/frame1.png';
import frameSecondIcon from 'assets/images/frame2.png';
import frameThirdIcon from 'assets/images/frame3.png';

const OurAdvantages = () => {
    return (
        <S.Wrapper>
            <S.ExtendH2>
                What you’re getting?
            </S.ExtendH2>
            <S.ExtendParagraph>
                We bring you personalized development programs that are backed by research and crafted from the years of experience
            </S.ExtendParagraph>
            <S.CardsWrapper>
                <Card 
                    img={frameThirdIcon}
                    title='1 FREE chat session'
                    text='Start with a free text based chat session online'
                />
                <Card 
                    img={frameFirstIcon}
                    title='Personal Coach'
                    text='A dedicated coach to help you through your journey'
                />
                <Card 
                    img={frameSecondIcon}
                    title='Text chat session'
                    text='An excellent way of preaparing a projects wireframe'
                />
            </S.CardsWrapper>
        </S.Wrapper>
    );
}

export default OurAdvantages;