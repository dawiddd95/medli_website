import styled from 'styled-components';

export const Input = styled.input`
    background-color: transparent;
	border: 0;
    color: ${({ theme }) => theme.colors.blackFooter};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize.xxs};
    line-height: ${({ theme }) => theme.lineHeight.xs};
    outline: 0;
`