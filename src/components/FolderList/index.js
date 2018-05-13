import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { List, Grid } from 'material-ui';
import FolderListItem from './FolderListItem';
import _ from 'lodash';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
});

const nextPg = props => {
  const {
    router: {
      location: { pathname },
    },
  } = props;
  return pathname !== '/' ? pathname : 'Home';
};

class FolderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curPage: nextPg(props),
      ready: false,
      quantItems: _.random(1, 5),
    };
    this.timer = '';
  }

  updatePlaceHolder() {
    this.timer = setTimeout(
      function() {
        this.setState({ ready: true });
      }.bind(this),
      3000,
    );
  }

  componentDidMount() {
    this.updatePlaceHolder();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { curPage } = this.state;
    if (curPage !== nextPg(nextProps)) {
      clearTimeout(this.timer);
      this.setState({
        curPage: nextPg(nextProps),
        ready: false,
        quantItems: _.random(1, 5),
      });
      this.updatePlaceHolder();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { curPage } = this.props;
    const newPage = curPage !== nextPg(nextProps);
    const newReady = nextState.ready !== this.state.ready;
    return newPage || newReady;
  }

  render() {
    const { classes } = this.props;
    const { ready, quantItems } = this.state;
    return (
      <Grid container direction="column" className={classes.root}>
        <Grid item xs={12}>
          <List>
            {[...Array(quantItems).keys()].map(item => (
              <FolderListItem item={item} key={`list-${item}`} ready={ready} />
            ))}
          </List>
        </Grid>
      </Grid>
    );
  }
}
FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};

const mapStateToProps = ({ router }) => ({
  router,
});

export default connect(mapStateToProps)(withStyles(styles)(FolderList));
