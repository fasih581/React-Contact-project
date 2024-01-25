// import React from "react";
// import DeletCss from "./DeletModal.module.css";

// // react-icons
// import { IoCloseSharp } from "react-icons/io5";

// // bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";

// // REDUX TOOLKIT
// import { getData } from '../../../../ReduxToolkit/Features/Api/Slice';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../../../ReduxToolkit/Features/Api/Slice';


// const DeletModal = ({ deletModalclose, contactId }) => {
//   // console.log("delete modal id", contactId);
//   const dispatch = useDispatch();

//   const deleteBtn = async () => {
//     try {
//         await dispatch(deleteContact(contactId));
//         dispatch(getData())
//         deletModalclose()
//     } catch (error) {
//         console.error("Error deleting contact:", error);
//     }
// }

//   return (
//     <>
//       <div className={DeletCss.overlay}></div>
//       <div className={DeletCss.contact_Box}>
//         <div className={DeletCss.BoxHead}>
//           <h3>Delete Contact</h3>
//           <button
//             className={DeletCss.HeadCl} onClick={deletModalclose}
//           >
//             <IoCloseSharp className={DeletCss.icon} />
//           </button>
//         </div>
//         <hr className={DeletCss.line} />
//         <h4 className={DeletCss.bodyTitle}>
//           Are you sure you want to delete this Contact
//         </h4>
//         <hr className={DeletCss.line} />
//         <div className={DeletCss.Footer}>
//           <Button
//             className={`${DeletCss.btn} ${DeletCss.cls}`}
//             onClick={deletModalclose}
//           >
//             Close
//           </Button>
//           <Button type="submit" className={`${DeletCss.btn} ${DeletCss.sve}`} onClick={deleteBtn}>
//             Delete
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DeletModal;

import React from "react";
import DeletCss from "./DeletModal.module.css";
import { IoCloseSharp } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { deleteContact, getData } from '../../../../ReduxToolkit/Features/Api/Slice'; // Import deleteContact and getData actions

const DeletModal = ({ deletModalclose, contactId }) => {
  const dispatch = useDispatch();

  const deleteBtn = async () => {
    try {
      await dispatch(deleteContact(contactId)); 
      await dispatch(getData());  
      deletModalclose();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  }

  return (
    <>
      <div className={DeletCss.overlay}></div>
      <div className={DeletCss.contact_Box}>
        <div className={DeletCss.BoxHead}>
          <h3>Delete Contact</h3>
          <button
            className={DeletCss.HeadCl} onClick={deletModalclose}
          >
            <IoCloseSharp className={DeletCss.icon} />
          </button>
        </div>
        <hr className={DeletCss.line} />
        <h4 className={DeletCss.bodyTitle}>
          Are you sure you want to delete this Contact
        </h4>
        <hr className={DeletCss.line} />
        <div className={DeletCss.Footer}>
          <Button
            className={`${DeletCss.btn} ${DeletCss.cls}`}
            onClick={deletModalclose}
          >
            Close
          </Button>
          <Button type="submit" className={`${DeletCss.btn} ${DeletCss.sve}`} onClick={deleteBtn}>
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default DeletModal;

