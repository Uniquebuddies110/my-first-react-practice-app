import { React } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
            <NavLink exact activeClassName="active_class" to="/about">About</NavLink>
            <NavLink exact activeClassName="active_class" to="/contact">Contact</NavLink>
        </>
    );
}

export default Menu;