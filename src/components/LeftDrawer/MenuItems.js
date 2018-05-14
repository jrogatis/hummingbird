import React from 'react';
import { Grid } from 'material-ui';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { store } from '../../store';
import { push } from 'react-router-redux';
import { requestData, isFetching } from '../../actions';

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
    router: {
      location: { pathname },
    },
  } = props;

  const handleClick = page => {
    store.dispatch(push(page));
    props.isFetching();
    props.requestData();
    cbOpenDrawer();
  };

  const isCurPage = page => {
    if (pathname === '/' && page === 'Home') {
      return '#0070E0';
    }
    return pathname.substr(1) === page ? '#0070E0' : '#778594';
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

const mapStateToProps = ({ router }) => ({
  router,
});

export default connect(mapStateToProps, { requestData, isFetching })(withStyles(styles)(MenuItems));
