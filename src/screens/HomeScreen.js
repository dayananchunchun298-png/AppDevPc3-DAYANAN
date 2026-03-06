import { View, Text, Image, StyleSheet } from 'react-native';
import ImageAssets from '../utils/image';

const styles = StyleSheet.create({
  container: {},
  logo: { width: 200, height: 200 },
  title: { fontSize: 18 },
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: ImageAssets.LOGO }} style={styles.logo} />
      <Text style={styles.title}>homescreen</Text>
    </View>
  );
};

export default HomeScreen;