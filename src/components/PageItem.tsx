import React from 'react';

export type pageItemProps = {
  title: string;
  idx: number;
  clickedPage: string;
  onClickPageItem: (e: React.MouseEvent) => void;
};

export default function PageItem({
  title,
  idx,
  clickedPage,
  onClickPageItem,
}: pageItemProps) {
  return (
    <div
      className={`page__item ${clickedPage === title ? 'clicked' : ''}`}
      data-idx={idx}
      onClick={onClickPageItem}
    >
      <h2>{title}</h2>
    </div>
  );
}
