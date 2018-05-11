import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import { Divider, Grid } from 'material-ui';
import Avatar from 'material-ui/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
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
    this.state = { ready: false };
    this.timer = '';
  }

  componentWillMount() {
    this.timer = setTimeout(
      function() {
        this.setState({ ready: true });
      }.bind(this),
      3000,
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ready: false });
    this.timer = setTimeout(
      function() {
        this.setState({ ready: true });
      }.bind(this),
      3000,
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { classes, item } = this.props;
    return (
      <Grid
        container
        direction="column"
        alignItems="stretch"
        justify="flex-start"
        key={`item-${item}`}
        className={classes.root}
      >
        <Grid item xs={12}>
          <ReactPlaceholder showLoadingAnimation type="media" rows={2} ready={this.state.ready}>
            <ListItem>
              <Avatar className={classes.avatar}>
                <FolderIcon className={classes.icon} />
              </Avatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </ReactPlaceholder>
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
