import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { AppBar, Typography, Grid } from 'material-ui';

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
});

const AppBarCustom = props => {
  const { classes, title } = props;
  return (
    <AppBar position="static" className={classes.appBar}>
      <Grid container direction="row" wrap="nowrap" jusitfy="center" alignItems="center">
        <Grid item xs>
          <Typography noWrap>
            {title.hasOwnProperty('subFolder') ? title.subFolder : 'Home'}
          </Typography>
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

export default withStyles(styles)(AppBarCustom);
