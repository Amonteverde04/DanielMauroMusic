import * as yup from 'yup';

export const mailingListSchema = yup.object().shape({
  firstName: yup.string().required("A first name is required."),
  lastName: yup.string().required("A last name is required."),
  email: yup.string().required("An email is required.").email("A valid email address is required."),
});