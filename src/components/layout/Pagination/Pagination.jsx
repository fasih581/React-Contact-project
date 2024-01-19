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
      />
    </>
  );
};

export default Pagination;
