import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1109px;
    padding-top: 34px;

    @media screen and (max-width: 1300px) {
        padding-left: 24px;
        padding-right: 24px;
        width: auto;
    }

    @media screen and (max-width: 1024px) {
        margin: 0;
    }
`