import React from 'react';
import {render} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Logo from 'components/molecules/Logo/Logo';

describe('Logo Component', () => {
    it('displays Logo text', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Logo />
            </ThemeProvider>
        )

        expect(container).toHaveTextContent(/Medli/i)
    })
})