import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth();

    const links = <div className='md:flex items-center justify-center'>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-cyan-400 font-bold underline" : "text-cyan-500"}>Home</NavLink></li>
        <li><NavLink to="/my_card" className={({ isActive }) => isActive ? "text-cyan-400 font-bold underline" : "text-cyan-500"}>My Card</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => isActive ? "text-cyan-400 font-bold underline" : "text-cyan-500"}>Login</NavLink></li>
    </div>

    return (
        <div className="max-w-6xl mx-auto navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Zest<span className='text-cyan-500'>Ora</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ? <img src={user?.photoURL} alt="" /> : <img alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            }
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a>
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={() => logOut()}><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navbar;