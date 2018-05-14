import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { List, Grid } from 'material-ui';
import FolderListItem from './FolderListItem';
import _ from 'lodash';
import { connect } from 'react-redux';
import { requestData, isFetching } from '../../actions';
import FolderListPlaceHolder from './FolderListPlaceHolder';

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

  componentDidMount() {
    const { requestData, isFetching } = this.props;
    isFetching();
    requestData();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      filesList: {
        FetchListFiles: { isLoading, data },
      },
    } = nextProps;
    const { curPage } = this.state;
    if (curPage !== nextPg(nextProps) || this.props.ready !== !isLoading) {
      this.setState({ ready: !isLoading, data });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { curPage } = this.props;
    const newPage = curPage !== nextPg(nextProps);
    const newReady = nextState.ready !== this.state.ready;
    return newPage || newReady;
  }

  render() {
    const {
      classes,
      filesList: {
        FetchListFiles: { data },
      },
    } = this.props;
    const { ready } = this.state;
    return (
      <Grid container direction="column" className={classes.root}>
        <Grid item xs={12}>
          <List>
            {ready ? (
              data.map(item => <FolderListItem item={item} key={`list-${item.name}`} />)
            ) : (
              <FolderListPlaceHolder />
            )}
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

const mapStateToProps = ({ router, filesList }) => ({
  router,
  filesList,
});

export default connect(mapStateToProps, { requestData, isFetching })(
  withStyles(styles)(FolderList),
);
