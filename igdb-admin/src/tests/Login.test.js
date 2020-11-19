import { render} from '@testing-library/react';
import {Login} from '../Login';

test('renders login container', () => {
  render(
    <Login />);

  var element = document.getElementById("LoginContainer")
  expect(element).toBeInTheDocument();
});

test('renders email inputs', () => {
  render(
    <Login />);

  var emaillabel = document.getElementById("EmailLabel")
  var emailinput = document.getElementById("EmailInput")
  expect(emaillabel).toBeInTheDocument();
  expect(emailinput).toBeInTheDocument();
});

test('renders password inputs', () => {
  render(
    <Login />);

  var passwordlabel = document.getElementById("PasswordLabel")
  var passwordinput = document.getElementById("PasswordInput")
  expect(passwordlabel).toBeInTheDocument();
  expect(passwordinput).toBeInTheDocument();
});

test('renders LoginButton', () => {
  render(
    <Login />);

  var button = document.getElementById("LoginButton")
  expect(button).toBeInTheDocument();
});