import React, { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";

export const HeaderBar = (): ReactNode => {
  const handleHead = ({tintColor}:any) => <Text style={{color: tintColor}}>H1</Text>
  const richText = useRef<any>(null);
  const [ active, setActive ] = useState<boolean>(false)
  const [ newPostText, setNewPostText ] = useState<string>("")
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
    <View style={{position: 'absolute', zIndex: 2, top: 205, left: '21%', right: '2%'}} >
      <SafeAreaView>
        <ScrollView>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}	style={{ flex: 1 }}>
            <RichEditor
              onFocus={() => setActive(true)}
              onBlur={() => setActive(false)}
              ref={richText}
              onChange={(descriptionText:string) => {
                setNewPostText(descriptionText);
              }}
            />
          </KeyboardAvoidingView>
        </ScrollView>

        {active
          ?<RichToolbar
            editor={richText}
            actions={[ actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1 ]}
            iconMap={{ [actions.heading1]: handleHead }}
          />
          :""
        }
      </SafeAreaView>
      </View>
      <View
        style={styles.headerBar}
      >
        <Text
          style={styles.headerBarText}
        >

          {/* Patrick Glendon McCullough */}
        </Text>
      </View>
    </>
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
    fontFamily: 'JosefinSans-Regular',
    fontSize: 21,
    color: '#fff'
  }
});
