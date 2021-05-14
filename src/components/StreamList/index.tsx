import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { List, StreamContainer, StreamRow, StreamThumbnail, StreamColumn, StreamHeader, StreamAvatar, StreamUsername, StreamDescription, StreamCategory, TagRow, TagView, TagText } from './styles';

const StreamList: React.FC = () => {

  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar/>
              <StreamUsername numerOfLines={1}>rodz_oficial</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, omnis.
         </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Lorem ipsum dolor sit amet.
         </StreamCategory>
        </StreamRow>

        <TagRow>

          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>

          <TagView>
            <TagText>Web Development</TagText>
          </TagView>

        </TagRow>

      </StreamColumn>
    </StreamContainer>
  )


  return (

    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
