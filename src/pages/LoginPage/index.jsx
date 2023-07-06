import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Input from '../../components/Input';
import * as LocalAuthentication from 'expo-local-authentication';
import { useState } from 'react';

export default function LoginPage({ navigation }) {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleLogin = () => {
    const baseEmail = 'mpps@cin.ufpe.br';
    const basePassword = '123';

    if (email === baseEmail && password === basePassword) {
      navigation.navigate('Home');

    } else {
      alert('incorrect credentials');
    };
  };

  const onFaceId = async () => {
    try {
      const isCompatible = await LocalAuthentication.hasHardwareAsync();
      if (!isCompatible) {
        throw new Error('your device is not compatible');
      };

      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      if (!isEnrolled) {
        throw new Error('no faces / fingers found');
      };

      const auth = await LocalAuthentication.authenticateAsync();
      console.log('auth', auth);
      if (auth.success == false) {
        throw new Error('not authenticated');
      };

      navigation.navigate('Home');
      console.log('wellcome');
    } catch (error) {
      console.log('error', error);
    };
  };

  const handlePress = () => {
    if (email === '' || password === '') {
      onFaceId();
    } else {
      handleLogin();
    };
  };

  console.log('email', email)

  return (
    <View style={styles.container}>
      <Text> Login </Text>
      <TextInput
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
      />
      <Text> Password </Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
       <Button
        title="Sign In"
        onPress={handlePress}
        style={styles.button}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 320,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    borderWidth: 1,
    margin: 12,
    padding: 10,
    height: 40,
  }
});
