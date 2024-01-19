import React from "react";
import DeletCss from "./DeletModal.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DeletModal = () => {
  return (
    <>
      <div className={DeletCss.overlay}></div>
      <div className={DeletCss.contact_Box}>
        <div className={DeletCss.BoxHead}>
          <h3>Delete Contact</h3>
          <button className={DeletCss.HeadCl}>
            <IoCloseSharp className={DeletCss.icon} />
          </button>
        </div>
        <hr className={DeletCss.line} />
        <h4 className={DeletCss.bodyTitle}>Are you sure you want to delete this Contact</h4>
        <hr className={DeletCss.line} />
        <div className={DeletCss.Footer}>
          <Button className={`${DeletCss.btn} ${DeletCss.cls}`}>Close</Button>
          <Button type="submit" className={`${DeletCss.btn} ${DeletCss.sve}`}>
            Delet
          </Button>
        </div>
      </div>
    </>
  );
};

export default DeletModal;