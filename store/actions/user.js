// Actionを作る
// ActionにはTypeとPayloadが必要になる→そこを定義していく
// クリップボタンを押したら{clip}を渡す
// {clip}って何？
export const addClip = ({ clip }) => {
  // const {clip} = params;
  // const clip = params.clip;
  //{ type: 'ADD_CLIP', clip: article }
  // オブジェクトを返す
  return {
    // typeはストリングで
    type: 'ADD_CLIP',
    // Payload
    // clip:clip
    clip,
  };
};

export const deleteClip = ({ clip }) => {
  return {
    type: 'DELETE_CLIP',
    clip,
  };
};
