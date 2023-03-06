import React from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader({request,params}){
    const url = new URL(request.url);
    const pageId = params.pageId.substr(-1,1);
    const permission = url.searchParams.get("permission");
    return {pageId, permission };
}

const CommonPage = () => {

    const {pageId, permission } = useLoaderData();

    return (
        <div>
            {!permission ? (<p>로그인을 해주세요</p>): (<p>This is page {pageId}!</p>)
            }

        </div>
    );
};

export default CommonPage;