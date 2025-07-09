import './index.css';
import { useNavigate } from "react-router-dom";


const NavbarList= ({label, href, className}) =>{
    const navigate = useNavigate();
    
    return(
        <li className={`navbar-item-${className}`}>
            <a onClick={()=>{navigate(href)}} className='navbar--link'>{label}</a>
        </li>
    )
};

export default NavbarList;