import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem.js';
import axios from 'axios';
import Constants from 'expo-constants';

const URL = `http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default HomeScreen = ({ navigation }) => {
  // hookの導入=>stateを持つことができる
  // 初期値はから
  const [articles, setArticles] = useState([]);

  // useEffectの導入
  // マウントされた時に実行される
  useEffect(
    () => {
      // alert(Constants.manifest.extra.newsApiKey);
      fetchArticles();
      // return clearTimeout(timer);<=ここに入っていた・・・
    },
    // 第二引数にから配列を渡すと、マウントじに実行される。
    []
  );

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
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
