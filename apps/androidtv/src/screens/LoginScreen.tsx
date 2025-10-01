import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient
      colors={['#0f2027', '#203a43', '#2c5364']}
      style={{ flex: 1 }}
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />

        <Text style={styles.title}>Sign In</Text>

        <TextInput
          placeholder="Email or phone number"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity>
            <Text style={styles.remember}>☐ Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.help}>Need help?</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.signup}>
          New to interplanetary.tv?{' '}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Signup')}
          >
            Sign up now
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 200,
  },
  logo: {
    alignSelf: 'center',
    width: 160,
    height: 160,
    marginBottom: 0,
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    color: '#fff',
  },
  button: {
    backgroundColor: '#0066ff',
    padding: 15,
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  remember: { color: '#aaa' },
  help: { color: '#aaa' },
  signup: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 30,
  },
  link: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
