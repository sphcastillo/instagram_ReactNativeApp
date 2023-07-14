import { Pressable } from 'react-native';
import { ReactNode } from 'react';

interface IDoublePressable {
    // when nothing is returned, return type is VOID
    // this is option =<>  ?
    onDoublePress?: () => void;
    children: ReactNode;
}

// function when nothing is sent => any empty function
const DoublePressable = ({onDoublePress = () => {}, children}: IDoublePressable) => {

    let lastTap  = 0;

    const handleDoublePress = () => {
      // timestamp (number of seconds)
      const now = Date.now();
      if(now - lastTap < 300){ // milliseconds
        onDoublePress();
      }

      lastTap = now;
    };
    return (
        <Pressable onPress={handleDoublePress}>
            {children}
        </Pressable>
    )
}

export default DoublePressable;