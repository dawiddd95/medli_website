import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

describe('Paragraph Component', () => {
    it('Renders children text', () => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Paragraph>Example of text</Paragraph>
            </ThemeProvider>,
        );

        getByText('Example of text');
    });
});