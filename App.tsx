import React, { useEffect, useState } from 'react';

import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import { Header } from './components/Header/Header';
import { PostCard } from './components/PostCard/PostCard';
import type { Post, UserClean } from './common/types';

function App(): JSX.Element {

  const [ userData, setUserData ] = useState<UserClean>({
      cover_image: {
          gps: null,
          timestamp: null,
          image: ""
      },
      profile_image: {
          gps: null,
          timestamp: null,
          image: ""
      },
      site_description: "",
      site_name: "",
      watchword: {
        word: "",
        timestamp: 0
      }
  })
  const [ posts, setPosts ] = useState<Post[]>([]);

  const getUserData = async() => {
    try {
      const response = await fetch('https://pg.mccullo.ug/api/user/fetch?userId=62d4a25bbe8297b0fb98a06a');
      const json = await response.json();
      setUserData(json);
    } catch (error) {
      console.error(error);
    }
  }

  const getPosts = async() => {
    try {
      const response = await fetch('https://pg.mccullo.ug/api/post/fetch');
      const json = await response.json();
      setPosts(json.additionalPosts);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserData();
    getPosts();
  },[])

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#eee'
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header
          cover_image={userData.cover_image}
          profile_image={userData.profile_image}
          site_name={userData.site_name}
          watchword={userData.watchword}
        />
        <ImageBackground
          source={require('./assets/images/bg_pattern.png')}
          style={{
            backgroundColor: '#eee',
            minHeight: 400,
          }}
          imageStyle={{resizeMode: 'repeat', transform: [{scale: 2.75}]}}
        >
          <View style={{marginTop: 16}}/>
          <PostCard title="Patrick Glendon McCullough">
            {userData.site_description||"Loading..."}
          </PostCard>
          {posts.map((post: Post) => 
            <PostCard 
              key={post._id}
              date={post.created}
              feedback={post.feedback}
              media={post.media}
              title=""
            >
              {post.content}
            </PostCard>
          )}
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
