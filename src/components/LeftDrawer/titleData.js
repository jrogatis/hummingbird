import React from 'react';
import { Button, Grid } from 'material-ui';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  button: {
    display: 'flex',
    marginLeft: '20px',
    padding: 10,
    cursor: 'pointer',
    color: '#778594',
    fontSize: 18,
    '&:hover': {
      color: '#BADFF9',
    },
  },
});
const FolderListItems = props => {
  const {
    classes,
    superProps: { history },
  } = props;

  const handleClick = page => {
    history.push(page);
  };

  return (
    <Grid container direction="column" justify="flex-start" alignItems="flex-start">
      <div disableRipple className={classes.button} onClick={() => handleClick('/')}>
        Home
      </div>
      <div disableRipple className={classes.button} onClick={() => handleClick('/Files')}>
        Files
      </div>
      <div disableRipple className={classes.button} onClick={() => handleClick('/Paper')}>
        Paper
      </div>
      <div disableRipple className={classes.button} onClick={() => handleClick('/Showcase')}>
        Showcase
      </div>
      <div disableRipple className={classes.button} onClick={() => handleClick('/Admin')}>
        Admin console
      </div>
    </Grid>
  );
};

FolderListItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderListItems);
