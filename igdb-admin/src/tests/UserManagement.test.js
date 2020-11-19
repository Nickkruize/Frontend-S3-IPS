import {UserManager} from '../UserManager';
import {shallow} from "enzyme";
import { AccessDenied } from '../AccessDenied';


const wrapper = shallow(<UserManager/>)

const user = {
    email: "piet@gmail.com",
    username: "Piet",
    roleID : 0
  }
  
const admin = {
    email: "david@gmail.com",
    username: "Dave",
    roleID : 1
  };

  const UserList = 
  [
    {
        id : 2,
        username: "Nick",
        email: "Nick@gmail.com",
        roleID : 0
    },
    {
        id : 3,
        username: "Mark",
        email: "Mark@gmail.com",
        roleID : 0 
    }
]
  
  describe("rendering of the page for different account-priveleges", () => {
    it("updates the user in the state", () => {
      expect(wrapper.state("User")).toEqual(null);

      wrapper.setState({User : admin})
      expect(wrapper.state("User")).toEqual(admin);

      wrapper.setState({User : user})
      expect(wrapper.state("User")).toEqual(user);
    });

    it("updates AllUsers in the state", () => {

        expect(wrapper.state("AllUsers")).toEqual(null);

        wrapper.setState({AllUsers : UserList})
  
        expect(wrapper.state("AllUsers")).toEqual(UserList);
    });

    it("Return accessdenied when user is set null", () => {
        wrapper.setState({User : null})

        expect(wrapper.find(AccessDenied).length).toEqual(1);
        expect(wrapper.find('[data-testid="UserTable"]').length).toEqual(0);
    });

    it("Return accessdenied when user is set to user", () => {
        wrapper.setState({User : user})
        wrapper.setState({AllUsers : UserList})

        expect(wrapper.find(AccessDenied).length).toEqual(1);
        expect(wrapper.find('[data-testid="UserTable"]').length).toEqual(0);
    });

    it("Renders the users table when User is set to admin", () => {
        wrapper.setState({User : admin})
        wrapper.setState({AllUsers : UserList})

        expect(wrapper.find(AccessDenied).length).toEqual(0);
        expect(wrapper.find('[data-testid="UserTable"]').length).toEqual(1);
    });
});