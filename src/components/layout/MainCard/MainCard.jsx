import { useEffect } from "react";
import MainCss from "./MainCard.module.css"; //Css link
import "bootstrap/dist/css/bootstrap.min.css"; //bootstrap css
import Button from "react-bootstrap/Button"; //bootstrap
import Table from "react-bootstrap/Table";
import { MdDelete, MdModeEdit } from "react-icons/md"; //Reat icon
import DeletModal from "../modal/DeletModal/DeletModal"; //Modal
import EditModal from "../modal/EditModal/EditModal";
import { getData } from "../../../ReduxToolkit/Features/Api/get.Slice";
import { useDispatch, useSelector } from "react-redux";
import {
  editOpenModal,
  deletOpenModal,
} from "../../../ReduxToolkit/Features/contactModalSlice";

const MainCard = () => {
  const dispatch = useDispatch();
  const { isEditModal, isDeletModal } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const data = useSelector((state) => state.getMethod.data);
  // const { isLoading, data, error, pageCount, limit } = useSelector((state) => state.getMethod);

  return (
    <>
      <div className={MainCss.Box}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>email</th>
              <th>Phone Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr>
                <td>{index+1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phoneNo}</td>
                <td className="tablebtn">
                  <Button
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
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default MainCard;
