import styled from 'styled-components';
import { H2 } from 'components/atoms/H2/H2';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

export const Wrapper = styled.div`
    margin: 219px auto 0 auto;
    max-width: 1240px;

    @media screen and (max-width: 1024px) {
        margin-top: 500px;
        padding: 0 24px;
    }
`

export const ExtendH2 = styled(H2)`
    line-height: 117%;
    margin: 0 auto;
    max-width: 839px;
    padding-top: 64px;
    text-align: center;

    @media screen and (max-width: 1024px) {
        margin: 0;
        text-align: left;
    }

    @media screen and (max-width: 482px) {
        font-size: ${({ theme }) => theme.fontSize.l};
        line-height: 58.5px;
        padding-right: 20px;
        text-align: left;
    }

    @media screen and (max-width: 322px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`

export const ExtendParagraph = styled(Paragraph)`
    margin: 40px auto 56px auto;
    max-width: 371px;
    text-align: center;

    @media screen and (max-width: 1024px) {
        margin: 37px 0 75px 0;
        text-align: left;
    }

    @media screen and (max-width: 482px) {
        font-size: ${({ theme }) => theme.fontSize.xs};
        line-height: ${({ theme }) => theme.lineHeight.s};
    }
`

export const ImgWrapper = styled.div`
    position: relative;
    width: 100%;
`

export const Img = styled.img`
    border-radius: 8px;
    display: inherit;
    max-width: 100%;
    height: auto;
`

export const PlayImg = styled.img`
    left: 45%;
    position: absolute;
    top: 45%;

    @media screen and (max-width: 1024px) {
        height: 48%;
        left: 40%;
        top: 27%;
        width: 24%;
    }
`

