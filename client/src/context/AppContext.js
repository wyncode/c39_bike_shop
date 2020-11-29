import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const user = sessionStorage.getItem('user');
  const [bikeshops, setBikeshops] = useState([]);
  const [repair, setRepair] = useState([]);
  const [bikeshop, setBikeshop] = useState(null);
  const [order, setOrder] = useState(null);

  const fetchCurrentUser = () => {
    axios
      .get(`/api/user/me`, {
        withCredentials: true
      })
      .then(({ data }) => {
        setCurrentUser(data);
        sessionStorage.setItem('user', JSON.stringify(data));
      })
      .catch((error) => {
        console.log(
          'No user in session, maybe we shouldnt throw because this will run on every refresh',
          error.message
        );
      });
  };

  useEffect(() => {
    if (user && !currentUser) {
      fetchCurrentUser();
    }
  }, [user, currentUser]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        fetchCurrentUser,
        loading,
        setLoading,
        search,
        setSearch,
        bikeshops,
        setBikeshops,
        setRepair,
        repair,
        bikeshop,
        setBikeshop,
        order,
        setOrder
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
