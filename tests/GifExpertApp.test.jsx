import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en el componente GifExpertApp', () => { 

    test('no debe agregar categoria repetida',() => {

        render(<GifExpertApp />);

        const inputValue = 'One Punch';
 
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target : { value: inputValue } });
        fireEvent.submit( form );

        expect(screen.getAllByRole('heading',{level: 3}).length ).toBe(1);

    });
});