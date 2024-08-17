import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Profile from '../Profile';


const NavHeader = () => {
    const { theme, toggleTheme } = useTheme();
    const [ openCV, setOpenCV ] = useState(false);
    const [ openProfile, setOpenProfile] = useState(false);
    return (
        <div className='w-full px-3 py-3 mx-auto lg:flex lg:justify-between lg:items-center max-w-5xl lg:px-3'>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <button 
                        onClick={()=>{setOpenProfile(!openProfile)}}
                        className="flex items-center justify-between">
                        <span>
                            <img
                                src='/man.jpg' 
                                alt='img'
                                className='h-8 w-8 bg-contain rounded-full'
                            />  
                        </span>
                        <span className="self-center ml-3 text-2xl font-semibold whitespace-nowrap dark:text-white">Parvez</span>
                    </button>

                    {openProfile && (
                        <div
                        className="fixed inset-0 bg-black opacity-50"
                        onClick={()=>{setOpenProfile(!openProfile)}}
                        ></div>
                    )}

                    {/* Drawer */}
                    <div
                        className={`fixed top-0 right-0 w-96 h-full bg-white shadow-lg transform ${
                        openProfile ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-300 ease-in-out`}
                    >
                        <button
                        onClick={()=>{setOpenProfile(!openProfile)}}
                        className="p-4 text-white"
                        >
                            <svg className="w-6 h-6 text-gray-800 dark:text-white hover:bg-red-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                            </svg>

                        </button>
                        <Profile />
                    </div>
                </div>
                
            </div>
            <div>
            <ul className='flex flex-col py-2 lg:py-0 lg:flex-row lg:self-center w-full lg:w-auto'>
                <li><a href='#projects' className='block py-2 text-sm font-medium text-gray-900 lg:px-3 lg:py-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500'>Projects</a></li>
                <li><a href='#skills' className='block py-2 text-sm font-medium text-gray-900 lg:px-3 lg:py-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500'>Skills</a></li>
                <li><a className='block py-2 text-sm font-medium text-gray-900 lg:px-3 lg:py-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500'>Blog</a></li>
                <li><a className='block py-2 text-sm font-medium text-gray-900 lg:px-3 lg:py-0 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500'>FAQ</a></li>
            </ul>
            </div>
        <div className='flex items-center w-full lg:w-auto'>
            
            <div>
                <div className="items-center hidden mr-3 lg:flex">
                    <a  href="mailto:ph.cse.bd@gmail.com" target='_blank' className="hidden xl:inline-flex items-center justify-center w-10 h-10 text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                        <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" fill='currentColor' viewBox="0 0 50 50">
                            <path d="M 43.753906 6.4023438 C 42.53621 6.3489969 41.294792 6.712898 40.271484 7.46875 L 37.525391 9.4960938 L 25 18.755859 L 12.591797 9.5839844 A 1.0001 1.0001 0 0 0 11.949219 9.3007812 L 12.199219 9.3007812 L 9.734375 7.4765625 C 8.7104042 6.7188363 7.4671493 6.3528895 6.2480469 6.40625 C 5.0289444 6.4596105 3.8349462 6.9314667 2.9082031 7.8457031 C 1.7309454 9.0063798 1 10.629831 1 12.410156 L 1 15.84375 A 1.0001 1.0001 0 0 0 1 16.138672 L 1 39.5 C 1 41.421188 2.5788117 43 4.5 43 L 12 43 A 1.0001 1.0001 0 0 0 13 42 L 13 25.373047 L 24.40625 33.804688 A 1.0001 1.0001 0 0 0 25.59375 33.804688 L 37 25.373047 L 37 42 A 1.0001 1.0001 0 0 0 38 43 L 45.5 43 C 47.421188 43 49 41.421188 49 39.5 L 49 16.119141 A 1.0001 1.0001 0 0 0 49 15.859375 L 49 12.410156 C 49 10.6517 48.290455 9.0357821 47.128906 7.8730469 C 47.095336 7.8394769 47.084086 7.83018 47.097656 7.84375 A 1.0001 1.0001 0 0 0 47.091797 7.8378906 C 46.165242 6.9256756 44.971603 6.4556905 43.753906 6.4023438 z M 43.644531 8.4003906 C 44.400835 8.4300436 45.134049 8.7168876 45.689453 9.2636719 C 45.708363 9.2823439 45.722171 9.2964424 45.712891 9.2871094 C 46.50934 10.084374 47 11.188613 47 12.410156 L 47 15.496094 L 39 21.408203 L 39 11 A 1.0001 1.0001 0 0 0 38.996094 10.898438 L 41.458984 9.078125 A 1.0001 1.0001 0 0 0 41.460938 9.078125 C 42.109578 8.598977 42.888228 8.3707375 43.644531 8.4003906 z M 6.3574219 8.40625 C 7.1145694 8.37661 7.8958927 8.6037105 8.5449219 9.0839844 L 11.003906 10.902344 A 1.0001 1.0001 0 0 0 11 11 L 11 21.408203 L 3 15.496094 L 3 12.410156 C 3 11.174482 3.5017577 10.068855 4.3125 9.2695312 C 4.8677569 8.7217677 5.6002743 8.4358895 6.3574219 8.40625 z M 37 12.371094 L 37 22.886719 L 25 31.755859 L 13 22.886719 L 13 12.373047 L 24.40625 20.804688 A 1.0001 1.0001 0 0 0 25.59375 20.804688 L 37 12.371094 z M 3 17.982422 L 11 23.896484 L 11 41 L 4.5 41 C 3.6591883 41 3 40.340812 3 39.5 L 3 17.982422 z M 47 17.982422 L 47 39.5 C 47 40.340812 46.340812 41 45.5 41 L 39 41 L 39 23.896484 L 47 17.982422 z"></path>
                        </svg>
                    </a>
                    <a href="https://github.com/Parvez49" target="_blank" className="hidden xl:inline-flex items-center justify-center w-10 h-10 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                        <svg className="w-[1.1rem] h-[1.1rem] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/parvez-hossen-6b7133157/" target='_blank' className="hidden xl:inline-flex items-center justify-center w-10 h-10 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                        </svg>
                    </a>
                    <button 
                        type="button" 
                        onClick={toggleTheme}
                        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 inline-flex items-center justify-center"
                    >
                        {theme === 'dark' ?
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path></svg>
                        :
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20"><path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path></svg>
                        }
                        
                    </button>
                    <a 
                        onClick={() => setOpenCV(!openCV)}
                        className="inline-flex items-center gap-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1 md:ml-3" href="#">
                        <span className="md:hidden">CV</span><span className="hidden md:inline">CV</span>
                        { openCV ? (
                            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                          
                        ):(
                            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                        )}
                    </a>
                    { openCV && (
                        <div 
                            className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'
                            onClick={() => setOpenCV(!openCV)}
                        >
                            <div 
                                className='relative w-11/12 h-3/4 md:w-3/4 md:h-4/5 lg:w-2/3 lg:h-4/5 bg-white p-5 shadow-lg overflow-auto'
                                onClick={(e) => e.stopPropagation()}
                            >
                                <embed 
                                    src="/CV.pdf" 
                                    type="application/pdf" 
                                    width="100%" 
                                    height="100%" 
                                />
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
        
    </div>
    );
};

export default NavHeader;