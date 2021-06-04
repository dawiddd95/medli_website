import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
`

export const InnerWrapper = styled.div`
    margin: 0 auto;
    max-width: 1109px;

    @media screen and (max-width: 1300px) {
        max-width: none;
        width: 100%;
    }
`

export const WidgetWrapper = styled.div`
    display: flex;
    height: 182px;
    margin: 238px auto 0 auto;
    width: 87%;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        margin: 64px auto 0 auto;
    }
`

export const CommunityWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.orange};
    height: 811px;
    margin-top: 219px;
    width: 100%;

    @media screen and (max-width: 1024px) {
        height: 650px;
    }

    @media screen and (max-width: 482px) {
        height: 487px;
    }
`

export const AdvantagesWrapper = styled.div`
    margin: 0 auto;
    max-width: 1109px;

    @media screen and (max-width: 1300px) {
        max-width: none;
        padding: 0 24px;
        width: auto;
    }
`

export const FooterWrapper = styled.footer`
    background-color: ${({ theme }) => theme.colors.blackPrimary};
    height: 469px;
    width: 100%;

    @media screen and (max-width: 1300px) {
        max-width: none;
        padding: 0 24px;
        width: auto;
    }

    @media screen and (max-width: 1024px) {
        height: 938px;
    }
`