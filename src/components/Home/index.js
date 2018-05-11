import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Grid, Paper, Button, Typography } from 'material-ui';
import AppBarCustom from '../AppBar';
import LeftDrawer from '../LeftDrawer';
import FolderList from '../FolderList';
import windowSize from 'react-window-size';

const styles = theme => ({
  root: {
    margin: 0,
    padding: 0,
  },
  container: {
    width: `calc(100% - 250px)`,
    marginLeft: '250px',
    padding: '2% 2% 0 0',
    [theme.breakpoints.down('750')]: {
      width: `100%`,
      marginLeft: 0,
    },
  },
  buttonContainer: {
    minWidth: 200,
  },
  button: {
    textTransform: 'none',
    width: 180,
    label: {
      whiteSpace: 'nowrap',
    },
  },
});

const RenderFolderList = props => {
  const { params } = props;
  return (
    <Grid container direction="column" wrap="nowrap" alignItems="stretch" justify="center">
      <Grid item xs>
        <Typography>Starred</Typography>
      </Grid>
      <Grid item xs>
        <FolderList page={params} />
      </Grid>
    </Grid>
  );
};

const RenderGridButton = props => {
  const { classes } = props;
  return (
    <Grid item md className={classes.buttonContainer}>
      <Button variant="raised" color="secondary" className={classes.button} fullWidth>
        Upload files
      </Button>
    </Grid>
  );
};
class FrontPage extends Component {
  render() {
    const {
      classes,
      windowWidth,
      match: { params },
    } = this.props;
    return (
      <Paper className={classes.root} elevation={0}>
        <LeftDrawer superProps={this.props} />
        <AppBarCustom title={params} />
        <Grid
          container
          direction="row"
          wrap="nowrap"
          alignItems="flex-start"
          className={classes.container}
          justify="flex-start"
          spacing={16}
        >
          <Grid item xs={12} md={windowWidth >= 1050 ? 9 : 12}>
            {RenderFolderList({ params })}
          </Grid>
          {windowWidth > 1050 ? RenderGridButton(this.props) : null}
        </Grid>
      </Paper>
    );
  }
}

FrontPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default windowSize(withStyles(styles)(FrontPage));
