import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import { Divider, Grid } from 'material-ui';
import Avatar from 'material-ui/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import ReactPlaceholder from 'react-placeholder';
import {
  TextBlock,
  MediaBlock,
  TextRow,
  RectShape,
  RoundShape,
} from 'react-placeholder/lib/placeholders';
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
  placeHolderContainer: {
    margin: '12px, 12px, 25px, 15px',
    padding: 15,
  },
});

const renderPlaceHolder = props => {
  const { classes } = props;
  return (
    <Grid
      container
      className={classes.placeHolderContainer}
      direction="row"
      wrap="nowrap"
      justify="flex-end"
      alignItems="center"
    >
      <RoundShape color={'lightGrey'} style={{ width: 30, height: 30, margin: 12 }} />
      <TextBlock rows={2} color={'lightGrey'} />
    </Grid>
  );
};

const FolderListItem = props => {
  const { classes, item, ready } = props;
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
        <ReactPlaceholder
          customPlaceholder={renderPlaceHolder(props)}
          showLoadingAnimation
          rows={2}
          ready={ready}
        >
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
};

FolderListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderListItem);
