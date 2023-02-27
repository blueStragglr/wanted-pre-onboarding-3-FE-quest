import React from 'react';

export type pageItemProps = {
  title: string;
  idx: number;
  onClickPageItem: (e: React.MouseEvent) => void;
};

export default function PageItem({
  title,
  idx,
  onClickPageItem,
}: pageItemProps) {
  return (
    <div className="page-item" data-idx={idx} onClick={onClickPageItem}>
      <h2>{title}</h2>
    </div>
  );
}
