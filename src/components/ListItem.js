import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// const ListItem = (props) => { これを下に変更すると、props.~という形を取らなくても良くなる。
// title = props.title => {title} = propsと表現できる
// props.titleは{title}と表現できる
const ListItem = ({ title, imageUrl, author, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        {!!imageUrl && (
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 100, height: 100 }}
          />
        )}
      </View>
      <View style={styles.RightContainer}>
        <Text style={styles.text} numberOfLines={3}>
          {title}
        </Text>
        <Text style={styles.subtext}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  RightContainer: {
    // flex: 1で左側にはみ出さない
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 14,
  },
  subtext: {
    fontSize: 12,
    color: 'gray',
  },
});

export default ListItem;
