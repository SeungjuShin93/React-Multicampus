import { Link, link, NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };
  return (
    <div>
      {/* 이 컴포넌트는 Route의 children으로 
            들어가는 JSX를 보여주는 역할을 한다. */}
      <Outlet />
      <ul>
        <li>
          {/* Navlink 컴포넌트는 isActive를 파라메터로 전달 받으며
                    boolean타입이다 */}
          <NavLink
            to={'/Articles/1'}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글1
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/Articles/2'}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글2
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/Articles/3'}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글3
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
