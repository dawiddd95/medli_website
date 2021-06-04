import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import { Button } from 'components/atoms/Button/Button';

describe('Button Component', () => {
    it('Renders children text', () => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Button>Get started</Button>
            </ThemeProvider>
        )

        getByText('Get started');
    });


    it('Displays proper type', () => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Button type='button'>New</Button>
            </ThemeProvider>,
        );

        const button = getByText(/new/i)

        expect(button).toHaveAttribute('type', 'button');
    });
});