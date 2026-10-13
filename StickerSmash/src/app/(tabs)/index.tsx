import { Text, View, StyleSheet } from 'react-native';
import {Image} from 'expo-image';

const PlaceholderImage = require('@/assets/images/background-image.png');

import ImageViewer from '@/components/Image-viewer';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer:{
    flex: 1,
  },
  image: {
    width: 300,
    height: 340,
    borderRadius: 18,
  }
});

