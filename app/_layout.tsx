import { NavigationContainer } from '@react-navigation/native';
import { Stack, useRouter } from 'expo-router';
import { Button, View } from 'react-native';

const StackLayout = () => {
  const router = useRouter();
  return (
    // <NavigationContainer>
    // <View style={{ backgroundColor: 'red' }}>
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#10101E',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerTitle: 'Login', headerShown: false }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerTitle: 'Create account',
          headerRight: () => (
            <Button title="Open" onPress={() => router.push('/modal')} />
          ),
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
          headerLeft: () => (
            <Button title="Close" onPress={() => router.back()} />
          ),
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: 'red' },
        }}
      />
    </Stack>
    // </View>
    // </NavigationContainer>
  );
};

export default StackLayout;
