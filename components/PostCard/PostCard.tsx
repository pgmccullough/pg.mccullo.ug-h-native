import React from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import { 
  StyleSheet, 
  Text, 
  useColorScheme, 
  useWindowDimensions,
  View 
} from 'react-native';
import { stampToTime } from '../../common/functions';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
const systemFonts = [...defaultSystemFonts, 'JosefinSans-Regular'];

type PostCardProps = PropsWithChildren<{
  title: string;
  date?: number;
}>;

export const PostCard = ({children, date, title}: PostCardProps): ReactNode => {
  const isDarkMode = useColorScheme() === 'dark';
  const { width } = useWindowDimensions();
  return (
    <>
      <View
        style={styles.postCardHeader}
      >
        {title&&!date
          ?<Text
            style={styles.postCardHeaderText}
          >
            {title}
          </Text>
          :<Text
            style={styles.postCardHeaderDate}
          >
            {stampToTime(date!)}
          </Text>
        }
      </View>
      <View
        style={styles.postCardContent}
      >
      <RenderHtml
        baseStyle={{fontSize: 16, fontFamily: 'JosefinSans-Regular', lineHeight: 24, padding: 16}}
        contentWidth={width}
        source={{html: children?.toString()||""}}
        systemFonts={systemFonts}
      />
    
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  postCardHeader: {
    margin: 10,
    marginBottom: 0,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#979997',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  postCardHeaderText: {
    fontFamily: 'JosefinSans-Bold',
    paddingTop: 12,
    paddingBottom: 12,
  },
  postCardHeaderDate: {
    fontFamily: 'JosefinSans-Regular',
    color: "#666",
    alignSelf: "flex-start",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 14
  },
  postCardContent: {
    margin: 10,
    marginTop: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#979997',
    borderTopWidth: 0,
  },
  postCardContentText: {
    padding: 12,
    paddingTop: 24,
    paddingBottom: 24,
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    lineHeight: 24
  }
});
