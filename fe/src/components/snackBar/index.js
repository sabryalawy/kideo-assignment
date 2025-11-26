import { useEffect } from "react";
import "./snackBar.css";
const SnackBar = ({ open = false, message, type }) => {
  useEffect(() => {
    console.log(open, message);
  }, [open, message]);
  return (
    <div
      id="snackbar"
      className={open ? "show" : ""}
      style={{
        backgroundColor: type === "error" ? "red" : "green",
      }}
    >
      {message}
    </div>
  );
};

export default SnackBar;
