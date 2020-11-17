import React from 'React';
import { TextField } from '@material-ui/core';

const SearchBar = () => {
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          id="filled-basic"
          label="Search for a bike shop"
          variant="filled"
        />
      </form>
    </div>
  );
};

export default SearchBar;
