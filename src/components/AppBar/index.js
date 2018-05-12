import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { AppBar, Typography, Grid } from 'material-ui';
import { Menu } from 'mdi-material-ui';
import windowSize from 'react-window-size';

import AppRightBar from './AppRightBar';

const styles = theme => ({
  appBar: {
    backgroundColor: 'transparent',
    width: `calc(100% - 250px)`,
    marginLeft: '270px',
    boxShadow: 'none',
    paddingRight: '5%',
    [theme.breakpoints.down('750')]: {
      width: `100%`,
      margin: '0 5% 0 5%',
      paddingRight: '5%',
    },
  },
  title: {
    fontSize: 20,
  },
  menu: {
    color: 'black',
  },
});

const AppBarCustom = props => {
  const { classes, title, windowWidth, cbOpenDrawer } = props;
  return (
    <AppBar position="static" className={classes.appBar}>
      <Grid container direction="row" wrap="nowrap" jusitfy="center" alignItems="center">
        <Grid item xs>
          <Grid container direction="column" wrap="nowrap" jusitfy="center" alignItems="flex-start">
            {windowWidth < 750 ? (
              <Menu className={classes.menu} onClick={() => cbOpenDrawer()} />
            ) : null}
            <Typography noWrap className={classes.title}>
              {title.hasOwnProperty('subFolder') ? title.subFolder : 'Home'}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <AppRightBar />
        </Grid>
      </Grid>
    </AppBar>
  );
};

AppBarCustom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default windowSize(withStyles(styles)(AppBarCustom));
