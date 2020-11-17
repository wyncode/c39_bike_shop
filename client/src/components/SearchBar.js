import React from 'react';
import { TextField } from '@material-ui/core';

const SearchBar = () => {
  // const onChange

  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          id="filled-basic"
          label="Search bike shops"
          variant="filled"
          //   onChange= {onChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
