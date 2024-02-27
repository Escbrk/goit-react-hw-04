import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const fieldCheck = (e) => {
    e.preventDefault();
    const query = e.target.searchField.value;

    if (e.target.searchField.value.trim() === "") {
      toast.error("This field can't be empty");
      return;
    }

    onSubmit(query);
    e.target.reset();
  };

  return (
    <header>
      <Toaster />
      <form onSubmit={fieldCheck}>
        <input
          name="searchField"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
