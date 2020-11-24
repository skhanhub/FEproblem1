import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe("Tests for the Footer component", () => {

  it("Should have the text Good Luck With Your Search", () => {

    const {queryByText} = render(<Footer />)
    expect(queryByText(/Good Luck With Your Search/i)).toBeInTheDocument();
  });
});