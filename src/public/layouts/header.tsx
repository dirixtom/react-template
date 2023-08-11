import React from "react";
import Logo from "../components/logo";
import Typography from "../components/typography";
import "../assets/sass/header.sass";

const Header = () => {
    return <>
        <div id="header" className="header">
            <div className="header__logo">
                <Logo
                    logoPath="/assets/images/logo.png"
                    logoAlt="Company"
                    logoHref="/"
                />
                <Typography variant="h1">Hello World!</Typography>
            </div>
        </div>
    </>;
}

export default Header;