import toast from "react-hot-toast";

export default function ErrorMessage() {
  const error = () => {
    toast.error("Ops, Error! Pls reload this page!");
  };

  return error();
}
