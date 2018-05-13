import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { AppBar, Typography, Grid } from 'material-ui';
import { Menu } from 'mdi-material-ui';
import windowSize from 'react-window-size';
import styles from './indexStyles';
import { connect } from 'react-redux';

import AppRightBar from './AppRightBar';

const AppBarCustom = props => {
  const {
    classes,
    windowWidth,
    cbOpenDrawer,
    router: {
      location: { pathname },
    },
  } = props;
  return (
    <AppBar position="static" className={classes.appBar}>
      <Grid container direction="row" wrap="nowrap" jusitfy="center" alignItems="center">
        <Grid item xs>
          <Grid container direction="column" wrap="nowrap" jusitfy="center" alignItems="flex-start">
            {windowWidth < 750 ? (
              <Menu className={classes.menu} onClick={() => cbOpenDrawer()} />
            ) : null}
            <Typography noWrap className={classes.title}>
              {pathname !== '/' ? pathname.substr(1) : 'Home'}
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
const mapStateToProps = ({ router }) => ({
  router,
});

export default connect(mapStateToProps)(windowSize(withStyles(styles)(AppBarCustom)));
