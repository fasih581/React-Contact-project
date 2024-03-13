import React, { useState } from "react";
import MainCss from "./MainCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { MdDelete, MdModeEdit } from "react-icons/md";
import DeletModal from "../modal/DeletModal/DeletModal";
import EditModal from "../modal/EditModal/EditModal";
import { useDispatch, useSelector } from "react-redux"; 

const MainCard = ({ currentPage }) => {
  const dispatch = useDispatch();
  const [editModalOpen, seteditModalOpen] = useState(false);
  const [deletModalOpen, satDeletModalOpen] = useState(false);

  const { data, limit, isLoading, error, totalCount } = useSelector((state) => state.data); 

  return (
    <>
      <div className={MainCss.Box}>
        <p className={MainCss.tCount}>total Conut:  {totalCount}</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Name</th>
              <th>email</th>
              <th>Phone Number</th>
              <th className={MainCss.thBtn}></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.map(
                (contact, index) => (
                  (
                    <tr key={contact._id}>
                      <td>{index + 1 + (currentPage - 1) * limit}</td>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phoneNo}</td>
                      <td className={MainCss.tablebtn}>
                        <Button
                          onClick={() => {
                            seteditModalOpen(contact._id);
                          }}
                        >
                          <MdModeEdit />
                        </Button>{" "}
                        <Button
                          variant="danger"
                          onClick={() => {
                            satDeletModalOpen(contact._id);
                          }}
                        >
                          <MdDelete />
                        </Button>{" "}
                      </td>
                    </tr>
                  )
                )
              )}
          </tbody>
        </Table>
      </div>
      {editModalOpen && (
        <EditModal
          editModalclose={() => seteditModalOpen(false)}
          contactId={editModalOpen}
        />
      )}
      {deletModalOpen && (
        <DeletModal
          deletModalclose={() => satDeletModalOpen(false)} 
          contactId={deletModalOpen}
        />
      )} 
      {isLoading && <div className={MainCss.loading}> Loading .... </div>}
      {error && <div className={MainCss.error}> {error} </div>}
    </>
  );
};

export default MainCard;