import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
	color: ${({ lightColor, theme }) => lightColor ? theme.colors.blackLighten : theme.colors.blackPrimary};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    line-height: ${({ theme }) => theme.lineHeight.m};

    ${ ({ footer }) => footer && css`
        color: ${({ light, theme }) => light ? theme.colors.lightFooter : theme.colors.blackFooter};
    `}  

    ${ ({ logo }) => logo && css`
        font-family: ${({ theme }) => theme.fontFamily.secondary};
        font-size: ${({ theme }) => theme.fontSize.m};
        line-height: ${({ theme }) => theme.lineHeight.l};
    `}   

    ${ ({ small }) => small && css`
        font-size: ${({ theme }) => theme.fontSize.xxs};
        line-height: ${({ theme }) => theme.lineHeight.xs};
    `}  
`