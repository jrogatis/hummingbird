import React, { Component } from 'react';
import { MediaBlock, Button, SquareImage, RoundImage, TextBlock } from 'react-placeholder-shimmer';
export default class FolderListItemShimmer extends Component {
  render() {
    return (
      <div>
        <MediaBlock>
          <RoundImage />
          <TextBlock textLines={[40, 50]} />
        </MediaBlock>
      </div>
    );
  }
}
