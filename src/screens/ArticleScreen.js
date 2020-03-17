import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { addClip, deleteClip } from '../../store/actions/user';
import ClipButton from '../components/ClipButton';

// routeというpropsが機能
export default ArticleScreen = ({ route }) => {
  // routeで渡ってきたパラメーターからarticleを呼び出す
  const { article } = route.params;
  // reduxとTouchableOpacityをつなげる?
  const dispatch = useDispatch();

  //  addClipが押されたかどうかの判定のため、reduxからstateを持ってくる
  const user = useSelector(state => state.user);
  const {clips} = user;

  // clipされたかの判定
  const isClipped = () => {
    return clips.some(clip => clip.url === article.url);
  };

  const toggleClip = () => {
    if (isClipped()) {
      dispatch(deleteClip({ clip: article }));
    } else {
      dispatch(addClip({clip: article}));
    }
  };

  console.log(isClipped());
  console.log(() =>toggleClip());

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
      <WebView source={{ uri: article.url }} />
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
