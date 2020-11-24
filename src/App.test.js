import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux"
import App from './App';
import { initialState as getDataState } from './store/reducers/getData';
import { initialState as formControlState } from './store/reducers/formControl';
import rootReducer from "./store/reducers";

const initialState = {
  getData: getDataState,
  formControl: formControlState,
}
const store = () =>
  createStore(rootReducer, initialState, applyMiddleware(thunk));

describe("Tests for the App component", () => {

  it("Should have the text Finding Falcone!", () => {

    const {queryByText} = render(<Provider store={store()}><App /></Provider>)
    expect(queryByText(/Finding Falcone!/i)).toBeInTheDocument();
  });
});