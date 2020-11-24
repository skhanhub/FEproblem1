import React from 'react';
import { render } from '@testing-library/react';
import CustomToggle from './CustomToggle';

describe("Tests for the CustomToggle component", () => {

  it("Should have the text Pluto if value is set to Pluto", () => {
    const planetName = "Pluto";

    const {queryByText} = render(<CustomToggle value={planetName}/>)
    expect(queryByText(/Pluto/i)).toBeInTheDocument();
  });

  it("Should have the text Select if no value is provided", () => {

    const {queryByText} = render(<CustomToggle/>)
    expect(queryByText(/Select/i)).toBeInTheDocument();
  });
});