import { createContext, useContext, useState } from "react";
import SnackBar from "../components/snackBar";

const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

export function SnackbarProvider({ children }) {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "error",
  });

  const showError = (message) => {
    setSnackbar({ open: true, message, type: "error" });

    setTimeout(() => {
      setSnackbar({ open: false, message: "", type: "error" });
    }, 3000);
  };

  const showSuccess = (message) => {
    setSnackbar({ open: true, message, type: "success" });

    setTimeout(() => {
      setSnackbar({ open: false, message: "" });
    }, 3000);
  };

  return (
    <SnackbarContext.Provider value={{ showError, showSuccess }}>
      {children}

      <SnackBar
        message={snackbar.message}
        open={snackbar.open}
        type={snackbar.type}
      />
    </SnackbarContext.Provider>
  );
}
