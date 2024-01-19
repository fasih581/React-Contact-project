import React from "react";
// import DeletContact from "../layout/modal/DeletModal/DeletModal"
import MainCard from "..//layout/MainCard/MainCard";
import Header from "../layout/common/Header";
import Pagination from "../layout/Pagination/Pagination";
import MainLayoutCss from "./Main.module.css";

const Mainloyaout = () => {
  return (
    <>
      <div className={MainLayoutCss.mainlayaout}>
        <div className={MainLayoutCss.box}>
          <Header />
        </div>
      </div>
      <div className={MainLayoutCss.box}>
        <div className={MainLayoutCss.bodyHead}>
          <div className={MainLayoutCss.search}>
            <input type="text" name="" placeholder="Search" />
          </div>
          <button className={MainLayoutCss.btn}>Add Contact</button>
        </div>
        <MainCard />
        <div className={MainLayoutCss.footer}>
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Mainloyaout;
