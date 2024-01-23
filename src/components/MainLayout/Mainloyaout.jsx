// import React, { useEffect, useState } from "react";
// import MainCard from "../layout/MainCard/MainCard"
// import Header from "../layout/common/Header";
// import AddModal from "../layout/modal/AddModal/AddModal";
// import Pagination from "../layout/Pagination/Pagination";
// import MainLayoutCss from "./Main.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { addOpenModal } from "../../ReduxToolkit/Features/contactModalSlice";
// import { getData } from "../../ReduxToolkit/Features/Api/get.Slice";

// const Mainloyaout = () => {
//   const dispatch = useDispatch();
//   const { isAddModal } = useSelector((state) => state.modal);

//   const { isLoading, data, error, totalCount } = useSelector(
//     (state) => state.getMethod
//   );

//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageClick = ({ selected }) => {
//     setCurrentPage(selected + 1);
//   };

//   useEffect(() => {
//     dispatch(getData({ page: currentPage }));
//   }, [dispatch, currentPage]);

//   return (
//     <>
//       <div className={MainLayoutCss.mainlayaout}>
//         <div className={MainLayoutCss.box}>
//           <Header />
//         </div>
//       </div>
//       <div className={MainLayoutCss.mainBody}>
//         <div className={MainLayoutCss.box}>
//           <div className={MainLayoutCss.bodyHead}>
//             <div className={MainLayoutCss.search}>
//               <input type="text" name="" placeholder="Search" />
//             </div>
//             <button
//               className={MainLayoutCss.btn}
//               onClick={() => {
//                 dispatch(addOpenModal());
//               }}
//             >
//               Add Contact
//             </button>
//             {isAddModal && <AddModal />}
//           </div>
//           <div className={MainLayoutCss.body}>
//             <MainCard />
//           </div>
//           <div className={MainLayoutCss.footer}>
//           <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Mainloyaout;

import React, { useEffect, useState } from "react";
import MainCard from "../layout/MainCard/MainCard";
import Header from "../layout/common/Header";
import AddModal from "../layout/modal/AddModal/AddModal";
import Pagination from "../layout/Pagination/Pagination";
import MainLayoutCss from "./Main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addOpenModal } from "../../ReduxToolkit/Features/contactModalSlice";
import { getData } from "../../ReduxToolkit/Features/Api/get.Slice";

const Mainloyaout = () => {
  const dispatch = useDispatch();
  const { isAddModal } = useSelector((state) => state.modal);

  const { isLoading, data, error, pageCount, limit } = useSelector(
    (state) => state.getMethod
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    dispatch(getData({ page: currentPage, limit, search: searchTerm }));
  }, [dispatch, currentPage, limit, searchTerm]);

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
                value={searchTerm}
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
            <MainCard />
          </div>
          <div className={MainLayoutCss.footer}>
            <Pagination
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainloyaout;
