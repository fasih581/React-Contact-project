import MainCss from "./MainCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { MdDelete, MdModeEdit } from "react-icons/md";

const MainCard = () => {
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
            <Button variant="primary">
              <MdModeEdit />
            </Button>{" "}
            <Button variant="danger">
              <MdDelete />
            </Button>{" "}
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
