import React from 'react';
import { useParams } from 'react-router-dom';

const Page = ({ pageList }) => {
  const { pageId } = useParams();

  return (
    <div className='page'>
      {pageList.map((page) => {
        return pageId === page.id && <p key={page.id}>This is {page.page}!</p>;
      })}
    </div>
  );
};

export default Page;
