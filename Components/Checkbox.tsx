import { Pressable } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


interface CheckboxProps {
    isChecked: boolean,
    isPress?: () => void
}

const Checkbox = (props: CheckboxProps) => {

    const { isChecked, isPress } = props;

    const name = isChecked ? 'checkbox-marked-outline' : 'checkbox-blank-outline'

    return (
        <Pressable onPress={isPress} >
            <Icon name={name} size={20} color={'black'} />
        </Pressable>
    )
}

export default Checkbox