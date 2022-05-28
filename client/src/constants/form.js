import formErrorMassage from "../utils/formErrorMassage";
import * as yup from "yup";
import FormControl from "../components/FormControl";

const initialValues = {
  name: "",
  mean: "",
};
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required(formErrorMassage.required)
    .min(2, formErrorMassage.minString(2, "kí tự"))
    .max(100, formErrorMassage.maxString(100, "kí tự")),
  mean: yup
    .string()
    .required(formErrorMassage.required)
    .min(2, formErrorMassage.minString(2, "kí tự"))
    .max(100, formErrorMassage.maxString(100, "kí tự")),
});
const fields = [
  {
    name: "name",
    component: FormControl,
    label: "Từ vựng",
    placeholder: "vd: language",
  },
  {
    name: "mean",
    component: FormControl,
    label: "Nghĩa",
    placeholder: "vd: ngôn ngữ",
  },
];

const vocabFormData = { initialValues, validationSchema, fields };

export default vocabFormData;
