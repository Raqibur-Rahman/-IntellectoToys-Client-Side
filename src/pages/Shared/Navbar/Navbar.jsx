import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {

    const { user } = useContext(AuthContext);

    const navItems = <>
        <li>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/blogs'>Blogs</Link>
            {/* <Link>Home</Link>
        <Link>Home</Link> */}
        </li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 lg:h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>

                    <Link to="/" className="lg:text-3xl font-bold lg:m-1 lg:p-1 ">
                        <div className='flex items-center'>
                            <div>
                                <img src={logo} alt="" />
                            </div>
                            <div>
                                IntellectoToys
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <Link to='/login'>
                            <span className='btn'> Logout </span>
                        </Link>
                        :
                        <Link to='/login'>
                            <span className='btn'> Login </span>
                        </Link>
                    }

                </div>





                {/* {user.displayName && (
                        <p >
                           {user.name}
                        </p>
                    )} */}

                {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                           <img src={logo} alt="" />
                        </div>
                    </label> */}


            </div>


        </div>
    );
};

export default Navbar;