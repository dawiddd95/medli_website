import React from 'react';
import PropTypes from 'prop-types';
import * as S from './StyledCard';

const Card = ({img, title, text}) => {
    return (
        <S.Wrapper>
            <S.WrapperImg>
                <img src={img} alt="frame" />
            </S.WrapperImg>
            <S.ExtendStrong>{title}</S.ExtendStrong>
            <S.ExtendParagraph small >{text}</S.ExtendParagraph>
        </S.Wrapper>
    );
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Card;