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

  useEffect(() => {
    if (user && !currentUser) {
      axios
        .get(`/api/user/me`, {
          withCredentials: true
        })
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch((error) => {
          swal(`You Hit the Deck!`, error.message);
        });
    }
  }, [user, currentUser]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        search,
        setSearch,
        bikeshops,
        setBikeshops,
        setRepair,
        repair,
        bikeshop,
        setBikeshop
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
