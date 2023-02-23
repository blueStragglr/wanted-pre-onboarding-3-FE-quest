import React from 'react';

const PageA = () => {
    //페이지별로 로그인 여부의 판단은 계속 고민해보겠습니다. 
    return (
        <div className='flex text-center flex-col font-semibold text-xl'>
            {localStorage.Mylogin ? (
                null
            ) : (
                <p className='text-rose-500'>로그인이 필요합니다.</p>
            )}
            <p>This is Page A</p>
        </div>
    );
};

export default PageA;