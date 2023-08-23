import { Link } from "react-router-dom";

import logoSvg from "../../public/logo.svg"
import { FaCartArrowDown, FaHeart, FaPerson } from "react-icons/fa6";
import CustomInput from "../components/custom/CustomInput";

export default function Navigation() {
    return (
        <nav>
            <div className="navigation_top default-padding">
                <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link to="/">Shop Now</Link></span>
                <select>
                    <option>English</option>
                    <option>Georgian</option>
                </select>
            </div>
            <div className="navigation_main default-padding">
                <div className="left flex-vertical-align">
                    <img id="logo" src={logoSvg} alt="Exclusive Logo" />
                    <Link>Home</Link>
                    <Link>Contact</Link>
                    <Link>About</Link>
                    <Link>Sign Up</Link>
                </div>
                <div className="right flex-vertical-align">
                    <CustomInput />
                    <FaHeart />
                    <FaCartArrowDown />
                    <FaPerson />
                </div>
            </div>
        </nav>
    )
};
