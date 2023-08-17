import type { ReactNode } from 'react';

const StyleSheet = require('react-native/Libraries/StyleSheet/StyleSheet');
const Text = require('react-native/Libraries/Text/Text');
const useColorScheme = require('react-native/Libraries/Utilities/useColorScheme');
import { View } from 'react-native';
import React from 'react';

export const HeaderBar = (): ReactNode => {
  const isDarkMode = useColorScheme === 'dark';
  return (
      <View
        style={styles.headerBar}
      >
        <Text
          style={styles.headerBarText}
        >
          Patrick Glendon McCullough
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: '#666',
    position: 'relative',
    zIndex: 1
  },
  headerBarText: {
    fontFamily: 'Josefin Sans',
    fontSize: 21,
    color: '#fff'
  }
});
