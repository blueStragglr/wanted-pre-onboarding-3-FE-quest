import React from 'react';

const PageC = () => {
    return (
        <div className='flex text-center flex-col font-semibold text-xl'>
            {localStorage.Mylogin ? (
                null
            ) : (
                <p className='text-rose-500'>로그인이 필요합니다.</p>
            )}
            <p>This is Page C</p>
        </div>
    );
};

export default PageC;