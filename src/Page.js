import React from 'react';
function Page(props) {
  return (
    <div className="pages activate">
     {props.name}
    </div>
  );
}
export default Page;