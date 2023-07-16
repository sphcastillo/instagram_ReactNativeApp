import {View, Image, FlatList, useWindowDimensions} from 'react-native';

interface ICarousel {
    images: string[],
}

const Carousel = ({images}: ICarousel) => {
  const { width } = useWindowDimensions();

  return (
    <View>
        <FlatList 
            data={images}
            renderItem={({item}) => (
                <Image 
                  source={{uri: item}} 
                  style={{width: width, aspectRatio: 1}}
                />
            )}
            horizontal
        />
    </View>
  )
}

export default Carousel;