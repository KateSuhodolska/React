import React, { Component } from "react";

const Pagination = ({ prev, next, page, total }) => {
  const isPrevPageAvailable = page + 1 === 1 ? true : false;

  const isNextPageAvailable = total / (page + 1) <= 3 ? true : false;

  return (
    <div className="pagination">
      <button className="btn" onClick={prev} disabled={isPrevPageAvailable}>
        ←
      </button>
      <span className="pagination__page">{page + 1}</span>
      <button className="btn" onClick={next} disabled={isNextPageAvailable}>
        →
      </button>
    </div>
  );
};

export default Pagination;

// {
//   goPrev,
//   goNext,
//   currentPage,
//   totalItems,
//   itemsPerPage,
// }
