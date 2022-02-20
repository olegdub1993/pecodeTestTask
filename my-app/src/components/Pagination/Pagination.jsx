import React from 'react';
import { ArrowDown, PointsIcon } from '../svg/svg';
import c from "./Pagination.module.scss"
import ReactPaginate from 'react-paginate';


 export const Pagination=({pageCount, handlePageClick})=> {
   const pageCountRounded=Math.ceil(pageCount)
  return (
    <>
      <ReactPaginate
        breakLabel={<PointsIcon className={c.points}/>}
        nextLabel={<span className={c.nextPrev}><ArrowDown className={c.next}/></span>}
        previousLabel={<span className={c.nextPrev}><ArrowDown className={c.prev}/></span>} 
        activeClassName={c.active}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={3}
        pageCount={pageCountRounded}
        containerClassName={c.container}
        pageClassName={c.page}
        renderOnZeroPageCount={null}
      />
    </>
  );
}