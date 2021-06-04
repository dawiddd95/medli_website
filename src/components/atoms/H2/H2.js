import styled from 'styled-components';

export const H2 = styled.h2`
	color: ${({ colored, theme }) => colored ? theme.colors.orange : theme.colors.blackPrimary};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    line-height: ${({ theme }) => theme.lineHeight.xl};
`