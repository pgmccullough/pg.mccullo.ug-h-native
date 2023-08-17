/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import type {Node} from 'react';

import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import StyleSheet from 'react-native/Libraries/StyleSheet/StyleSheet';
import Text from 'react-native/Libraries/Text/Text';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import React from 'react';

const Header = (): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
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
  );
};

const styles = StyleSheet.create({
  background: {
    height: 200
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
    lineHeight: 28
  }
});

export default Header;
