import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux"
import { initialState as getDataState } from '../../store/reducers/getData';
import { initialState as formControlState } from '../../store/reducers/formControl';
import rootReducer from "../../store/reducers";
import NavBar from './NavBar';
import { CLEAR } from "../../store/types";

const initialState = {
  getData: getDataState,
  formControl: formControlState,
}
const store = () =>
  createStore(rootReducer, initialState, applyMiddleware(thunk));

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch
  ,
}));


describe('Tests for NavBar component', () => {

  it('Redirects to correct URL on click', () => {

    const { getByTestId } = render(
      <Provider store={store()}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </Provider>,
    );
    fireEvent.click(getByTestId('navBarBrand'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/finding-falcone/');
  });

  it('Called dispatch on click', () => {

    const { getByTestId } = render(
      <Provider store={store()}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </Provider>,
    );
    fireEvent.click(getByTestId('resetButton'));
    expect(mockDispatch).toHaveBeenCalledWith({type: CLEAR});
  });
});

