import React from 'react';
import type { PropsWithChildren, ReactNode } from 'react';

import { Text, ImageBackground, StyleSheet, useColorScheme } from 'react-native';
import { HeaderBar } from './HeaderBar';
import type { UserClean } from '../../common/types';
import { stampToTime } from '../../common/functions';

type HeaderProps = PropsWithChildren<UserClean>;

export const Header = ({cover_image, profile_image, site_name, watchword}: HeaderProps): ReactNode => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <ImageBackground
        accessibilityRole="image"
        testID="new-app-screen-header"
        source={{uri: `https://pg.mccullo.ug${cover_image.image}`}}
        style={[
          styles.background
        ]}
        >
        <Text
          style={[
            styles.headerH1
          ]}
        >
          {watchword.word}
          {"\n"}
        </Text>
        <Text
          style={[
            styles.headerCover
          ]}>
            cover: {stampToTime((cover_image?.timestamp||0)/1000)||""}
        </Text>
        <Text
          style={[
            styles.headerProfile
          ]}>
          profile: {stampToTime((profile_image?.timestamp||0)/1000)||""}
        </Text>
      </ImageBackground>
      <ImageBackground
        source={{uri: `https://pg.mccullo.ug${profile_image.image}`}}
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
