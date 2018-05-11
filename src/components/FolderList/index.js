import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { List, Grid } from 'material-ui';
import FolderListItem from './FolderListItem';
import _ from 'lodash';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
});

class FolderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curPage: props.page.hasOwnProperty('subFolder') ? props.page.subFolder : 'Home',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { curPage } = this.state;
    if (curPage !== nextProps.page.subFolder) {
      this.setState({ curPage: nextProps.page.subFolder });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { curPage } = this.state;
    return curPage !== nextProps.page.subFolder;
  }

  render() {
    const { classes } = this.props;
    const randomItems = _.random(1, 5);
    return (
      <Grid container direction="column" className={classes.root}>
        <Grid item xs={12}>
          <List>
            {[...Array(randomItems).keys()].map(item => (
              <FolderListItem item={item} key={`list-${item}`} />
            ))}
          </List>
        </Grid>
      </Grid>
    );
  }
}
FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);
