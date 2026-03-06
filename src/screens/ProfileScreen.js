import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  title: { fontSize: 18 },
});

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>profilescreen</Text>
    </View>
  );
};

export default ProfileScreen;