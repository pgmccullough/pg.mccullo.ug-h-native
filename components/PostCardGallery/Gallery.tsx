import React, { useRef, useState } from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import { 
  Image,
  StyleSheet,
  Text,
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
  
  const [ currentSlide, setCurrentSlide ] = useState<number>(1);
  const firstImage = useRef<Image>(null);

  const slide = (dir:"left"|"right") => {
    if(!firstImage?.current) return;
    if((dir==="left")&&(currentSlide > 1)) {
      firstImage.current.setNativeProps({ style: {marginLeft: ((currentSlide-2)*width*-1)}})
      setCurrentSlide(currentSlide-1);
    } else if((dir==="right")&&(currentSlide < mediaArray.length)) {
      firstImage.current.setNativeProps({ style: {marginLeft: ((currentSlide)*width*-1)}})
      setCurrentSlide(currentSlide+1);
    }
  }

  return(
    <View>
      <View style={{flexDirection: 'row', overflow: "hidden"}}>
        {mediaArray.map((mediaEl: string, i: number)=> 
          <Image
            ref={i===0?firstImage:null}
            key={mediaEl}
            style={{height: width, width}} 
            source={{uri: `https://pg.mccullo.ug/api/media/images/${mediaEl}`}}
            resizeMode="contain"
          />
        )}
      </View>
      {mediaArray.length>1
        ?<>
          <Text onPress={() => slide("left")}>{"<"}</Text>
          <Text onPress={() => slide("right")}>{">"}</Text>
        </>
        :""
      }
        {mediaArray.length>1
          ?<View style={styles.mediaBubbleWrapper}>
            {mediaArray.map((_ele: string, i: number) => 
              <View
                key={`mediaBubble-${i}`}
                style={i===currentSlide-1
                  ?[styles.mediaBubble,styles.mediaBubbleActive]
                  :styles.mediaBubble
                }
              />
            )}
          </View> 
          :``
        }
    </View>
  )
}

const styles = StyleSheet.create({
  mediaBubbleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
    

  },
  mediaBubble: {
    width: 10,
    height: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 100,
    marginLeft: 2,
    marginRight: 2
  },
  mediaBubbleActive: {
    backgroundColor: '#4A6CBA',
    width:10,
    height: 10,
    borderWidth: 0
  }
})