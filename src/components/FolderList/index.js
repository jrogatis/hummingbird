import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { List, Grid } from 'material-ui';
import FolderListItem from './FolderListItem';
import _ from 'lodash';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
});

const FolderList = props => {
  const { classes } = props;
  const randomItems = _.random(1, 5);
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item xs={12}>
        <List>
          {[...Array(randomItems).keys()].map(item => (
            <FolderListItem item={item} key={`list-${item}`} />
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);
