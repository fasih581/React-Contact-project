import React from "react";
import headerCss from "./Header.module.css";

const Header = () => {
  return (
    <div className={headerCss.head}>
      <h3 className={headerCss.title}>Contact List</h3>
    </div>
  );
};

export default Header;
