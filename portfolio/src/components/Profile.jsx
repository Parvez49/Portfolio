import React from 'react';

const Profile = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Profile Information</h2>
            <div className="flex items-center mb-4">
                <img
                    src="/man.jpg"
                    alt="Profile"
                    className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                    <h3 className="font-semibold">Parvez Hossen</h3>
                    <p className='text-sm text-gray-500'>Software Engineer</p>
                </div>
            </div>
            <div className="mb-4">
                <h3 className="font-semibold">Email:</h3>
                <p>ph.cse.bd@gmail.com</p>
            </div>
            <div className="mb-4">
                <h3 className="font-semibold">Phone:</h3>
                <p>+8801568079422</p>
            </div>
            <div className="mb-4">
                <h3 className="font-semibold">Address:</h3>
                <p>Cumilla, Bangladesh</p>
            </div>
            {/* Add more sections as needed */}
        </div>
    );
};

export default Profile;