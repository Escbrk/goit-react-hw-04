import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBar/SearchBox";

import contacts from "./contacts.json";

const App = () => {
  const [contactList, setContactList] = useState(() => {
    const savedData = localStorage.getItem("data");

    return savedData !== null ? JSON.parse(savedData) : contacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(contactList));
  });

  const addContact = (newContact) => {
    setContactList((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  const deleteContact = (id) => {
    setContactList((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  const filteredContacts = contactList.filter((filtered) =>
    filtered.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList value={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};
export default App;
