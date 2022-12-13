import '@testing-library/jest-dom'
import {render} from "@testing-library/react";
import { HelloWord } from '../../src/components/HelloWord';


describe('Hello Word Component', () => {
    it('deve exibir uma frase', async () => {
        const {getByText} = render(<HelloWord />);
        expect(getByText('Hello Word Fernando')).toBeInTheDocument();
    });

})