import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { List, Grid } from 'material-ui';
import FolderListItem from './FolderListItem';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
});

const FolderList = props => {
  const { classes } = props;
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item xs={12}>
        <List>{[1, 2, 3].map(item => <FolderListItem item={item} key={`list-${item}`} />)}</List>
      </Grid>
    </Grid>
  );
};

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);
