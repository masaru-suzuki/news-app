import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import {useSelector} from 'react-redux';
import ListItem from '../components/ListItem.js';



export default ClipScreen = ({navigation}) => {
  const user = useSelector(state => state.user);
  const {clips} = user;
  console.log({clips});
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={clips}
      // dataは配列型
      // renderItemに渡しているitemは配列として取得したdataになる。
      renderItem={({ item }) => {
        return (
          <ListItem
            author={item.author}
            title={item.title}
            imageUrl={item.urlToImage}
            // onPress={navigation.navigate('Article')}これだと動作しない。最初に読み込まれる・・・？
            onPress={() =>
              // 第二引数に渡すものを配置する
              navigation.navigate('Article', { article: item })
            }
          />
        );
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
