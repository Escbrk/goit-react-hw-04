import { useEffect } from "react";
import toast from "react-hot-toast";

const ErrorMessage: React.FC = () => {
  const error = (): void => {
    toast.error("Ops, Error! Pls reload this page!");
  };

  useEffect((): void => {
    error();
  }, []);

  return null;
};

export default ErrorMessage;
