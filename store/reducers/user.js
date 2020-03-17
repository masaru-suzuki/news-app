// reducerは純粋な関数

// reducerの初期値を設定する必要がある
// 初期値としては何もクリップされていない状態
const initialState = {clips: []};
const reducer = (state=initialState, action) =>{
  // actionはaddClip, deleteClipどちらも含んでいる
  // actionのtypeごとに処理を分けて書く
  switch (action.type) {
    case 'ADD_CLIP':
      // 渡ってきたoldStateにクリックされたclipを追加して、stateを作る
      // オブジェクトを返す
      return{
        // 前回のステートを展開する→なぜ？
        ...state,
        // clipsの中身だけ変更
        // actionはaddClip
        clips: [...state.clips, action.clip]
      }
      break;

    case 'DELETE_CLIP':
      return{
        ...state,
        // state.clipは配列？
        clips: state.clips.filter(clip => clip.url !== action.clip),
      }

    default:
      return state;
  }
};

export default reducer;