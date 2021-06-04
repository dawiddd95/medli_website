import CommunitySection from 'components/molecules/CommunitySection/CommunitySection';
import Hero from 'components/molecules/Hero/Hero';
import Widget from 'components/molecules/Widget/Widget';
import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header/Header';
import OurAdvantages from 'components/organisms/OutAdvantages/OurAdvantages';
import React from 'react';
import * as S from './StyledHomepage';

const Homepage = () => {
    return (
        <S.Wrapper>
            <S.InnerWrapper>
                <Header /> 
                <Hero />
                <S.WidgetWrapper>
                    <Widget 
                        title='230+'
                        text='Scientifically based tests'
                    />
                    <Widget 
                        title='10,000+'
                        text='Medical recommendations'
                    />
                    <Widget 
                        title='25M+'
                        text='Students learning'
                    />
                </S.WidgetWrapper>
            </S.InnerWrapper>
            <S.CommunityWrapper>
                <CommunitySection />
            </S.CommunityWrapper>
            <S.AdvantagesWrapper>
                <OurAdvantages />
            </S.AdvantagesWrapper>
            <S.FooterWrapper>
                <S.InnerWrapper>
                    <Footer />
                </S.InnerWrapper>
            </S.FooterWrapper>
        </S.Wrapper>
    );
}

export default Homepage;