import { NavLink  } from "react-router-dom";
const SideBar = () => {
  const ActiveStyle ={
    color:'lightskyblue',
    fontSize:'1.2em',
    transition:' all 0.5s',
  } 
  return (
    <nav>
      <ul>
        <li><NavLink to='page01' style={({ isActive }) =>
              isActive ? ActiveStyle : undefined
            }>Page01</NavLink></li>
        <li><NavLink to='page02' style={({ isActive }) =>
              isActive ? ActiveStyle : undefined
            }>Page02.</NavLink></li>
        <li><NavLink to='page03' style={({ isActive }) =>
              isActive ? ActiveStyle : undefined
            }>Page03</NavLink></li>
        <li><NavLink to='page04' style={({ isActive }) =>
              isActive ? ActiveStyle : undefined
            }>Page04</NavLink></li>
        <li><NavLink to='page05' style={({ isActive }) =>
              isActive ? ActiveStyle : undefined
            }>Page06</NavLink></li>
        <li><NavLink to='page06' style={({ isActive }) =>
              isActive ? ActiveStyle : undefined
            }>Page07</NavLink></li>
      </ul>
    </nav>
  );
};

export default SideBar;
