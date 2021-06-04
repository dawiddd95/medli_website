import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Widget from 'components/molecules/Widget/Widget';

describe('Widget component', () => {
    it('displays proper value', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Widget title='title' text='text' />
            </ThemeProvider>
        );

        expect(container).toHaveTextContent(/title/i)
        expect(container).toHaveTextContent(/text/i)
    })
})
