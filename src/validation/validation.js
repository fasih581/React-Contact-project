import * as yup from "yup";
import 'yup-phone';

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const AddContactschema = yup.object().shape({
  image: yup.string().required("Image  is required!"),
  name: yup.string().required("Please Enter Name!"),
  phoneNo: yup
    .string()
    // .phone(null, true, "Invalid phone number!")
    .typeError("That doesn't look like a phone number!")
    // .positive("A phone number can't start with a minus!")
    // .integer("A phone number can't include a decimal point!")
    .min(10)
    .required("Please Enter Phone Number!"),
  email: yup
    .string()
    .email("Please Enter a valid Email")
    .required("Please Enter Email!"),
});

export const EditContactschema = yup.object().shape({
  imageEdit: yup.string().required("Image  is required!"),
  nameEdit: yup.string().required("Please Enter Name!"),
  phoneNoEdit: yup
    .string()
    // .phone(null, true, "Invalid phone number!")
    .typeError("That doesn't look like a phone number!")
    // .positive("A phone number can't start with a minus!")
    // .integer("A phone number can't include a decimal point!")
    .min(10)
    .required("Please Enter Phone Number!"),
  emailEdit: yup
    .string()
    .email("Please Enter a valid Email")
    .required("Please Enter Email!"),
});
