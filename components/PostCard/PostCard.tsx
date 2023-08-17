import type { ReactNode } from 'react';
import type {PropsWithChildren} from 'react';

const StyleSheet = require('react-native/Libraries/StyleSheet/StyleSheet');
const Text = require('react-native/Libraries/Text/Text');
const useColorScheme = require('react-native/Libraries/Utilities/useColorScheme');
import { View } from 'react-native';
import React from 'react';

type PostCardProps = PropsWithChildren<{
  title: string;
  date?: string;
}>;

export const PostCard = ({children, date, title}: PostCardProps): ReactNode => {
  const isDarkMode = useColorScheme === 'dark';
  return (
    <>
      <View
        style={styles.postCardHeader}
      >
        <Text
          style={styles.postCardHeaderText}
        >
          {title}
        </Text>
      </View>
      <View
        style={styles.postCardContent}
      >
        <Text
          style={styles.postCardContentText}
        >
          {children}
        </Text>
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
    fontFamily: 'Josefin Sans Bold',
    paddingTop: 12,
    paddingBottom: 12,
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
    fontFamily: 'Josefin Sans',
    fontSize: 16,
    lineHeight: 24
  }
});
