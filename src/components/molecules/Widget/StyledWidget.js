import styled from 'styled-components';
import { H2 } from 'components/atoms/H2/H2';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

export const Wrapper = styled.div`
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
        margin-bottom: 108px;

        :first-child {
            p {
                padding: 0 50px;
            }
        }

        :nth-child(2),
        :nth-child(3) {
            p {
                display: flex;
                justify-content: center;
                padding: 0;
                width: auto;
            }
        }

        :nth-child(2) {
            margin-bottom: 84px;
        }
    }
`

export const ExtendH2 = styled(H2)`
    text-align: center;
`

export const ExtendParagraph = styled(Paragraph)`
    display: flex;
    flex-wrap: wrap;
    padding: 0 40px;
    text-align: center;
    width: 253px;

    @media screen and (max-width: 1024px) {
        font-size: ${({ theme }) => theme.fontSize.xs};
        line-height: ${({ theme }) => theme.lineHeight.s};
    }
`