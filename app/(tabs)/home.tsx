import {
  View,
  // Text,
  VirtualizedList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import { Avatar, Card, Text, IconButton } from 'react-native-paper';
type ItemData = {
  id: string;
  title: string;
};

const getItem = (_data: unknown, index: number): ItemData => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = (_data: unknown) => 50;

type ItemProps = {
  title: string;
};

const Item = ({ title }: ItemProps) => (
  <Card style={{ marginVertical: 8, marginHorizontal: 16 }}>
    <Card.Cover
      source={
        {
          // uri: 'https://ca.slack-edge.com/T03PS2TL8KF-U063J2H43CN-33dd6ce375c3-512',
        }
      }
    />
    <Card.Title
      title="Card Title"
      subtitle="Card Subtitle"
      left={(props) => <Avatar.Icon {...props} icon="folder" />}
      right={(props) => (
        <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
      )}
    />
    <Card.Content>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
  </Card>
);

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text>HomePage</Text> */}
        {/* <Card> */}
        <Card.Cover
          style={{ width: '100%', borderRadius: 0 }}
          source={
            {
              // uri: 'https://ca.slack-edge.com/T03PS2TL8KF-U063J2H43CN-33dd6ce375c3-512',
            }
          }
        />
        {/* </Card> */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          {/* <Text>Special Offers</Text>
          <Text>see more</Text> */}
        </View>

        <VirtualizedList
          style={styles.container}
          initialNumToRender={4}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    width: '100%',
  },
  item: {
    backgroundColor: '#f9c2ff',
    // // height: 150,
    // justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    // padding: 20,
    // backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    // width: 350,
    // height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default HomePage;
