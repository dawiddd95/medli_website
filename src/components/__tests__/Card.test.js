import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import img from 'assets/images/frame1.png';
import Card from 'components/molecules/Card/Card';

describe('Card component', () => {
    it('displays proper value', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Card img={img} title='title' text='text' />
            </ThemeProvider>
        );

        expect(container).toHaveTextContent(/title/i)
        expect(container).toHaveTextContent(/text/i)
    })
})
