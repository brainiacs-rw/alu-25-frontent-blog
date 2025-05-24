import React,{ type FC }   from "react";
import { Link} from 'react-router-dom'

const Navbar  : FC = () => {
    return (
        <nav className="py-3 px-5 border-b border-slate-300 flex items-center justify-between">
            <span>Bloggie</span>

            <div className="flex items-center space-x-2"> 
                <Link to={'/'}>Home</Link>
                <Link to={'/terms'}>Terms and conditions</Link>
            </div>
        </nav>
    )
 }


 export default Navbar;

