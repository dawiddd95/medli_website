import { Input } from 'components/atoms/Input/Input';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import Logo from 'components/molecules/Logo/Logo';
import React from 'react';
import * as S from './StyledFooter';

const Footer = () => {
    return (
        <S.Wrapper>
            <Logo footer={true} />
            <S.InnerWrapper>
                <S.Links>
                    <S.FirstColumn>
                        <S.TitleWrapper>
                            <Paragraph footer small>Product</Paragraph>
                        </S.TitleWrapper>
                        <Paragraph footer light small>Updates</Paragraph>
                        <Paragraph footer light small>Security</Paragraph>
                        <Paragraph footer light small>Chrome Extension</Paragraph>
                   </S.FirstColumn>
                   <S.SecondColumn>
                        <S.TitleWrapper>
                            <Paragraph footer small>Company</Paragraph>
                        </S.TitleWrapper>
                        <Paragraph footer light small>About</Paragraph>
                        <Paragraph footer light small>Blog</Paragraph>
                        <Paragraph footer light small>Join Us</Paragraph>
                   </S.SecondColumn>
                   <S.ThirdColumn>
                        <S.TitleWrapper>
                            <Paragraph footer small>Help</Paragraph>
                        </S.TitleWrapper>
                        <Paragraph footer light small>Talk to Support</Paragraph>
                        <Paragraph footer light small>Support Docs</Paragraph>
                        <Paragraph footer light small>API Docs</Paragraph>
                        <Paragraph footer light small>System Status</Paragraph>
                   </S.ThirdColumn>
                </S.Links>
                <S.TryForFreeWrapper>
                    <Paragraph footer small>Try Medli for free</Paragraph>
                    <S.InputWrapper>
                        <Input placeholder='Enter your email' type='text' />
                        <S.ExtendButton type='button'>Get started</S.ExtendButton>
                    </S.InputWrapper>
                </S.TryForFreeWrapper>
           </S.InnerWrapper>
           <S.CopyrightWrapper>
                <S.ExtendParagraph footer>
                    Terms &amp; Conditions 
                </S.ExtendParagraph>
            </S.CopyrightWrapper>
        </S.Wrapper>
    );
}

export default Footer;
