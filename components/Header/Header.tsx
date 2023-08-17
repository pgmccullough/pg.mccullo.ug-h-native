import type { ReactNode } from 'react';

const ImageBackground = require('react-native/Libraries/Image/ImageBackground');
const StyleSheet = require('react-native/Libraries/StyleSheet/StyleSheet');
const Text = require('react-native/Libraries/Text/Text');
const useColorScheme = require('react-native/Libraries/Utilities/useColorScheme');
import { View } from 'react-native';
import { HeaderBar } from './HeaderBar';
import React from 'react';

export const Header = (): ReactNode => {
  const isDarkMode = useColorScheme === 'dark';
  return (
    <>
      <ImageBackground
        accessibilityRole="image"
        testID="new-app-screen-header"
        source={{uri: "https://pg.mccullo.ug/api/media/images/user/cover/715b82a2-a057-4ce1-90ac-2d0479d1ccde.jpg"}}
        style={[
          styles.background
        ]}
        >
        <Text
          style={[
            styles.headerH1
          ]}
        >
          empire
          {"\n"}
        </Text>
        <Text
          style={[
            styles.headerCover
          ]}>
            cover: August 16, 2023 at 9:00am
        </Text>
        <Text
          style={[
            styles.headerProfile
          ]}>
          profile: August 16, 2023 at 8:59am
        </Text>
      </ImageBackground>
      <ImageBackground
        source={{uri: "https://pg.mccullo.ug/api/media/images/user/profile/f5c09b71-5b65-4b97-b322-3815619fa304.jpg"}}
        style={
          styles.headerProfileImage
        }
      />
      <HeaderBar />
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 200,
    zIndex: 1,
  },
  headerH1: {
    fontFamily: 'Josefin Sans Bold',
    color: '#fff',
    fontSize: 64,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 6,
    position: 'absolute',
    right: 24,
    top: 54
  },
  headerCover: {
    fontFamily: 'Josefin Sans Bold',
    color: '#fff',
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 6,
    position: 'absolute',
    top: 140,
    right: 24,
    lineHeight: 28
  },
  headerProfile: {
    fontFamily: 'Josefin Sans Bold',
    color: '#fff',
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 6,
    position: 'absolute',
    top: 170,
    right: 24,
    lineHeight: 28,
  },
  headerProfileImage: {
    backgroundColor: '#fff',
    backgroundSize: 'cover',
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 100,
    width: 86,
    height: 86,
    position: 'absolute',
    top: 135,
    left: 5,
    zIndex: 2,
    overflow: 'hidden'
  }
});
