import React, { useEffect, useState } from "react";
import MainCard from "../layout/MainCard/MainCard";
import Header from "../layout/common/Header";
import AddModal from "../layout/modal/AddModal/AddModal";
import Pagination from "../layout/Pagination/Pagination";
import MainLayoutCss from "./Main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addOpenModal } from "../../ReduxToolkit/Features/contactModalSlice";
import { getData } from "../../ReduxToolkit/Features/Api/Slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Mainloyaout = () => {
  const dispatch = useDispatch();
  const { isAddModal } = useSelector((state) => state.modal);
  const search = '';

  const { pageCount, limit } = useSelector(
    (state) => state.data);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getData({ page: currentPage, limit, search }));
  }, [dispatch, currentPage, limit, search]);


  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected + 1);
  };


  const handleSearchChange = (e) => {
    const newSearch = e.target.value;
    dispatch(getData({ search:newSearch, currentPage: 1, limit }));
  };
  
  

  return (
    <>
      <div className={MainLayoutCss.mainlayaout}>
        <div className={MainLayoutCss.box}>
          <Header />
        </div>
      </div>
      <div className={MainLayoutCss.mainBody}>
        <div className={MainLayoutCss.box}>
          <div className={MainLayoutCss.bodyHead}>
            <div className={MainLayoutCss.search}>
              <input
                type="text"
                name=""
                placeholder="Search"
                // value={search}
                onChange={handleSearchChange}
              />
            </div>
            <button
              className={MainLayoutCss.btn}
              onClick={() => {
                dispatch(addOpenModal());
              }}
            >
              Add Contact
            </button>
            {isAddModal && <AddModal />}
          </div>
          <div className={MainLayoutCss.body}>
            <MainCard currentPage={currentPage}/>
          </div>
          <div className={MainLayoutCss.footer}>
            <Pagination
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Mainloyaout;
