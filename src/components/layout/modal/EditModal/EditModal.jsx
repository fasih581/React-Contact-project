import React, { useState } from "react";
import EditCss from "./EditModal.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { Form, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import { EditContactschema } from "../../../../validation/validation";
import { useDispatch } from "react-redux";
import {
  editCloseModal
} from "../../../../ReduxToolkit/Features/contactModalSlice";

const onSubmit = (values) => {
  console.log("Submitted values:", values);
  // Add your submit logic here
};

const EditModal = () => {
  const dispatch = useDispatch();

  const [file, setFile] = useState();

  const EditContact = useFormik({
    initialValues: {
      imageEdit: "",
      nameEdit: "",
      phoneNoEdit: "",
      emailEdit: "",
    },
    validationSchema: EditContactschema,
    onSubmit: onSubmit,
  });

  function ChangeImg(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <div className={EditCss.overlay}></div>
      <div className={EditCss.contact_Box}>
        <div className={EditCss.BoxHead}>
          <h3>Edit Contact</h3>
          <button className={EditCss.HeadCl} onClick={() => dispatch(editCloseModal())}>
            <IoCloseSharp className={EditCss.icon} />
          </button>
        </div>
        <hr className={EditCss.line} />
        <Form onSubmit={EditContact.handleSubmit}>
          <div className={EditCss.editBoxBody}>
            <div className={EditCss.ImageDiv}>
              <Image
                className={EditCss.ImgDiv}
                src={file || "http://surl.li/plhps"}
              />
            </div>
            <Form.Group controlId="imageEdit" className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="imageEdit"
                onChange={(e) => {
                  EditContact.handleChange(e);
                  ChangeImg(e);
                }}
                onBlur={EditContact.handleBlur}
                className={
                  EditContact.errors.imageEdit && EditContact.touched.imageEdit
                    ? "formInput form-control is-invalid"
                    : "formInput form-control"
                }
              />
              {EditContact.errors.imageEdit &&
                EditContact.touched.imageEdit && (
                  <div className="invalid-feedback">
                    {EditContact.errors.imageEdit}
                  </div>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="nameEdit">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                name="nameEdit"
                onBlur={EditContact.handleBlur}
                onChange={EditContact.handleChange}
                value={EditContact.values.nameEdit}
                className={
                  EditContact.errors.nameEdit && EditContact.touched.nameEdit
                    ? "formInput form-control is-invalid"
                    : "formInput form-control"
                }
              />
              {EditContact.errors.nameEdit && EditContact.touched.nameEdit && (
                <div className="invalid-feedback">
                  {EditContact.errors.nameEdit}
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="phoneNoEdit">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Phone Number"
                name="phoneNoEdit"
                onChange={EditContact.handleChange}
                onBlur={EditContact.handleBlur}
                value={EditContact.values.phoneNoEdit}
                className={
                  EditContact.errors.phoneNoEdit &&
                  EditContact.touched.phoneNoEdit
                    ? "formInput form-control is-invalid"
                    : "formInput form-control"
                }
              />
              {EditContact.errors.phoneNoEdit &&
                EditContact.touched.phoneNoEdit && (
                  <div className="invalid-feedback">
                    {EditContact.errors.phoneNoEdit}
                  </div>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="emailEdit">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="emailEdit"
                onBlur={EditContact.handleBlur}
                onChange={EditContact.handleChange}
                value={EditContact.values.emailEdit}
                className={
                  EditContact.errors.emailEdit && EditContact.touched.emailEdit
                    ? "formInput form-control is-invalid"
                    : "formInput form-control"
                }
              />
              {EditContact.errors.emailEdit &&
                EditContact.touched.emailEdit && (
                  <div className="invalid-feedback">
                    {EditContact.errors.emailEdit}
                  </div>
                )}
            </Form.Group>
          </div>
          <hr className={EditCss.line} />
          <div className={EditCss.Footer}>
            <Button className={`${EditCss.btn} ${EditCss.cls}`} onClick={() => dispatch(editCloseModal())}>Close</Button>
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
