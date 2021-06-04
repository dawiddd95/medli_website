import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.orange};
	border: 0;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.blackPrimary};
    cursor: pointer;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    padding: 16px 0;
`