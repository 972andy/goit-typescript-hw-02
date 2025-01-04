
import { FC } from 'react';
import { LoadMoreBtnProps } from '../types';

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ reachPage }) => {
  return (
    <button onClick={reachPage}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
