import { Text, View } from 'react-native';
import { Link } from 'expo-router';

const ProfilePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Link href="/">
        <Text>Log out</Text>
      </Link>
    </View>
  );
};

export default ProfilePage;
