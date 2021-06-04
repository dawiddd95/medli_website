import React from 'react';
import {render} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import { Input } from 'components/atoms/Input/Input';

describe('Input component', () => {
    it('renders input', () => {
        let placeholderText = 'Enter something';
      
        const {getByPlaceholderText} = render(
            <ThemeProvider theme={theme}>
                <Input
                    placeholder={placeholderText} 
                />
            </ThemeProvider>
        );

        expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
    })
})
