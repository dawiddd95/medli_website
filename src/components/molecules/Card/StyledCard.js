import styled from 'styled-components';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Strong } from 'components/atoms/Strong/Strong';

export const Wrapper = styled.div`
    align-items: center;
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    height: 439px;
    justify-content: center;
    margin-right: 30px;
    min-width: 350px;
    width: auto;

    @media screen and (max-width: 1300px) {
        margin-right: auto;
        min-width: 30%;
    }

    @media screen and (max-width: 900px) {
        margin: 0 auto 40px auto;
        min-width: 350px;
    }

    @media screen and (max-width: 500px) {
        margin: 0 0 40px 0;
        min-width: 0;
        width: 100%;
    }
`

export const WrapperImg = styled.div`
    margin: 45px 0 60px 0;
    height: 186px;
`

export const ExtendStrong = styled(Strong)`
    margin-bottom: 16px;
`

export const ExtendParagraph = styled(Paragraph)`
    flex-wrap: wrap;
    margin-bottom: 45px;
    max-width: 232px;
    text-align: center;
`