import React from 'react';
import Box from './Box/Box';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <Section title="PhoneBook">
        <ToastContainer />
        <ContactForm />
      </Section>
      <div>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </div>
    </Box>
  );
}
