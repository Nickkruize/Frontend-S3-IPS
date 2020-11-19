import {render} from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import {Register} from '../Register';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Register></Register>, div)
  })

it('renders Register container', () => {
    const wrapper = shallow(<Register/>);
    expect(wrapper.find('[data-testid="RegisterContainer"]').length).toEqual(1);
});

it("renders usernamelabel correctly", () =>{
    const wrapper = shallow(<Register/>);
    expect(wrapper.find('[data-testid="UsernameLabel"]').at(0).text()).toEqual('Username')
    expect(wrapper.find('[data-testid="UsernameLabel"]').length).toEqual(1);
  })
  
  it('renders usernameinput correctly', () => {
    const wrapper = shallow(<Register/>);
    expect(wrapper.find('[data-testid="UsernameInput"]').at(0).props().placeholder).toEqual('Username')
    expect(wrapper.find('[data-testid="UsernameInput"]').length).toEqual(1);
  });

  it("renders emaillabel correctly", () =>{
    const wrapper = shallow(<Register/>);
    expect(wrapper.find('[data-testid="EmailLabel"]').at(0).text()).toEqual('Email')
    expect(wrapper.find('[data-testid="EmailLabel"]').length).toEqual(1);
  })
  
  it('renders emailinput correctly', () => {
    const wrapper = shallow(<Register/>);
    expect(wrapper.find('[data-testid="EmailInput"]').at(0).props().placeholder).toEqual('Email')
    expect(wrapper.find('[data-testid="EmailInput"]').length).toEqual(1);
  });

  it('renders passwordlabel correctly', () => {
    const wrapper = shallow(<Register/>);
    expect(wrapper.find('[data-testid="PasswordLabel"]').at(0).text()).toEqual('Password')
    expect(wrapper.find('[data-testid="PasswordLabel"]').length).toEqual(1);
});

it('renders passwordinput correctly', () => {
    const wrapper = shallow(<Register/>);
    expect(wrapper.find('[data-testid="PasswordInput"]').at(0).props().placeholder).toEqual('Password')
    expect(wrapper.find('[data-testid="PasswordInput"]').length).toEqual(1);
});

it('renders passwordconfirmlabel correctly', () => {
    const wrapper = shallow(<Register/>);
    expect(wrapper.find('[data-testid="PasswordConfirmLabel"]').at(0).text()).toEqual('Confirm Password')
    expect(wrapper.find('[data-testid="PasswordConfirmLabel"]').length).toEqual(1);
});

it('renders passwordconfirminput correctly', () => {
    const wrapper = shallow(<Register/>);
    expect(wrapper.find('[data-testid="PasswordConfirmInput"]').at(0).props().placeholder).toEqual('Password confirmation')
    expect(wrapper.find('[data-testid="PasswordConfirmInput"]').length).toEqual(1);
});

it('renders RegisterButton correctly', () => {
    const {getByTestId} = render(<Register></Register>)
    expect(getByTestId("RegisterButton")).toBeInTheDocument();
});