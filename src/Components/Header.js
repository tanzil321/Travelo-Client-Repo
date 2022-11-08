import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import img1 from '../Assets/travel.png'
import { AuthContext } from './Context/UserContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { user, logout } = useContext(AuthContext)
    console.log(user);
    useEffect(() => {
      console.log('Navbar',JSON.stringify(user));
    },[user])

  const handleLogout = () => {
    logout()
      .then(toast.warning('User logged out!'))
      .catch(error => console.log(error))
  }
    return (
      <div className='p-4 dark:bg-gray-800 dark:text-gray-100 '>
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
          <div className='relative flex items-center justify-between'>
            <Link
              to='/'
              aria-label='travelo'
              title='travelo'
              className='inline-flex items-center'
            >
              <img src={img1} className='mr-3 h-6 sm:h-9' alt="" />
              <span className='ml-2 text-2xl font-serif font-bold tracking-wide text-white'>
                Travelo
              </span>
            </Link>
            <ul className='flex items-center hidden space-x-8 lg:flex'>
              <li>
                <NavLink
                  to='/'
                  aria-label='Home'
                  title='Home'
                  className={({ isActive }) =>
                    isActive
                      ? 'font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      : 'font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/services'
                  aria-label='Services'
                  title='Services'
                  className={({ isActive }) =>
                    isActive
                      ? 'font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      : 'font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                  }
                >
                  Services 
                </NavLink>
              </li>
              
              <li>
                <NavLink
                  to='/blog'
                  aria-label='Blog'
                  title='Blog'
                  className={({ isActive }) =>
                    isActive
                      ? 'font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      : 'font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                  }
                >
                  Blog 
                </NavLink>
              </li>
              <li>
                
                {/* <NavLink
                  to='/login'
                  aria-label='Login Here'
                  title='Login'
                  className={({ isActive }) =>
                    isActive
                      ? 'font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400 self-center px-8 py-3 rounded'
                      : 'font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400 self-center px-8 py-3 rounded'
                  }
                >
                  Login
                </NavLink> */}
                {user?.uid ? (
            <>
            <span className='mr-5 text-purple-900 font-bold'> <h1> {user?.uid? user?.displayName : 'user'}</h1></span>
            <div>
                    {
                        user ? <img src={user?.photoURL} title={user?.displayName} style={{
                            width: '40px',
                            borderRadius: '50%',
                            marginRight:'10px'
                        }} alt="" /> : ''
                    }
                </div>
              <button
                onClick={handleLogout}
                className='inline-flex items-center bg-slate-400 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0'
              >
                Logout
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4 ml-1'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </button>
            </>
          ) : (
            <>
            <Link to='/login' className='inline-flex  items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'>
              Login
            </Link>
            <Link to='/register' className='inline-flex  items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'>
            Register
          </Link>
            </>
          )}
                {/* <NavLink
                  to='/register'
                  aria-label='Signup Here'
                  title='Signup'
                  className={({ isActive }) =>
                    isActive
                      ? 'self-center px-8 py-3 font-semibold rounded dark:bg-teal-400 dark:text-gray-900'
                      : 'self-center px-8 py-3 font-semibold rounded dark:bg-teal-400 dark:text-gray-900'
                  }
                >
                  SignUp
                </NavLink> */}
              </li>
            </ul>
            <div className='lg:hidden'>
              <button
                aria-label='Open Menu'
                title='Open Menu'
                className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                  />
                  <path
                    fill='currentColor'
                    d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                  />
                  <path
                    fill='currentColor'
                    d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className='absolute top-0 left-0 w-full'>
                  <div className='p-5 dark:bg-gray-800 border rounded shadow-sm'>
                    <div className='flex items-center justify-between mb-4'>
                      <div>
                        <Link
                          to='/'
                          aria-label='travelo'
                          title='travelo'
                          className='inline-flex items-center'
                        >
                          
                          <span className='ml-2 text-xl font-bold tracking-wide text-white uppercase'>
                            Travelo
                          </span>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label='Close Menu'
                          title='Close Menu'
                          className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                            <path
                              fill='currentColor'
                              d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className='space-y-4'>
                        <li>
                          <Link
                            to='/'
                            aria-label='Home'
                            title='Home'
                            className='font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/topic'
                            aria-label='Topics'
                            title='Topics'
                            className='font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                          >
                            Topics
                          </Link>
                        </li>
                        
                        <li>
                          <Link
                            to='/blog'
                            aria-label='Blog'
                            title='Blog'
                            className='font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                          >
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/login'
                            aria-label='login'
                            title='statics'
                            className='font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                          >
                            Login
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    )
};

export default Header;