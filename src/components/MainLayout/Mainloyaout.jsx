import React, { useState } from "react";
import MainCard from "..//layout/MainCard/MainCard";
import Header from "../layout/common/Header";
import AddModal from "../layout/modal/AddModal/AddModal";
import Pagination from "../layout/Pagination/Pagination";
import MainLayoutCss from "./Main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addOpenModal } from "../../ReduxToolkit/Features/contactModalSlice";

const Mainloyaout = () => {
  const dispatch = useDispatch();
  const {isAddModal} = useSelector((state) => state.modal);

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
              <input type="text" name="" placeholder="Search" />
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
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainloyaout;
