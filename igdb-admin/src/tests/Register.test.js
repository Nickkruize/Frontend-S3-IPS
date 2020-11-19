import { render} from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import {Register} from '../Register';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Register></Register>, div)
  })

it('renders Register container', () => {
    const {getByTestId} = render(<Register></Register>)
    expect(getByTestId('RegisterContainer')).toBeInTheDocument();
});

it("renders usernamelabel correctly", () =>{
    const {getByTestId} = render(<Register></Register>)
    expect(getByTestId('UsernameLabel')).toHaveTextContent("Username")
    expect(getByTestId('UsernameLabel')).toBeInTheDocument();
  })
  
  it('renders usernameinput correctly', () => {
    const {getByTestId} = render(<Register></Register>)
    expect(getByTestId('UsernameInput')).toBeInTheDocument();
  });

  it("renders emaillabel correctly", () =>{
    const {getByTestId} = render(<Register></Register>)
    expect(getByTestId('EmailLabel')).toHaveTextContent("Email")
    expect(getByTestId('EmailLabel')).toBeInTheDocument();
  })
  
  it('renders emailinput correctly', () => {
    const {getByTestId} = render(<Register></Register>)
    expect(getByTestId('EmailInput')).toBeInTheDocument();
  });

  it('renders passwordlabel correctly', () => {
    const {getByTestId} = render(<Register></Register>)
    expect(getByTestId('PasswordLabel')).toHaveTextContent("Password")
    expect(getByTestId('PasswordLabel')).toBeInTheDocument();
});

it('renders passwordinput correctly', () => {
    const {getByTestId} = render(<Register></Register>)
  expect(getByTestId('PasswordInput')).toBeInTheDocument();
});

it('renders passwordconfirmlabel correctly', () => {
    const {getByTestId} = render(<Register></Register>)
    expect(getByTestId('PasswordConfirmLabel')).toHaveTextContent("Confirm Password")
    expect(getByTestId('PasswordConfirmLabel')).toBeInTheDocument();
});

it('renders passwordconfirminput correctly', () => {
    const {getByTestId} = render(<Register></Register>)
  expect(getByTestId('PasswordConfirmInput')).toBeInTheDocument();
});

it('renders RegisterButton correctly', () => {
    const {getByTestId} = render(<Register></Register>)
    expect(getByTestId("RegisterButton")).toBeInTheDocument();
});