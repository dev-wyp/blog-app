import { ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Card,
  Icon,
  MD2Colors,
  Text,
} from 'react-native-paper';
import axios from 'axios';

interface Restaurants {
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

const ListPage = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          'https://api.mockfly.dev/mocks/31e7c23a-5ac2-4bc5-bf07-9537cb4730d3/restaurants'
        );
        setRestaurants(response.data.restaurants);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
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
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
      {restaurants.map((item) => (
        <Link href={`/list/${item.id}`} key={item.id} style={{ margin: 15 }}>
          <Card style={{ width: '100%', overflow: 'hidden' }}>
            <Card.Cover
              source={{
                uri: `${item.images?.thumbnail}`,
                // uri: 'https://ca.slack-edge.com/T03PS2TL8KF-U063J2H43CN-33dd6ce375c3-512',
              }}
              style={{ borderRadius: 0 }}
            />
            <Card.Content style={{ marginTop: 8 }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>
                  {item.name}
                </Text>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Icon source={'star'} color="gold" size={20} />
                  <Text
                    variant="titleMedium"
                    style={{ fontWeight: 'bold', marginLeft: 8 }}
                  >
                    {item.rating}
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
                    {item.cuisine}
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
                    {item.price_level}
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
                  {item.address}
                </Text>
              </View>
            </Card.Content>
          </Card>
        </Link>
      ))}
    </ScrollView>
  );
};

export default ListPage;
