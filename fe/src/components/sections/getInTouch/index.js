import { useFormik } from "formik";
import GetInTouchUI from "./GetInTouchUI";
import axios from "axios";
import { useSnackbar } from "../../../context/snackBarProvider";

const GetInTouch = () => {
  const { showError, showSuccess } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);

      axios
        .post("http://localhost:8081/contact", values)
        .then((response) => {
          showSuccess("Message sent successfully!");
        })
        .catch((error) => {
          showError("Failed to send message." + error.message);
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return <GetInTouchUI formik={formik} />;
};
export default GetInTouch;
