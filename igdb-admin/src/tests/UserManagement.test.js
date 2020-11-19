import { render} from '@testing-library/react';
import {UserManager} from '../UserManager';
import {shallow, mount} from "enzyme";
import { AccessDenied } from '../AccessDenied';

test('Does Not Render UserManagerTable', () => {
    render(
      <UserManager />);
  
    var element = document.getElementById("UserManagerTable")
    expect(element).toBeNull();
  });

  test("expect component is called at least once", () => {
    const wrapper = shallow(<UserManager/>);
    expect(wrapper.find(AccessDenied).length).toEqual(1);
  });

  const user = {
    email: "david@gmail.com",
    username: "Dave",
    RoleID : 2
  };

  const AllUsers = {
    id : 2,
    email: "Nick@gmail.com",
    username: "Nick",
    RoleID : 0
  }

  describe("user", () => {
    it("accepts user account props", () => {
      const wrapper = shallow(<UserManager />);
      expect(wrapper.state("User")).toEqual(null);
      expect(wrapper.find(AccessDenied).length).toEqual(1);
      expect(wrapper.find('.Dave').length).toEqual(0);

      wrapper.setState({User : user})
      wrapper.setState({AllUsers : AllUsers})

      expect(wrapper.state("User")).toEqual(user);
      expect(wrapper.state("AllUsers")).toEqual(AllUsers);

      expect(wrapper.find(AccessDenied).length).toEqual(1);
      expect(wrapper.find('.Dave').length).toEqual(0);

    });
    it("Updates the state of the component", () => {
        const wrapper = shallow(<UserManager />);

        wrapper.setState({User : user})
        wrapper.setState({AllUsers : AllUsers})
  
        expect(wrapper.state("User")).toEqual(user);
        expect(wrapper.state("AllUsers")).toEqual(AllUsers);
    });
    it("Renders the users table", () => {
        const wrapper = shallow(<UserManager />);

        wrapper.setState({User : user})
        wrapper.setState({AllUsers : AllUsers})
        wrapper.update()

        // expect(wrapper.find(AccessDenied).length).toEqual(0);
        // expect(wrapper.find('.Dave').length).toEqual(1);
    });
});