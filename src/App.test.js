import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should render app component', () => {
    render(<App />);
    expect(App).toBeTruthy();
  });
});
