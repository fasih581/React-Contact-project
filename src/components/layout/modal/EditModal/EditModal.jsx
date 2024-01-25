import React, { useEffect, useState } from "react";
import EditCss from "./EditModal.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import { EditContactschema } from "../../../../validation/validation";
import { useDispatch } from "react-redux";
import {
  getContactById,
  updateContacts,
  getData,
} from "../../../../ReduxToolkit/Features/Api/Slice";

const EditModal = ({ editModalclose, contactId }) => {
  // console.log("Edit modal id", contactId);
  const dispatch = useDispatch();
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await dispatch(getContactById({ id: contactId }));
        const fetchedData = response.payload;
        setContactData(fetchedData);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchContactData();
  }, [contactId, dispatch]);

  const EditContact = useFormik({
    initialValues: {
      name: contactData?.name || "",
      phoneNo: contactData?.phoneNo || "",
      email: contactData?.email || "",
    },
    validationSchema: EditContactschema,
    onSubmit: async (values, actions) => {
      handleSumbitt(values, actions);
      actions.resetForm();
    },
    enableReinitialize: true,
  });

  const handleSumbitt = (data, actions) => {
    try {
      console.log("Form Data:", data);
      dispatch(updateContacts({ id: contactId, data }));
      dispatch(getData());
      editModalclose();
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <>
      <div className={EditCss.overlay}></div>
      <div className={EditCss.contact_Box}>
        <div className={EditCss.BoxHead}>
          <h3>Edit Contact</h3>
          <button className={EditCss.HeadCl} onClick={editModalclose}>
            <IoCloseSharp className={EditCss.icon} />
          </button>
        </div>
        <hr className={EditCss.line} />
        <Form onSubmit={EditContact.handleSubmit}>
          <div className={EditCss.editBoxBody}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                name="name"
                onBlur={EditContact.handleBlur}
                onChange={EditContact.handleChange}
                value={EditContact.values.name}
                className={
                  EditContact.errors.name && EditContact.touched.name
                    ? "formInput form-control is-invalid"
                    : "formInput form-control"
                }
              />
              {EditContact.errors.name && EditContact.touched.name && (
                <div className="invalid-feedback">
                  {EditContact.errors.name}
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="phoneNo">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Phone Number"
                name="phoneNo"
                onChange={EditContact.handleChange}
                onBlur={EditContact.handleBlur}
                value={EditContact.values.phoneNo}
                className={
                  EditContact.errors.phoneNo && EditContact.touched.phoneNo
                    ? "formInput form-control is-invalid"
                    : "formInput form-control"
                }
              />
              {EditContact.errors.phoneNo && EditContact.touched.phoneNo && (
                <div className="invalid-feedback">
                  {EditContact.errors.phoneNo}
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                onBlur={EditContact.handleBlur}
                onChange={EditContact.handleChange}
                value={EditContact.values.email}
                className={
                  EditContact.errors.email && EditContact.touched.email
                    ? "formInput form-control is-invalid"
                    : "formInput form-control"
                }
              />
              {EditContact.errors.email && EditContact.touched.email && (
                <div className="invalid-feedback">
                  {EditContact.errors.email}
                </div>
              )}
            </Form.Group>
          </div>
          <hr className={EditCss.line} />
          <div className={EditCss.Footer}>
            <Button
              className={`${EditCss.btn} ${EditCss.cls}`}
              onClick={editModalclose}
            >
              Close
            </Button>
            <Button type="submit" className={`${EditCss.btn} ${EditCss.sve}`}>
              Edit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default EditModal;
