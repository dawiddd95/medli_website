import styled from 'styled-components';
import { H2 } from 'components/atoms/H2/H2';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
    display: flex;
    margin: 148px auto 0 auto;
    max-width: 1109px;
    
    @media screen and (max-width: 1300px) {
        justify-content: space-between;
        padding: 0 24px;
    }

    @media screen and (max-width: 1024px) {
        align-items: center;
        flex-direction: column-reverse;
        margin: 48px auto 0 auto;
    }
`

export const HeroImg = styled.img`
    height: auto;
    max-width: 60%;

    @media screen and (max-width: 1300px) {
        max-width: 50%;
    }

    @media screen and (max-width: 1024px) {
        margin-bottom: 47px;
        max-width: 95%;
    }
`

export const LeftWrapper = styled.div`
    width: 40%;

    @media screen and (max-width: 1300px) {
        width: 45%;
    }

    @media screen and (max-width: 1024px) {
        width: auto;
    }
`

export const Row = styled.div`
    display: flex;
`

export const ExtendRow = styled(Row)`
    margin-top: 16px;
`

export const ExtendH2 = styled(H2)`
    @media screen and (max-width: 482px) {
        font-size: ${({ theme }) => theme.fontSize.l};
        line-height: 58.5px;
    }

    @media screen and (max-width: 322px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`

export const ExtendParagraph = styled(Paragraph)`
    @media screen and (max-width: 482px) {
        font-size: ${({ theme }) => theme.fontSize.xs};
        line-height: ${({ theme }) => theme.lineHeight.s};
    }
`

export const Img = styled.img`
    height: 32px;
    margin: 40px 0 0 -10px;
    width: 43px;

    @media screen and (max-width: 482px) {
        margin: 20px 0 0 -5px;
    }
`

export const ExtendButton = styled(Button)`
    font-size: 25px;
    margin-top: 36px;
    padding: 16px 71.5px;

    @media screen and (max-width: 1024px) {
        padding: 16px 0;
        width: 100%;
    }
`