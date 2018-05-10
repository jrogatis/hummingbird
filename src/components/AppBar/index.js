import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Toolbar, AppBar, Typography, Grid } from 'material-ui';

import RightBar from './RightBar';

const styles = theme => ({
  appBar: {
    backgroundColor: 'transparent',
    width: `calc(100% - 200px)`,
    marginLeft: '200px',
    boxShadow: 'none',
  },
});

const AppBarCustom = props => {
  const { classes } = props;
  return (
    <AppBar position="static" className={classes.appBar}>
      <Grid container direction="row" wrap="nowrap" jusitfy="center" alignItems="center">
        <Grid item xs>
          <Typography noWrap>BLA BLA</Typography>
        </Grid>
        <Grid item xs>
          <RightBar />
        </Grid>
      </Grid>
    </AppBar>
  );
};

AppBarCustom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarCustom);
