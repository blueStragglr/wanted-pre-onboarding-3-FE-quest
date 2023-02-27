import React from 'react';

export type pageItemProps = {
  title: string;
  idx: number;
  isClicked: boolean;
  onClickPageItem: (e: React.MouseEvent) => void;
};

export default function PageItem({
  title,
  idx,
  isClicked,
  onClickPageItem,
}: pageItemProps) {
  return (
    <div
      className={`page-item ${isClicked && 'is-clicked'}`}
      data-idx={idx}
      onClick={onClickPageItem}
    >
      <h2>{title}</h2>
    </div>
  );
}
