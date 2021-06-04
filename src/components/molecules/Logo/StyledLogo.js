import styled from 'styled-components';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Ellipsis } from 'components/atoms/Ellipsis/Ellipsis';

export const Wrapper = styled.div`
    display: flex;
`

export const Img = styled.img`
    height: 42.4px;
    margin-top: 5px;
    width: 56px;
`

export const ExtendParagraph = styled(Paragraph)`
    color: ${({ footer, theme }) => footer ? 'white' : theme.colors.blackPrimary};
    margin: 5px 0 0 15px;
`

export const ExtendEllipsis = styled(Ellipsis)`
    margin: 5.7px 40px 0 -10.109374524px;
    position: absolute;
`