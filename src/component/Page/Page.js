import React from 'react';

const Page = ({name}) => {
    return (
        <div className='flex justify-center items-center w-full'>
            <p>This is Page {name}!</p>
        </div>
    );
};

export default Page;