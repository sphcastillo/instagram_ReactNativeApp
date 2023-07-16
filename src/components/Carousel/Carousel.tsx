import { View, Image, FlatList, useWindowDimensions, ViewabilityConfig, ViewToken } from 'react-native';
import DoublePressable from "../DoublePressable";
import { useState, useRef } from 'react';
import colors from '../../theme/colors';

interface ICarousel {
    images: string[];
    onDoublePress?: () => void
}

const Carousel = ({images, onDoublePress = () => {}}: ICarousel) => {
  const { width } = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  
  const onViewableItemsChanged = useRef(({viewableItems} : {viewableItems: Array<ViewToken>}) => {
    if(viewableItems.length > 0){
      setActiveImageIndex(viewableItems[0].index || 0);
    }
  });

  return (
    <View>
        <FlatList 
            data={images}
            renderItem={({item}) => (
                <DoublePressable onDoublePress={onDoublePress}>
                  <Image 
                    source={{uri: item}} 
                    style={{width: width, aspectRatio: 1}}
                  />
                </DoublePressable>
            )}
            horizontal
            pagingEnabled
            onViewableItemsChanged={onViewableItemsChanged.current}
            viewabilityConfig={viewabilityConfig}
        />
        <View 
          style={{
            flexDirection: "row", 
            justifyContent: 'center',
            position: "absolute",
            width: '100%',
            bottom: 0
            }}
          >
          {images.map((_, index) => (
          <View 
            key={index}
            style={{
              width: 10, 
              aspectRatio: 1, 
              backgroundColor: activeImageIndex === index ? colors.primary : colors.white,
              borderRadius: 5,
              margin: 10,
              marginHorizontal: 5
            }}
          />            
          ))}
        </View>
    </View>
  )
}

export default Carousel;