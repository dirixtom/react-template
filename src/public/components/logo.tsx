import React from "react";
import { LogoProps } from "../utils/types";

const Logo = ({ logoPath, logoAlt, logoHref }: LogoProps) => {
    return <>
        <div className="logo">
            <a href={logoHref}>
                <img src={logoPath} alt={logoAlt} />
            </a>
        </div>
    </>;
}

export default Logo;