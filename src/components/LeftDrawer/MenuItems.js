import React from 'react';
import { Grid } from 'material-ui';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  button: {
    display: 'flex',
    marginLeft: '20px',
    padding: 10,
    cursor: 'pointer',
    color: '#778594',
    fontSize: 16,
    '&:hover': {
      color: '#BADFF9',
    },
  },
});

const MenuItems = props => {
  const {
    classes,
    cbOpenDrawer,
    superProps: { history },
  } = props;

  const handleClick = page => {
    history.push(page);
    cbOpenDrawer();
  };

  const isCurPage = page => {
    const { params } = props.superProps.match;
    if (!params.hasOwnProperty('subFolder') && page === 'Home') {
      return '#0070E0';
    }
    return params.subFolder === page ? '#0070E0' : '#778594';
  };

  return (
    <Grid container direction="column" justify="flex-start" alignItems="flex-start">
      <div
        style={{ color: isCurPage('Home') }}
        className={classes.button}
        onClick={() => handleClick('/')}
      >
        Home
      </div>
      <div
        style={{ color: isCurPage('Files') }}
        className={classes.button}
        onClick={() => handleClick('/Files')}
      >
        Files
      </div>
      <div
        style={{ color: isCurPage('Paper') }}
        className={classes.button}
        onClick={() => handleClick('/Paper')}
      >
        Paper
      </div>
      <div
        style={{ color: isCurPage('Showcase') }}
        className={classes.button}
        onClick={() => handleClick('/Showcase')}
      >
        Showcase
      </div>
      <div
        style={{ color: isCurPage('Admin') }}
        className={classes.button}
        onClick={() => handleClick('/Admin')}
      >
        Admin console
      </div>
    </Grid>
  );
};

MenuItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuItems);
