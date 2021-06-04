import styled from 'styled-components';
import { H2 } from 'components/atoms/H2/H2';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

export const Wrapper = styled.div`
    margin-top: 360px;

    @media screen and (max-width: 900px) {
        margin-top: 264px;
    }

    @media screen and (max-width: 650px) {
        margin-top: 0;
    }
`

export const ExtendH2 = styled(H2)`
    @media screen and (max-width: 1024px) {
        font-size: ${({ theme }) => theme.fontSize.l};
        line-height: 58.5px;
    }

    @media screen and (max-width: 650px) {
        margin-top: 164px;
    }

    @media screen and (max-width: 322px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`

export const ExtendParagraph = styled(Paragraph)`
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    max-width: 596px;

    @media screen and (max-width: 1024px) {
        font-size: ${({ theme }) => theme.fontSize.xs};
        line-height: ${({ theme }) => theme.lineHeight.s};
    }

    @media screen and (max-width: 500px) {
        margin-top: 36px;
    }
`

export const CardsWrapper = styled.div`
    display: flex;
    padding: 72px 0 114px 0; 

    @media screen and (max-width: 1300px) {
        flex-wrap: wrap;
    }

    @media screen and (max-width: 900px) {
        flex-direction: column;
        padding: 72px 0 0 0;
    }
`