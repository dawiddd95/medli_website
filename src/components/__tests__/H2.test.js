import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import { H2 } from 'components/atoms/H2/H2';

describe('H2 Component', () => {
    it('Renders children text', () => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <H2>Example of header2</H2>
            </ThemeProvider>,
        );

        getByText('Example of header2');
    });
});