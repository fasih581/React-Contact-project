import React from "react";
import ModalCss from "./Modal.module.css";
// bootstrap
import { IoCloseSharp } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
// useFormik and validation
import { useFormik } from "formik";
import { AddContactschema } from "../../../../validation/validation";

import { useDispatch, useSelector } from "react-redux";
import { addCloseModal } from "../../../../ReduxToolkit/Features/contactModalSlice";
import { createContact } from "../../../../ReduxToolkit/Features/Api/Slice";
import { getData } from "../../../../ReduxToolkit/Features/Api/Slice";

// const onSubmit = async (values, actions) => {
//   await new Promise((resolve) => setTimeout(resolve, 100));
//   actions.resetForm();
// };

const AddModal = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data.createContacts);

  const AddContact = useFormik({
    initialValues: {
      name: "",
      phoneNo: "",
      email: "",
    },
    validationSchema: AddContactschema,
    onSubmit: async (data, actions) => {
      handleSumbitt(data, actions);
      actions.resetForm();
       dispatch(getData());
    },
  });

  const handleSumbitt = (data, actions) => {
    console.log("Form Data:", data);
    dispatch(createContact(data))
    .then(() => {
      dispatch(addCloseModal())
      dispatch(getData());
    })
  };

  return (
    <>
      <div className={ModalCss.overlay}>
        <div className={ModalCss.contact_addBox}>
          <div className={ModalCss.addBoxHead}>
            <h3>Add Contact</h3>
            <button
              className={ModalCss.HeadCl}
              onClick={() => dispatch(addCloseModal())}
            >
              <IoCloseSharp className={ModalCss.icon} />
            </button>
          </div>
          <hr className={ModalCss.line} />
          <Form onSubmit={AddContact.handleSubmit}>
            <div className={ModalCss.addBoxBody}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Name"
                  name="name"
                  onBlur={AddContact.handleBlur}
                  onChange={AddContact.handleChange}
                  value={AddContact.values.name}
                  className={
                    AddContact.errors.name && AddContact.touched.name
                      ? "formInput form-control is-invalid"
                      : "formInput form-control"
                  }
                />
                {AddContact.errors.name && AddContact.touched.name && (
                  <div className="invalid-feedback">
                    {AddContact.errors.name}
                  </div>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="phoneNo">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNo"
                  onChange={AddContact.handleChange}
                  onBlur={AddContact.handleBlur}
                  value={AddContact.values.phoneNo}
                  className={
                    AddContact.errors.phoneNo && AddContact.touched.phoneNo
                      ? "formInput form-control is-invalid"
                      : "formInput form-control"
                  }
                />
                {AddContact.errors.phoneNo && AddContact.touched.phoneNo && (
                  <div className="invalid-feedback">
                    {AddContact.errors.phoneNo}
                  </div>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  onBlur={AddContact.handleBlur}
                  onChange={AddContact.handleChange}
                  value={AddContact.values.email}
                  className={
                    AddContact.errors.email && AddContact.touched.email
                      ? "formInput form-control is-invalid"
                      : "formInput form-control"
                  }
                />
                {AddContact.errors.email && AddContact.touched.email && (
                  <div className="invalid-feedback">
                    {AddContact.errors.email}
                  </div>
                )}
              </Form.Group>
            </div>
            <hr className={ModalCss.line} />
            <div className={ModalCss.addFooter}>
              <Button
                className={`${ModalCss.btn} ${ModalCss.cls}`}
                onClick={() => dispatch(addCloseModal())}
              >
                Close
              </Button>
              <Button
                type="submit"
                className={`${ModalCss.btn} ${ModalCss.sve}`}
              >
                Save
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddModal;
