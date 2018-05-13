import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Grid, Paper, Button, Typography } from 'material-ui';
import AppBarCustom from '../AppBar';
import LeftDrawer from '../LeftDrawer';
import FolderList from '../FolderList';
import windowSize from 'react-window-size';
import styles from './indexStyles';

const RenderFolderList = () => {
  return (
    <Grid container direction="column" wrap="nowrap" alignItems="stretch" justify="center">
      <Grid item xs>
        <Typography>Starred</Typography>
      </Grid>
      <Grid item xs>
        <FolderList />
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
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
  }

  handleOpenDrawer() {
    const { drawerOpen } = this.state;
    this.setState({ drawerOpen: !drawerOpen });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { windowWidth } = nextProps;
    if (windowWidth > 750) {
      this.setState({ drawerOpen: true });
    }
    if (windowWidth < 750 && this.props.windowWidth >= 750) {
      this.setState({ drawerOpen: false });
    }
  }

  render() {
    const {
      classes,
      windowWidth,
      match: { params },
    } = this.props;
    const { drawerOpen } = this.state;
    return (
      <Paper className={classes.root} elevation={0}>
        <LeftDrawer
          superProps={this.props}
          drawerOpen={drawerOpen}
          cbOpenDrawer={() => this.handleOpenDrawer()}
        />
        <AppBarCustom title={params} cbOpenDrawer={() => this.handleOpenDrawer()} />
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
            {RenderFolderList()}
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
