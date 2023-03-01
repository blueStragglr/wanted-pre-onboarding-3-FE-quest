import React from 'react';
import { NAV_PAGE_LABEL } from '../constant/constant';

interface buttonType {
  label: string;
}
function PageButton(props: buttonType) {
  const { label } = { ...props };
  return <button>{`${NAV_PAGE_LABEL} ${label}`}</button>;
}

export default PageButton;
