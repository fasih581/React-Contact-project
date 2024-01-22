import MainCss from "./MainCard.module.css"; //Css link
import "bootstrap/dist/css/bootstrap.min.css"; //bootstrap css
import Button from "react-bootstrap/Button"; //bootstrap
import { MdDelete, MdModeEdit } from "react-icons/md"; //Reat icon
import DeletModal from "../modal/DeletModal/DeletModal"; //Modal
import EditModal from "../modal/EditModal/EditModal";
import { useDispatch, useSelector } from "react-redux";
import {
  editOpenModal,
  deletOpenModal,
} from "../../../ReduxToolkit/Features/contactModalSlice";

const MainCard = () => {
  const dispatch = useDispatch();
  const { isEditModal, isDeletModal } = useSelector((state) => state.modal);

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
            <Button
              variant="primary"
              onClick={() => {
                dispatch(editOpenModal());
              }}
            >
              <MdModeEdit />
            </Button>{" "}
            {isEditModal && <EditModal />}
            <Button
              variant="danger"
              onClick={() => {
                dispatch(deletOpenModal());
              }}
            >
              <MdDelete />
            </Button>{" "}
            {isDeletModal && <DeletModal />}
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
