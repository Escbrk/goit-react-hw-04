import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const notify = () => toast.error("This field can't be empty!");

  const validationSchema = Yup.object().shape({
    query: Yup.string().min(1, "Too Short! ❌").required(notify),
  });

  return (
    <header>
      <Toaster position="top-right" />
      <Formik
        initialValues={{ query: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();

          if (values.query.trim() === "") {
            notify();
            return;
          }
          onSearch(values.query.toLowerCase());
        }}
      >
        <Form>
          <Field
            name="query"
            type="search"
            autoComplete="off"
            // autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
