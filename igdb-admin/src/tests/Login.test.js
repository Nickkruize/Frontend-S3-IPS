import {render, cleanup} from '@testing-library/react';
import React from "react";
import ReactDOM from 'react-dom';
import {Login} from '../Login';

afterEach(cleanup);



it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Login></Login>, div)
})

test('renders login container correctly', () => {
  const {getByTestId} = render(<Login></Login>)
  expect(getByTestId('LoginContainer')).toBeInTheDocument();
});


it(" renders emaillabel correctly", () =>{
  const {getByTestId} = render(<Login></Login>)
  expect(getByTestId('EmailLabel')).toHaveTextContent("Email")
  expect(getByTestId('EmailLabel')).toBeInTheDocument();
})

it('renders emailinput correctly', () => {
  const {getByTestId} = render(<Login></Login>)
  expect(getByTestId('EmailInput')).toBeInTheDocument();
});

test('renders passwordlabel correctly', () => {
    const {getByTestId} = render(<Login></Login>)
    expect(getByTestId('PasswordLabel')).toHaveTextContent("Password")
    expect(getByTestId('PasswordLabel')).toBeInTheDocument();
});

it('renders passwordinput correctly', () => {
  const {getByTestId} = render(<Login></Login>)
  expect(getByTestId('PasswordInput')).toBeInTheDocument();
});

test('renders LoginButton', () => {
  const {getByTestId} = render(<Login></Login>)
  expect(getByTestId("LoginButton")).toBeInTheDocument();
});