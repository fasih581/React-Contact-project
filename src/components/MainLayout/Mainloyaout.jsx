import React from "react";
// import DeletContact from "../layout/modal/DeletModal/DeletModal"
import MainCard from "..//layout/MainCard/MainCard";
import Header from "../layout/common/Header";
import Button from "../layout/common/button/Button";
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
        <Button />
        <MainCard />
      </div>
    </>
  );
};

export default Mainloyaout;
