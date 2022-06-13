import { render } from '@testing-library/react';
import { test } from '@jest/globals';
import Home from '../views/home';

test('test learn react lint', () => {
    render(<Home />);
});
