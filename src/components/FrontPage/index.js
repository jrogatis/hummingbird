import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Grid, Paper } from 'material-ui';
import AppBarCustom from '../AppBar';
import LeftDrawer from '../LeftDrawer';

const styles = theme => ({
  root: {
    margin: 0,
    padding: 0,
  },
  container: {
    width: `calc(100% - 200px)`,
    marginLeft: '200px',
  },
});

class FrontPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={0}>
        <LeftDrawer />
        <AppBarCustom />
        <Grid
          container
          direction="row"
          wrap="nowrap"
          alignItems="center"
          className={classes.container}
        >
          <Grid xs item>
            opa
          </Grid>
          <Grid xs item>
            entao
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

FrontPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrontPage);
