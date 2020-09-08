import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@material-ui/core';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddIcon from '@material-ui/icons/Add'

import makeStyle from './style';

export default function CommonDrawer({ list }) {
  const classes = makeStyle();
  const theme = useTheme();
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={true}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {list ? list.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><FlightTakeoffIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        )) : null}
      </List>
      <AddIcon />
    </Drawer>
  );
};

CommonDrawer.propTypes = {
  list: PropTypes.array,
}
