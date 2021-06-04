import React from 'react';
import * as S from './StyledCommunitySection';
import FreelanceWorkerImg from 'assets/images/woman-freelance-worker.png'
import playImg from 'assets/images/play.png';

const CommunitySection = () => {
    return (
        <S.Wrapper>
            <S.ExtendH2>
                What our community is saying?
            </S.ExtendH2>
            <S.ExtendParagraph>
                A mission-driven company that invest in and builds healthier living
            </S.ExtendParagraph>
            <S.ImgWrapper>
                <S.Img src={FreelanceWorkerImg} alt="freelance worker" />
                <S.PlayImg src={playImg} alt="play video" />
            </S.ImgWrapper>
        </S.Wrapper>
    );
}

export default CommunitySection;