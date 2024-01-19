import React from "react";
import ModalCss from "../../modal/AddModal/Modal.module.css";

const Button = () => {
  return (
    <div>
      <Button type="submit" className={`${ModalCss.btn} ${ModalCss.sve}`}>
        Add Contact
      </Button>
    </div>
  );
};

export default Button;
