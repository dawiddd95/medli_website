import styled from 'styled-components';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
    padding-top: 89px;

    @media screen and (max-width: 1024px) {
        padding-top: 64px;
    }
`

export const InnerWrapper = styled.div`
    display: flex;
    height: 154px;
    margin-top: 55px;

    @media screen and (max-width: 1024px) {
        flex-direction: column-reverse;
        height: auto;
        margin-top: 60.96px;
    }
`

export const Links = styled.div`
    display: flex;
    margin-right: auto;
    height: 100%; 
    width: 500px;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }

    @media screen and (max-width: 542px) {
        flex-direction: column;
    }
`

export const FirstColumn = styled.div`
    height: 127px;
    margin-right: 58px;
    width: 132px;
`

export const TitleWrapper = styled.div`
    margin-bottom: 19px;
`

export const SecondColumn = styled.div`
    height: 127px;
    margin-right: 118px;
    width: 72px;

    @media screen and (max-width: 542px) {
        margin-top: 31px;
    }
`

export const ThirdColumn = styled.div`
    height: 100%;
    width: 111px;

    @media screen and (max-width: 542px) {
        margin-bottom: 50px;
        margin-top: 31px;
    }
`

export const TryForFreeWrapper = styled.div`
    height: 93px;
    width: 350px;

    @media screen and (max-width: 1024px) {
        height: auto;
        margin-bottom: 63px;
        width: 100%;
    }
`

export const InputWrapper = styled.div`
    border-radius: 8px;
    border: ${({ theme }) => `1px solid ${theme.colors.blackFooter}`};
    display: flex;
    height: 50px;
    justify-content: space-between;
    margin-top: 16px;
    padding: 8px 8px 8px 16px;
    width: 100%;

    @media screen and (max-width: 1024px) {
        border: 0;
        flex-direction: column;
        height: auto;
        padding: 0;

        input {
            @media screen and (max-width: 1024px) {
                border: ${({ theme }) => `1px solid ${theme.colors.blackFooter}`};
                border-radius: 8px;
                padding: 16px 0 16px 15px; 
                width: 100%;
            }
        }
    }
`

export const ExtendButton = styled(Button)`
    font-size: ${({ theme }) => theme.fontSize.xxs};
    line-height: ${({ theme }) => theme.lineHeight.xs};
    padding: 3px 16px 4px 16px;

    @media screen and (max-width: 1024px) {
        margin-top: 16px;
        padding: 16px 0;
    }
`


export const CopyrightWrapper = styled.div`
    border-top: ${({ theme }) => `1px solid ${theme.colors.blackFooter}`};
    margin-top: 80px;
    text-align: right;
    width: 100%;

    @media screen and (max-width: 542px) {
        display: none;
    }
`

export const ExtendParagraph = styled(Paragraph)`
    font-size: 10px;
    line-height: 15px;
    margin: 16px 0;
`