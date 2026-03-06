import { Text, View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { width: '100%' },
  inputBase: { borderBottomWidth: 2, borderColor: 'black', width: '100%' },
});

const CustomTextInput = ({
  placeholder,
  label,
  value,
  onChangeText,
  textStyle,
  containerStyle,
  TextInputStyle,
  secureTextEntry = false,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={textStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={[styles.inputBase, TextInputStyle]}
      />
    </View>
  );
};

export default CustomTextInput;