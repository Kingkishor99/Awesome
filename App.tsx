import { View, Text, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import Video, { VideoRef } from 'react-native-video'
import VideoPlayer from 'react-native-video-controls';

const App = () => {
  // const background = require('./videos/v1.mp4');
  const background = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4';

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <VideoPlayer
        source={{ uri: background }}
        // controls={true}
        selectedVideoTrack={{
          type: "resolution",
          value: 1080
        }}
        style={styles.backgroundVideo}
      />
    </View>
  )
}

export default App

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});