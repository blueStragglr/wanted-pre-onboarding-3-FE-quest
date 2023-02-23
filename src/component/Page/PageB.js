import React from 'react';

const PageB = () => {
    return (
        <div className='flex text-center flex-col font-semibold text-xl'>
            {localStorage.Mylogin ? (
                null
            ) : (
                <p className='text-rose-500'>로그인이 필요합니다.</p>
        )}
            <p>This is Page B</p>
        </div>
    );
};

export default PageB;