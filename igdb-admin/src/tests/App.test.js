import {Layout} from '../Layout';
import {NavMenu} from '../NavMenu';
import {shallow} from "enzyme";
import App from '../App';


it("renders without crashing", () =>{
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy()
})

test("expect layout is called at least once", () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Layout).length).toEqual(1);
  });

test("expect Navmenu is called at least once", () => {
    const wrapper = shallow(<Layout/>);
    expect(wrapper.find(NavMenu).length).toEqual(1);
  });


