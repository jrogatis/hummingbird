import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Grid, TextField, InputAdornment, Avatar } from 'material-ui';
import { Magnify, BellOutline } from 'mdi-material-ui';

import styles from './appBarRightStyles';

const AppRightBar = props => {
  const { classes } = props;
  return (
    <Grid
      container
      direction="row"
      wrap="nowrap"
      justify="flex-end"
      alignItems="center"
      className={classes.container}
    >
      <TextField
        placeholder="Search"
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <Magnify className={classes.magnify} />
            </InputAdornment>
          ),
        }}
        className={classes.input}
      />
      <BellOutline className={classes.icon} /> <Avatar className={classes.avatar}> H </Avatar> / >
    </Grid>
  );
};
AppRightBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppRightBar);
