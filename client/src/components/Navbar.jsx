import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
const Nav = styled(AppBar)`
        background: #111111;
        `;

const Tab = styled(NavLink)`
  margin-right : 50px;
  color:inherit;
  text-decoration :none;
  
`;
const Navbar = () => {
    return (
        <Nav position="static">
            <Toolbar>
                <Tab to='/'>Mern First Project</Tab>
                <Tab to='/add-user'>Add User</Tab>
                <Tab to='/all-user'>All User</Tab>
            </Toolbar>
        </Nav>
    )

}

export default Navbar;