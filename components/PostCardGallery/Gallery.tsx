import React from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import { 
  Image,
  View
} from 'react-native';
import type { PostFeedback, PostMedia } from '../../common/types';

type GalleryProps = PropsWithChildren<{
  width: number,
  media: PostMedia,
}>;

export const Gallery = ({ media, width }: GalleryProps): ReactNode => {
  let mediaArray: string[] = [];

  if(media?.images) mediaArray = [...mediaArray, ...media.images]
  
  return(
    <View>
      <View style={{flexDirection: 'row', overflow: "hidden"}}>
        {mediaArray.map((mediaEl: string)=> 
          <Image
            key={mediaEl}
            style={{height: width, width}} 
            source={{uri: `https://pg.mccullo.ug/api/media/images/${mediaEl}`}}
            resizeMode="contain"
          />
        )}
      </View>
    </View>
  )
}