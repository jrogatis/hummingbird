import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Drawer, List } from 'material-ui';
import { folderListItems } from './titleData';
import { Dropbox } from 'mdi-material-ui';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  icon: {
    color: '#0C7EF1',
    fontSize: 34,
  },
  drawerPaper: {
    backgroundColor: 'rgb(247, 249, 250)',
  },
});

const LeftDrawer = props => {
  const { classes } = props;
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} style={{ padding: 15 }}>
        <Dropbox className={classes.icon} />
      </div>
      <List>{folderListItems}</List>
    </Drawer>
  );
};

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftDrawer);
