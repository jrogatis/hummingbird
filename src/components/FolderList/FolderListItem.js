import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import { Divider, Grid } from 'material-ui';
import Avatar from 'material-ui/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import FolderListItemShimmer from './FolderListItemShimmer';
const styles = theme => ({
  root: {},
  avatar: {
    backgroundColor: 'transparent',
    color: theme.palette.primary.light,
    fontSize: 36,
  },
  icon: {
    fontSize: 36,
  },
});

class FolderListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ ready: true });
    }, 3000);
  }

  render() {
    const { classes, item } = this.props;
    const { ready } = this.state;
    return !ready ? (
      <FolderListItemShimmer />
    ) : (
      <Grid
        container
        direction="column"
        alignItems="stretch"
        justify="flex-start"
        key={`item-${item}`}
        className={classes.root}
      >
        <Grid item xs={12}>
          <ListItem>
            <Avatar className={classes.avatar}>
              <FolderIcon className={classes.icon} />
            </Avatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
          <Divider />
        </Grid>
      </Grid>
    );
  }
}

FolderListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderListItem);
