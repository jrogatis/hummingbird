import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Grid, Paper, Button, Hidden, Typography } from 'material-ui';
import AppBarCustom from '../AppBar';
import LeftDrawer from '../LeftDrawer';
import FolderList from '../FolderList';

const styles = theme => ({
  root: {
    margin: 0,
    padding: 0,
  },
  container: {
    width: `calc(100% - 200px)`,
    marginLeft: '200px',
    padding: '2% 2% 0 0',
  },
  button: {
    textTransform: 'none',
    width: 200,
    label: {
      whiteSpace: 'nowrap',
    },
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
          alignItems="flex-start"
          className={classes.container}
          justify="flex-start"
          spacing={16}
        >
          <Grid item sm={12} md={10}>
            <Grid container direction="column" wrap="nowrap" alignItems="stretch" justify="center">
              <Grid item xs>
                <Typography>Starred</Typography>
              </Grid>
              <Grid item xs>
                <FolderList />
              </Grid>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid item md={2}>
              <Button variant="raised" color="secondary" className={classes.button} fullWidth>
                Upload files
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </Paper>
    );
  }
}

FrontPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrontPage);
