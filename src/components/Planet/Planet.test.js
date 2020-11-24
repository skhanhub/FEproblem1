import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux"
import Planet from './Planet';
import { initialState as getDataState } from '../../store/reducers/getData';
import { initialState as formControlState } from '../../store/reducers/formControl';
import rootReducer from "../../store/reducers";

const initialState = {
  getData: getDataState,
  formControl: formControlState,
}
const store = () =>
  createStore(rootReducer, initialState, applyMiddleware(thunk));

describe("Tests for the Planet component", () => {

  it("Should have the text Destination 1", () => {

    const {queryByText} = render(<Provider store={store()}><Planet planetId={0}/></Provider>)
    expect(queryByText(/Destination 1/i)).toBeInTheDocument();
  });
});