import React from 'react';
import PropTypes from 'prop-types';
import * as S from './StyledWidget';
import { WidgetWrapper } from 'views/Homepage/StyledHomepage';

const Widget = ({title, text}) => {
    return (
        <S.Wrapper>
            <S.ExtendH2 colored> 
                {title} 
            </S.ExtendH2>
            <S.ExtendParagraph>
                {text}
            </S.ExtendParagraph>
        </S.Wrapper>
    );
}

WidgetWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Widget;