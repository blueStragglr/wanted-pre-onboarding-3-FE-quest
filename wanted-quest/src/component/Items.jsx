import React, { useEffect, useState } from 'react';

function Items({menu}) {
  return (
    <div>
      <p>{menu.name}</p>
    </div>
  );
}

export default Items;