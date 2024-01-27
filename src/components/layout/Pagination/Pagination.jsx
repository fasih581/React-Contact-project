import React from "react";
import ReactPaginate from "react-paginate";
import PgCss from "./Pagination.module.css";

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <>
      <ReactPaginate
        previousLabel="< previous"
        nextLabel="next >"
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        // css
        containerClassName={PgCss.Pagination}
        pageClassName={PgCss.Page_item}
        previousClassName={PgCss.Page_item}
        previousLinkClassName={PgCss.Page_link}
        nextClassName={PgCss.Page_item}
        nextLinkClassName={PgCss.Page_link}
        breakClassName={PgCss.Page_item}
        activeClassName={PgCss.Page_item}
      />
    </>
  );
};

export default Pagination;
