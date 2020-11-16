// import React from 'React';

// export default function navbar() {

//     return (
//         <h1>Hello World</h1>
//     )
// };

// export default navbar;

import React from 'react';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListeItemText,
  Avatar,
  Divider,
  List,
  Typography,
  box
} from '@material-ui/core';
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from '@material-ui/icons';

const NavBar = () => {
  return (
    <Box component="navbar">
      <AppBar>
        <Toolbar>
          <ArrowBack></ArrowBack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
