import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { light, dark } from "../state/darkLightMode"
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <h1>CRUD APP</h1>
      <ul className="nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/post/add">Add Post</NavLink>
        </li>
        <li className="login">login</li>
        <li className="login"><button onClick={() => { dispatch(light()) }}>Light mode</button></li>
        <li className="login"><button onClick={() => { dispatch(dark()) }}>Dark mode</button></li>
      </ul>
    </div>
  );
};

export default Header;
