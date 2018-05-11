import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Drawer, MenuList } from 'material-ui';
import MenuItems from './MenuItems';
import { Dropbox } from 'mdi-material-ui';
import windowSize from 'react-window-size';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  icon: {
    color: '#0070e0',
    fontSize: 34,
  },
  drawer: {},
  drawerPaper: {
    backgroundColor: 'rgb(247, 249, 250)',
    border: 'none',
    minWidth: 250,
  },
});

const LeftDrawer = props => {
  const { classes, windowWidth, superProps } = props;

  return (
    <Drawer
      variant="persistent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      open={windowWidth >= 750}
    >
      <div className={classes.toolbar} style={{ padding: 15 }}>
        <Dropbox className={classes.icon} />
      </div>
      <MenuList role="menu">
        <MenuItems superProps={superProps} />
      </MenuList>
    </Drawer>
  );
};

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default windowSize(withStyles(styles)(LeftDrawer));
