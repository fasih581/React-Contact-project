import MainCss from "./MainCard.module.css";//Css link
import "bootstrap/dist/css/bootstrap.min.css";//bootstrap css
import Button from "react-bootstrap/Button";//bootstrap 
import { MdDelete, MdModeEdit } from "react-icons/md";//Reat icon
import DeletModal from "../modal/DeletModal/DeletModal"; //Modal
import EditModal from "../modal/EditModal/EditModal";
import { useState } from "react";

const MainCard = () => {
  const [openEditModal, setEditModal] = useState(false);
  const [openDeletModal, setDeletModal] = useState(false);

  return (
    <>
      <div className={MainCss.Box}>
        {/* card 1 */}
        <div className={MainCss.boxBody}>
          <div className={MainCss.ImageDiv}>
            <img className={MainCss.ImgDiv} src="http://surl.li/plhps" alt="" />
          </div>
          <div className={MainCss.detailsBody}>
            <div className={MainCss.detailCard}>
              <label>Name : </label>
              <h4>Muhammed fasih Ek</h4>
            </div>
            <div className={MainCss.detailCard}>
              <label>Phone : </label>
              <h4>Muhammed fasih Ek</h4>
            </div>
            <div className={MainCss.detailCard}>
              <label>Email : </label>
              <h4>Muhammed fasih Ek</h4>
            </div>
          </div>
          <div className={MainCss.btnBody}>
            <Button variant="primary" onClick={() => {setEditModal(true)}}>
              <MdModeEdit />
            </Button>{" "}
            {openEditModal && <EditModal closeEditModal={setEditModal} />}
            <Button
              variant="danger"
              onClick={() => {
                setDeletModal(true);
              }}
            >
              <MdDelete />
            </Button>{" "}
            {openDeletModal && <DeletModal closeModal={setDeletModal} />}
          </div>
        </div>
        {/* ===== */}
        <div className={MainCss.boxBody}>
          <div className={MainCss.ImageDiv}>
            <img className={MainCss.ImgDiv} src="http://surl.li/plhps" alt="" />
          </div>
          <div className={MainCss.detailsBody}>
            <div className={MainCss.detailCard}>
              <label>Name : </label>
              <h4>Muhammed fasih Ek</h4>
            </div>
            <div className={MainCss.detailCard}>
              <label>Phone : </label>
              <h4>Muhammed fasih Ek</h4>
            </div>
            <div className={MainCss.detailCard}>
              <label>Email : </label>
              <h4>Muhammed fasih Ek</h4>
            </div>
          </div>
          <div className={MainCss.btnBody}>
            <Button variant="primary">
              <MdModeEdit />
            </Button>{" "}
            <Button variant="danger">
              <MdDelete />
            </Button>{" "}
          </div>
        </div>{" "}
        <div className={MainCss.boxBody}>
          <div className={MainCss.ImageDiv}>
            <img className={MainCss.ImgDiv} src="http://surl.li/plhps" alt="" />
          </div>
          <div className={MainCss.detailsBody}>
            <div className={MainCss.detailCard}>
              <label>Name : </label>
              <h4>Muhammed fasih Ek</h4>
            </div>
            <div className={MainCss.detailCard}>
              <label>Phone : </label>
              <h4>Muhammed fasih Ek</h4>
            </div>
            <div className={MainCss.detailCard}>
              <label>Email : </label>
              <h4>Muhammed fasih Ek</h4>
            </div>
          </div>
          <div className={MainCss.btnBody}>
            <Button variant="primary">
              <MdModeEdit />
            </Button>{" "}
            <Button variant="danger">
              <MdDelete />
            </Button>{" "}
          </div>
        </div>
        <div className={MainCss.boxBody}>
          <div className={MainCss.ImageDiv}>
            <img className={MainCss.ImgDiv} src="http://surl.li/plhps" alt="" />
          </div>
          <div className={MainCss.detailsBody}>
            <div className={MainCss.detailCard}>
              <label>Name : </label>
              <h4>Muhammed fasih Ek</h4>
            </div>
            <div className={MainCss.detailCard}>
              <label>Phone : </label>
              <h4>Muhammed fasih Ek</h4>
            </div>
            <div className={MainCss.detailCard}>
              <label>Email : </label>
              <h4>Muhammed fasih Ek</h4>
            </div>
          </div>
          <div className={MainCss.btnBody}>
            <Button variant="primary">
              <MdModeEdit />
            </Button>{" "}
            <Button variant="danger">
              <MdDelete />
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
