import { render, screen } from '@testing-library/react'
import { GifItem } from "../../src/components"

describe('Pruebas en <GifItem />', () => { 
    
    const titulo = 'Lo que sea';
    const url = 'http://localhost/cualquiera';

    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render( <GifItem title= { titulo } url={ url } />);
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem title={ titulo } url={ url } /> );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( titulo );
    });

    test('debe de mostrar el titulo en el componente', () => { 
       render( <GifItem title={ titulo } url={ url } /> );
       expect( screen.getByText( titulo ) ).toBeTruthy(); 
    });

});