import React from 'react';
import Greatings from '../components/Headers/Greatings';
import NavHeader from '../components/Headers/NavHeader';
import Projects from '../components/Projects/Projects';
import Skill from '../components/Skill/Skill';

const Dashboard = () => {
    return (
    <div className='antialiased'>
        <div className='flex flex-col'>
            <header className='sticky top-0 z-40 mx-auto w-full bg-gray-50 dark:bg-gray-800 shadow-md'>
                <Greatings />
                <NavHeader />
            </header>
            <main className='w-full mx-auto'>
                <Projects />
                <Skill />
            </main>

        </div>

    </div>
    );
};

export default Dashboard;