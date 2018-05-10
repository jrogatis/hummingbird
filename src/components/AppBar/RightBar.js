import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Grid, Button, Input, TextField, InputAdornment, Avatar } from 'material-ui';
import { Magnify, BellOutline } from 'mdi-material-ui';

const styles = theme => ({
  container: {},
  input: {
    margin: theme.spacing.unit,
    border: '2px solid #dbdbdb',
    borderRadius: '25px',
    height: 30,
  },
  icon: {
    color: 'black',
  },
  avatar: {},
});
const RightBar = props => {
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
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <Magnify />
            </InputAdornment>
          ),
        }}
        className={classes.input}
      />
      <BellOutline className={classes.icon} />
      <Avatar className={classes.avatar}>H</Avatar> />
    </Grid>
  );
};
RightBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RightBar);
