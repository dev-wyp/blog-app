import { View, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Card,
  Chip,
  Icon,
  IconButton,
  MD2Colors,
  Text,
  BottomNavigation,
} from 'react-native-paper';
import axios from 'axios';

interface Restaurant {
  id: number;
  name: string;
  address: string;
  rating: number;
  cuisine: string;
  opening_hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  contact: {
    phone: number;
    email: string;
    website: string;
  };
  price_level: string;
  features: [];
  images: {
    thumbnail: string;
    main: string;
  };
  menu: [
    {
      item: string;
      price: number;
    }
  ];
}

const HomeRoute = () => (
  <View style={{ height: 300 }}>
    <Text>Home Content</Text>
  </View>
);

const SettingsRoute = () => (
  <View style={{ height: 300 }}>
    <Text>Settings Content</Text>
  </View>
);

const NewsDetailsPage = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [restaurant, setRestaurant] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'HomeB', icon: 'home' },
    { key: 'settings', title: 'SettingsB', icon: 'cog' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    settings: SettingsRoute,
  });

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await axios.get(
          `https://api.mockfly.dev/mocks/31e7c23a-5ac2-4bc5-bf07-9537cb4730d3/restaurants/${id}`
        );
        setRestaurant(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, []);

  if (loading)
    return (
      <View
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator
          size={'large'}
          animating={true}
          color={MD2Colors.red600}
        />
      </View>
    );
  if (error)
    return (
      <View
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Error: {error}
      </View>
    );

  return (
    <View style={{ backgroundColor: '#ffffff' }}>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerRight: (props) => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginRight: 14,
                width: 80,
              }}
            >
              <View
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 20,
                  padding: 5,
                }}
              >
                <Icon
                  source={'share-variant-outline'}
                  size={24}
                  color="#5b4cbd"
                />
              </View>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 20,
                  padding: 5,
                }}
              >
                <Icon source={'heart-outline'} size={24} color="#5b4cbd" />
              </View>
            </View>
          ),
          headerLeft: (props) => (
            <IconButton
              icon="arrow-left"
              size={24}
              iconColor="#5b4cbd"
              onPress={() => router.back()}
              style={{
                marginLeft: 10,
                backgroundColor: '#ffffff',
                borderRadius: 50,
              }}
            />
          ),
          headerTransparent: true,
        }}
      />
      {/* <Card style={{ width: '100%', overflow: 'hidden' }}> */}
      <Card.Cover
        source={{
          uri: `${restaurant.images?.main}`,
          // uri: 'https://ca.slack-edge.com/T03PS2TL8KF-U063J2H43CN-33dd6ce375c3-512',
        }}
        style={{ borderRadius: 0 }}
      />
      {/* <Card.Title title={restaurant.name} subtitle={restaurant.cuisine} /> */}
      {/* </Card> */}
      <Card.Content style={{ marginTop: 8 }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* <Text variant="bodyMedium" style={{ fontWeight: 'bold' }}> */}
          <Chip
            icon={() => <Icon source="sale" size={20} color="#38c671" />}
            textStyle={{ color: '#38c671' }} // Custom text color
            style={{ backgroundColor: '#f6f6f6' }}
            // style={{ : '#38c671' }}
            // onPress={() => console.log('Pressed')}
          >
            10% OFF
          </Chip>
          {/* </Text> */}

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Icon source={'star'} color="#fcaf23" size={20} />
            <Text
              variant="bodyMedium"
              style={{ fontWeight: 'bold', marginLeft: 8 }}
            >
              {restaurant.rating} (365 reviews)
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>
            {restaurant.name}
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 8,
            }}
          >
            <Icon source={'room-service'} color="#5b4cbd" size={20} />
            <Text variant="bodyMedium" style={{ marginLeft: 8 }}>
              {restaurant.cuisine}
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Icon source={'wallet'} color="#5b4cbd" size={20} />
            <Text variant="bodyMedium" style={{ marginLeft: 8 }}>
              {restaurant.price_level}
            </Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
          }}
        >
          <Icon source={'map-marker'} color="#5b4cbd" size={20} />
          <Text variant="bodyMedium" style={{ marginLeft: 8 }}>
            {restaurant.address}
          </Text>
        </View>
      </Card.Content>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default NewsDetailsPage;
