import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Ellipsis } from 'components/atoms/Ellipsis/Ellipsis';

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    height: 50px;
    width: 644px;
`

export const Img = styled.img`
    display: none;
    height: 17px;
    width: 30px;

    @media screen and (max-width: 1024px) {
        display: block;
        margin-left: auto;
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
    padding: ${({ fancy }) => fancy && '0 31px'}; 
    text-decoration: none;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const ActiveStyledLink = styled(StyledLink)`
   display: flex;
   flex-direction: column;
   justify-content: center;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const ExtendEllipsis = styled(Ellipsis)`
    margin-top: 40px;
    position: absolute;
`