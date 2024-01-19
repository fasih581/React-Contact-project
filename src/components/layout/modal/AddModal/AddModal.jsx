import React, { useState } from "react";
import ModalCss from "./Modal.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { Form, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import { AddContactschema } from "../../../validation/validation";

const onSubmit = (values) => {
  console.log("Submitted values:", values);
  // Add your submit logic here
};

const AddModal = () => {
  const [file, setFile] = useState();

  const AddContact = useFormik({
    initialValues: {
      image: "",
      name: "",
      phoneNo: "",
      email: "",
    },
    validationSchema: AddContactschema,
    onSubmit: onSubmit,
  });

  function ChangeImg(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <div className={ModalCss.overlay}></div>
      <div className={ModalCss.contact_addBox}>
        <div className={ModalCss.addBoxHead}>
          <h3>Add Contact</h3>
          <button className={ModalCss.HeadCl}>
            <IoCloseSharp className={ModalCss.icon} />
          </button>
        </div>
        <hr className={ModalCss.line} />
        <Form onSubmit={AddContact.handleSubmit}>
          <div className={ModalCss.addBoxBody}>
            <div className={ModalCss.ImageDiv}>
              <Image
                className={ModalCss.ImgDiv}
                src={file || "http://surl.li/plhps"}
              />
            </div>
            <Form.Group controlId="image" className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={(e) => {
                  AddContact.handleChange(e);
                  ChangeImg(e);
                }}
                onBlur={AddContact.handleBlur}
                className={
                  AddContact.errors.image && AddContact.touched.image
                    ? "formInput form-control is-invalid"
                    : "formInput form-control"
                }
              />
              {AddContact.errors.image && AddContact.touched.image && (
                <div className="invalid-feedback">
                  {AddContact.errors.image}
                </div>
              )}
            </Form.Group>

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
                <div className="invalid-feedback">{AddContact.errors.name}</div>
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
            <Button className={`${ModalCss.btn} ${ModalCss.cls}`}>Close</Button>
            <Button type="submit" className={`${ModalCss.btn} ${ModalCss.sve}`}>
              Save
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddModal;
