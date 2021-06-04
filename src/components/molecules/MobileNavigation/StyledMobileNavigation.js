import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Ellipsis } from 'components/atoms/Ellipsis/Ellipsis';

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.pink};
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 420px 0 0 auto;
    padding-bottom: 30px;
    position: absolute;
    width: 150px;

    @media screen and (min-width: 1025px) {
        display: none;
    }

    @media screen and (max-width: 1024px) {
        width: 65%;
    }

    @media screen and (max-width: 375px) {
        width: 150px;
    }
`

export const StyledLink = styled(Link)`
    background: ${({ fancy, theme }) => fancy && theme.colors.orange}; 
    border-radius: 8px;
    color: ${( {theme} ) => theme.colors.blackPrimary};
    display: flex;
    align-items: center;
    font-family: ${( {theme} ) => theme.fontFamily.primary};
    font-size: ${( {theme} ) => theme.fontSize.s};
    font-weight: ${( {theme} ) => theme.fontWeight.normal};
    line-height: ${( {theme} ) => theme.lineHeight.m};
    margin-top: 20px;
    padding: ${({ fancy }) => fancy && '0 31px'}; 
    text-decoration: none;
`

export const ActiveStyledLink = styled(StyledLink)`
   display: flex;
   flex-direction: column;
   justify-content: center;
`

export const ExtendEllipsis = styled(Ellipsis)`
    margin-top: 40px;
    position: absolute;
`