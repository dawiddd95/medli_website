import styled from 'styled-components';

export const Strong = styled.strong`
	color: ${({ theme }) => theme.colors.blackPrimary};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    line-height: 28.08px;
`