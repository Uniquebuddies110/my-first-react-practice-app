import { React } from "react";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer className="text-black-50 mb1 text-center">
                copyright © {year}
            </footer>
        </>
    );
}

export default Footer;