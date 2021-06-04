import React from 'react';
import { renderWithRouter } from 'testUtils';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Navigation from 'components/molecules/Navigation/Navigation';

describe('Navigation Component', () => {
    it('Displays proper links in navigation', async () => {
        const { container } = renderWithRouter(
            <ThemeProvider theme={theme}>
                <Navigation />
            </ThemeProvider>
        )

        expect(container).toHaveTextContent(/Home/i)
        expect(container).toHaveTextContent(/About/i)
        expect(container).toHaveTextContent(/Courses/i)
        expect(container).toHaveTextContent(/News/i)
        expect(container).toHaveTextContent(/Contact/i)
        expect(container).toHaveTextContent(/Login/i)
    })
})