import { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../utils';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    setError('');
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername) {
      setError('Please enter your username');
      return;
    }
    if (!trimmedPassword) {
      setError('Please enter your password');
      return;
    }

    // Login success: navigate to Home
    navigation.replace(ROUTES.HOME);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <View style={styles.form}>
        <Text style={styles.title}>Log In</Text>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <CustomTextInput
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
          textStyle={styles.label}
          TextInputStyle={styles.input}
        />

        <CustomTextInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          textStyle={styles.label}
          TextInputStyle={styles.input}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin} activeOpacity={0.8}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate(ROUTES.HOME)}
        >
          <Text style={styles.linkText}>Go to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate(ROUTES.PROFILE)}
        >
          <Text style={styles.linkText}>Go to Profile</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  form: {
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    color: '#000',
    marginBottom: 4,
    fontSize: 14,
  },
  input: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  errorText: {
    color: '#c00',
    marginBottom: 12,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  linkButton: {
    paddingVertical: 12,
    marginTop: 8,
    alignItems: 'center',
  },
  linkText: {
    color: '#2563eb',
    fontSize: 14,
  },
});
