import { render} from '@testing-library/react';
import {Register} from '../Register';

test('renders Register container', () => {
  render(
    <Register />);

  var element = document.getElementById("RegisterContainer")
  expect(element).toBeInTheDocument();
});

test('renders username inputs', () => {
    render(
      <Register />);
  
    var usernamelabel = document.getElementById("UsernameLabel")
    var usernameinput = document.getElementById("UsernameInput")
    expect(usernamelabel).toBeInTheDocument();
    expect(usernameinput).toBeInTheDocument();
  });

test('renders email inputs', () => {
  render(
    <Register />);

  var emaillabel = document.getElementById("EmailLabel")
  var emailinput = document.getElementById("EmailInput")
  expect(emaillabel).toBeInTheDocument();
  expect(emailinput).toBeInTheDocument();
});

test('renders password inputs', () => {
  render(
    <Register />);

  var passwordlabel = document.getElementById("PasswordLabel")
  var passwordinput = document.getElementById("PasswordInput")
  expect(passwordlabel).toBeInTheDocument();
  expect(passwordinput).toBeInTheDocument();
});

test('renders passwordconfirm inputs', () => {
    render(
      <Register />);
  
    var passwordconfirmlabel = document.getElementById("PasswordConfirmLabel")
    var passwordconfirminput = document.getElementById("PasswordConfirmInput")
    expect(passwordconfirmlabel).toBeInTheDocument();
    expect(passwordconfirminput).toBeInTheDocument();
  });

test('renders RegisterButton', () => {
  render(
    <Register />);

  var button = document.getElementById("RegisterButton")
  expect(button).toBeInTheDocument();
});