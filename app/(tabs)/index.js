import { Button, Pressable, Text, View } from 'react-native';

import { Link, router } from 'expo-router';

export default function HomePage() {
  return (
    <View>
      <Text>Home Page</Text>
      <Link href="/users/1">Go to user 1</Link>
      <Pressable
        onPress={() =>
          router.push({
            pathname: '/users/[id]',
            params: { id: 2 }
          })
        }
      >
        <Text>Go to user 2</Text>
      </Pressable>
      <Text>Tweets</Text>
      <Button title="View Tweet" onPress={() => router.navigate('Tweet')} />
    </View>
  );
}
