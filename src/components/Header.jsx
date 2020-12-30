import { React } from "react";
import logo from '../logo.svg';
import '../css/App.css';

const Header = () => {
    return (<>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Hi Welcome to HomePage
        </p>
        </header>
    </>
    );
}

export default Header;