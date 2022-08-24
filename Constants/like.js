import {View, Text} from 'react-native';
import React, {useState} from 'react';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {addLike, removeLike, selectCount} from '../Slices/like';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from './index';
import {setData} from '../Slices/data';

const Like = ({itemData}) => {
  const {id, name, isLikable} = itemData;

  const [like, setLike] = useState(false);

  const count = useSelector(selectCount);

  const dispatch = useDispatch();

  const onLikeUpdate = () => {
    setLike(!like);
  };

  return (
    <RNBounceable onPress={() => onLikeUpdate()}>
      <Icon
        name={like === false ? 'ios-heart-outline' : 'ios-heart'}
        size={24}
        color={like === false ? theme.colors.black : 'red'}
      />
    </RNBounceable>
  );
};

export default Like;
