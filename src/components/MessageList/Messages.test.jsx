import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Messages } from './Messages';

describe('Messages', () => {
  it('render component', () => {
    render(<Messages messages={[]} />);
  });

  it('messages list is empty', () => {
    render(<Messages messages={[]} />);
    expect(screen.queryAllByRole('li').length).toBe(0);
  });
});