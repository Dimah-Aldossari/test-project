import { render } from '@testing-library/react';
import App from './App';

describe("App", () => {
  test("should render the component", () => {
    const view = render(
      <App />
    );
    expect(view).toBeDefined();
    // expect(view).toMatchSnapshot();
  })
})