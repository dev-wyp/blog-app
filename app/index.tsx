import { Link, useRouter } from 'expo-router';
import { View, Image, Text, Button } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'red', // Set your global background color here
  },
};

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Add your login logic here
    router.replace('/home');
  };

  return (
    <PaperProvider theme={theme}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={{
            uri: './assets/images/panda-icon.png',
          }}
          style={{ width: 176, height: 158 }}
        />

        <Text
          style={{
            marginBottom: 60,
            marginTop: 20,
            fontSize: 30,
            fontWeight: 'bold',
          }}
        >
          Panda Blog
        </Text>

        <View
          style={{
            backgroundColor: 'linear-gradient(135deg, #6253e1, #04befe)',
            marginBottom: 10,
            width: 140,
          }}
        >
          <Button title="Login" onPress={handleLogin} />
        </View>

        <View
          style={{
            backgroundColor: 'linear-gradient(135deg, #6253e1, #04befe)',
            width: 140,
            marginBottom: 10,
          }}
        >
          <Link href="/register" asChild>
            <Button title="Create Account" />
          </Link>
        </View>

        <Link href="/test">
          <Text>Forget Password</Text>
        </Link>
      </View>
    </PaperProvider>
  );
};

export default LoginPage;
