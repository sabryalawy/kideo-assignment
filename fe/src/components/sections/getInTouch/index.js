import { useFormik } from "formik";
import GetInTouchUI from "./GetInTouchUI";
import axios from "axios";

const GetInTouch = () => {
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
          alert("Message sent successfully!");
          return;
        })
        .catch((error) => {
          alert("Failed to send message." + error.message);
          return;
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return <GetInTouchUI formik={formik} />;
};
export default GetInTouch;
