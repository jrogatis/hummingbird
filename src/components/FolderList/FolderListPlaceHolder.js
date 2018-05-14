import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { TextBlock, RoundShape } from 'react-placeholder/lib/placeholders';
import { Divider, Grid } from 'material-ui';
import ReactPlaceholder from 'react-placeholder';

import 'react-placeholder/lib/reactPlaceholder.css';

const styles = theme => ({
  placeHolderContainer: {
    margin: '12px, 12px, 25px, 15px',
    padding: 15,
  },
});

const PlaceHolderItem = (props, item) => {
  const { classes } = props;
  return (
    <Grid key={item}>
      <Grid
        container
        className={classes.placeHolderContainer}
        direction="row"
        wrap="nowrap"
        justify="flex-end"
        alignItems="center"
      >
        <RoundShape
          color={'lightGrey'}
          style={{ width: 30, height: 30, margin: 12 }}
          showLoadingAnimation
        />
        <TextBlock rows={2} color={'lightGrey'} />
      </Grid>
      <Divider />
    </Grid>
  );
};

const FolderListPlaceHolder = props => {
  return (
    <Grid>
      {[...Array(5).keys()].map(item => (
        <ReactPlaceholder
          key={`place-${item}`}
          ready={false}
          showLoadingAnimation
          customPlaceholder={PlaceHolderItem(props, item)}
        >
          <div />
        </ReactPlaceholder>
      ))}
    </Grid>
  );
};

FolderListPlaceHolder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderListPlaceHolder);
