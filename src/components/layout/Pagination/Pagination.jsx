import React from "react";
import ReactPaginate from "react-paginate";
// import 'bootstrap/dist/css/bootstrap.min.css';
import PgCss from "./Pagination.module.css"

const Pagination = () => {

    const handlePageClick = (data) => {
        console.log(data.selected);
      };

  return (
    <>
      <ReactPaginate
        previousLabel="< previous"
        nextLabel="next >"
        breakLabel={"..."}
        pageCount={20}
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
