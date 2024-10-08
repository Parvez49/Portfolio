import React, { useState } from 'react';

const Projects = () => {
    const [showIconProject, setShowIconProject] = useState(false);
    const [showPedigreeProject, setShowPedigreeProject] = useState(false);
    const [showChatProject, setShowChatProject] = useState(false);

    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/Flowbite/flow1.png",
        "/Flowbite/flow2.png",
        "/Flowbite/flow3.png",
        "/Flowbite/flow4.png"
    ];

    const chatImages = [
        "/Chat/chat1.png",
        "/Chat/chat2.png",
        "/Chat/chat3.png",
        "/Chat/chat3.png"
    ]

    const pedigreeImages = [
        "/Pedigree/pedigree1.png",
        "/Pedigree/pedigree2.png",
        "/Pedigree/pedigree3.png"
    ]

    const handleNextImage = () => {
        setCurrentImage((prevIndex) => (prevIndex + 1));
    };

    const handlePrevImage = () => {
        setCurrentImage((prevIndex) => (prevIndex - 1));
    };


    return (
        <div id='projects' className="max-w-5xl mx-auto flex flex-col items-center bg-gray-100 p-2">
            
            {/* Projects Heading */}
            <div className='w-full text-center pt-8 pl-2'>
                <h1 className="text-4xl font-bold mb-8 text-gray-800">Projects</h1>
            </div>
            
            
            {/* Project Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full border-b p-2 m-2">
                <div className='md:w-2/5'>
                    <button className='relative group'>
                        <div 
                            onClick={()=>setShowIconProject(!showIconProject)}
                            className='absolute top-0 left-0 h-full w-full bg-[#1F2A37] rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-60 transition-opacity'>
                            <div className='flex items-center'>
                                <svg className="text-white mr-1 w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"/>
                                </svg>
                                <span className="text-sm font-medium text-white">Details</span>
                            </div>
                        </div> 
                        {/* Image Grid */}
                        <div className="bg-white grid grid-cols-2 gap-2 p-2 ">
                            <img 
                                src="/Flowbite/flow1.png" 
                                alt="Project Image 1" 
                                className="w-full h-full object-cover"
                            />
                            <img 
                                src="/Flowbite/flow2.png" 
                                alt="Project Image 2" 
                                className="w-full h-full object-cover"
                            />
                            <img 
                                src="/Flowbite/flow3.png" 
                                alt="Project Image 3" 
                                className="w-full h-full object-cover"
                            />
                            <img 
                                src="/Flowbite/flow4.png" 
                                alt="Project Image 4" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </button>
                    { showIconProject && (
                        <div
                            className='fixed inset-0 top-24 bg-black bg-opacity-50 flex justify-center items-center z-50'
                            onClick={() => setShowIconProject(!showIconProject)}>
                            <div 
                                className='relative flex gap-4 w-11/12 h-3/4 md:w-3/4 md:h-4/5 lg:w-10/12 lg:h-4/5 bg-white p-5 shadow-lg overflow-auto'
                                onClick={(e) => e.stopPropagation()}>
                                {/* Image Gallery */}
                                <div className="flex-1 bg-gray-200 relative">
                                    <img 
                                        src={images[currentImage]} 
                                        alt="Project Image" 
                                        className="w-full h-full object-fill"
                                    />
                                    <button 
                                        onClick={handlePrevImage} 
                                        className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 ${currentImage === 0?'opacity-50 cursor-not-allowed':''}`}
                                        disabled={currentImage === 0}
                                    >
                                        Prev
                                    </button>

                                    <button 
                                        onClick={handleNextImage} 
                                        className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 ${currentImage === images.length-1?'opacity-50 cursor-not-allowed':''}`}
                                        disabled={currentImage === images.length -1}
                                    >
                                        Next
                                    </button>
                                </div>

                                <div className="hidden md:block w-0.5 bg-blue-300"></div>

                                <div className='flex-1 flex items-center justify-center bg-gray-100'>
                                    {/* Video Section */}
                                    <video controls className="w-full h-full">
                                        <source src="/mixkit.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='inline-flex p-2 items-center justify-center w-full'>
                        <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline'>React</span>
                        <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline'>Tailwind</span>

                    </div>

                </div>
                

                {/* Vertical Divider */}
                <div className="hidden md:block w-0.5 bg-blue-300"></div>
                
                {/* Project Details */}
                <div className="p-5 md:w-3/5 overflow-y-auto h-72">
                    <h2 className="text-2xl font-bold mb-2">Flowbite Icons</h2>
                    <p className="text-gray-700 mb-4">
                        This project involved developing a comprehensive icons page similar to <a href='https://flowbite.com/icons/' target='_blank' className='text-blue-500'> Flowbite Icons page </a>, focusing on user interface and experience. I implemented key functionalities including a light/dark mode toggle, display of various icon types, and advanced filtering and search capabilities to enhance usability.
                    </p>
                    <p className="text-gray-600">
                        <strong>Role:</strong> Frontend Developer
                    </p>

                    
                </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full border-b p-2 m-2">
                <div className='md:w-2/5'>
                    <button className='relative group'>
                        <div 
                            onClick={()=>setShowPedigreeProject(!showPedigreeProject)}
                            className='absolute top-0 left-0 h-full w-full bg-[#1F2A37] rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-60 transition-opacity'>
                            <div className='flex items-center'>
                                <svg className="text-white mr-1 w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"/>
                                </svg>
                                <span className="text-sm font-medium text-white">Details</span>
                            </div>
                        </div> 
                        {/* Image Grid */}
                        <div className="bg-gray-200 grid grid-cols-2 gap-2">
                            <img 
                                src="/Pedigree/pedigree1.png" 
                                alt="Project Image 1" 
                                className="w-full h-full object-cover"
                            />
                            <img 
                                src="/Pedigree/pedigree2.png" 
                                alt="Project Image 2" 
                                className="w-full h-full object-cover"
                            />
                            <img 
                                src="/Pedigree/pedigree3.png" 
                                alt="Project Image 3" 
                                className="w-full h-full object-cover"
                            />
                            <img 
                                src="/Pedigree/pedigree3.png" 
                                alt="Project Image 4" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </button>
                    { showPedigreeProject && (
                        <div
                            className='fixed inset-0 top-24 bg-black bg-opacity-50 flex justify-center items-center z-40'
                            onClick={() => setShowPedigreeProject(!showPedigreeProject)}>
                            <div 
                                className='relative flex gap-4 w-11/12 h-3/4 md:w-3/4 md:h-4/5 lg:w-10/12 lg:h-4/5 bg-white p-5 shadow-lg overflow-auto'
                                onClick={(e) => e.stopPropagation()}>
                                {/* Image Gallery */}
                                <div className="flex-1 bg-gray-200 relative">
                                    <img 
                                        src={pedigreeImages[currentImage]} 
                                        alt="Project Image" 
                                        className="w-full h-full object-fill"
                                    />
                                    <button 
                                        onClick={handlePrevImage} 
                                        className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 ${currentImage === 0?'opacity-50 cursor-not-allowed':''}`}
                                        disabled={currentImage === 0}
                                    >
                                        Prevvv
                                    </button>

                                    <button 
                                        onClick={handleNextImage} 
                                        className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 ${currentImage === images.length-1?'opacity-50 cursor-not-allowed':''}`}
                                        disabled={currentImage === images.length -1}
                                    >
                                        Nexttt
                                    </button>
                                </div>

                                <div className="hidden md:block w-0.5 bg-blue-300"></div>

                                <div className='flex-1 flex items-center justify-center bg-gray-100'>
                                    {/* Video Section */}
                                    <video controls className="w-full h-full">
                                        <source src="/mixkit.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='inline-flex p-2 items-center justify-center w-full'>
                        <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline'>Python</span>
                        <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline'>Django</span>
                        <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline'>React</span>
                        <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline'>Tailwind</span>
                        <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline'>MySQL</span>

                    </div>

                </div>
                

                {/* Vertical Divider */}
                <div className="hidden md:block w-0.5 bg-blue-300"></div>
                
                {/* Project Details */}
                <div className="p-5 md:w-3/5 overflow-y-auto h-80">
                    <h2 className="text-2xl font-bold mb-2">Pedigree</h2>
                    <p className="text-gray-700 mb-4">
                        Pedigree is a project focused on managing and visualizing the hierarchy of patient diseases, aimed at improving patient care and disease tracking. The project is designed to align with the data structure and standards of the OpenEMR project, ensuring seamless integration and interoperability with existing electronic medical records systems.
                    </p>
                    <p className="text-gray-600">
                        <strong>Role:</strong> Frontend, Backend
                    </p>
                </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full border-b p-2 m-2">
                <div className='md:w-2/5 p-2'>
                    <button className='relative group'>
                        <div 
                            onClick={()=>setShowChatProject(!showChatProject)}
                            className='absolute top-0 left-0 h-full w-full bg-[#1F2A37] rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-60 transition-opacity'>
                            <div className='flex items-center'>
                                <svg className="text-white mr-1 w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"/>
                                </svg>
                                <span className="text-sm font-medium text-white">Details</span>
                            </div>
                        </div> 
                        {/* Image Grid */}
                        <div className="bg-gray-200 grid grid-cols-2 gap-2">
                            <img  
                                src="/Chat/chat1.png" 
                                alt="Project Image 1" 
                                className="w-full h-full object-cover"
                            />
                            <img 
                                src="/Chat/chat2.png" 
                                alt="Project Image 2" 
                                className="w-full h-full object-cover"
                            />
                            <img 
                                src="/Chat/chat3.png" 
                                alt="Project Image 3" 
                                className="w-full h-full object-cover"
                            />
                            {/* <img 
                                src="/hour_of_code_certificate.jpg" 
                                alt="Project Image 4" 
                                className="w-full h-full object-cover"
                            /> */}
                        </div>
                    </button>
                    { showChatProject && (
                        <div
                            className='fixed inset-0 top-24 bg-black bg-opacity-50 flex justify-center items-center z-30'
                            onClick={() => setShowChatProject(!showChatProject)}>
                            <div 
                                className='relative flex gap-4 w-11/12 h-3/4 md:w-3/4 md:h-4/5 lg:w-10/12 lg:h-4/5 bg-white p-5 shadow-lg overflow-auto'
                                onClick={(e) => e.stopPropagation()}>
                                {/* Image Gallery */}
                                <div className="flex-1 bg-gray-200 relative">
                                    <img 
                                        src={chatImages[currentImage]} 
                                        alt="Project Image" 
                                        className="w-full h-full object-fill"
                                    />
                                    <button 
                                        onClick={handlePrevImage} 
                                        className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 ${currentImage === 0?'opacity-50 cursor-not-allowed':''}`}
                                        disabled={currentImage === 0}
                                    >
                                        Prev
                                    </button>

                                    <button 
                                        onClick={handleNextImage} 
                                        className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 ${currentImage === images.length-1?'opacity-50 cursor-not-allowed':''}`}
                                        disabled={currentImage === images.length -1}
                                    >
                                        Next
                                    </button>
                                </div>

                                <div className="hidden md:block w-0.5 bg-blue-300"></div>

                                <div className='flex-1 flex items-center justify-center bg-gray-100'>
                                    {/* Video Section */}
                                    <video controls className="w-full h-full">
                                        <source src="/mixkit.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='inline-flex p-2 items-center justify-center w-full'>
                        <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline'>Python</span>
                        <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline'>Django</span>
                        <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline'>React</span>
                        <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline'>Docker</span>

                    </div>

                </div>
                

                {/* Vertical Divider */}
                <div className="hidden md:block w-0.5 bg-blue-300"></div>
                
                {/* Project Details */}
                <div className="p-5 md:w-3/5 overflow-y-auto h-80">
                    <h2 className="text-2xl font-bold mb-2">ChatApp</h2>
                    <p className="text-gray-700 mb-4">
                        ChatApp is a real-time communication platform built using Django on the backend and React on the frontend. It allows two friends to chat in real-time, with additional features like friend search functionality. The application leverages Django Channels for real-time communication and WebSocket for seamless data transfer between the server and client.
                    </p>
                    <p className="text-gray-600">
                        <strong>Role:</strong> Frontend, Backend
                    </p>

                    <p className="text-gray-600">
                        <strong>Features:</strong> Frontend, Backend
                        <ul className='list-disc pl-5 space-y-2'>
                            <li>Real-Time Communication: Two friends can communicate instantly with each other.</li>
                            <li>Friend Search: Users can search for friends within the app to start a chat.</li>
                            <li>Django Channels: Used for handling real-time WebSocket connections.</li>
                            <li>WebSocket: Facilitates live communication between the client and server.</li>
                        </ul>
                    </p>                   
                </div>
            </div>
        </div>
    );
};

export default Projects;
