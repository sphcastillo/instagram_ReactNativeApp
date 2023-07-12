import React from 'react';
import { View, Text, Image } from "react-native"; 
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import styles from './styles';
import colors from "../../theme/colors";
import fonts from  '../../theme/fonts';

const FeedPost = () => {
    return (
        <View style={styles.post}>
            {/* Header */}
            <View style={styles.header}>
                <Image 
                    source={{
                    uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
                    }}
                    style={styles.userAvatar}
                />
                <Text style={styles.userName}>vadimnotjustdev</Text>
        
                <Entypo name="dots-three-horizontal" size={16} style={styles.threeDots}/>
            </View>
  
            {/* Content */}
            <Image source={{
            uri: 'https://www.traveloffpath.com/wp-content/uploads/2022/06/Aerial-shot-of-the-city-of-Vancouver-Canada.jpg'
            }}
            style={styles.image}
            />
  
            {/* Footer */}
            <View style={styles.footer}>
                <View style={styles.iconContainer}>
                <AntDesign 
                name={'hearto'}
                size={24}
                style={styles.icon}
                color={colors.black}
                />
                <Ionicons 
                name="chatbubble-outline" 
                size={24} 
                style={styles.icon}
                color={colors.black}
                />
                <Feather 
                name="send" 
                size={24} 
                style={styles.icon}
                color={colors.black}
                />
                <Feather 
                name="bookmark" 
                size={24} 
                style={{marginLeft: 'auto'}}
                color={colors.black}
                />
          </View>
  
          {/* Post description */}
          <Text style={styles.likedText}>
            Liked by{' '}
            <Text style={styles.bold}>jerimiah2405</Text> and{' '} 
            <Text style={styles.bold}>66 others</Text>
          </Text>
  
          {/* Post description */}
          <Text style={styles.text}>
            <Text style={{fontWeight: fonts.weight.bold}}>vadimnotjustdev</Text>{' '}
              Lorem ipsumit amet elit, sed do eiusmod tempor incididunt im veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure nulla pariatur.
          </Text>
  
          {/* Comments */}
          <Text style={styles.lightText}>View all 16 comments</Text>
          <View style={styles.comment}> 
            <Text style={styles.commentText}>
              <Text style={styles.bold}>rajhextone_3</Text>{' '}
                Adipiscing elit, sed do eiusmod nisi ut aliquip ex ea commodo consequat. Duis aute irure nulla pariatur.
            </Text>
            <AntDesign 
              name={'hearto'}
              size={14}
              style={styles.icon}
              color={colors.black}
            />
          </View>
  
          {/* Posted date */}
          <Text style={styles.lightText}>19 December, 2023</Text>

        </View>
      </View>
    )
}


export default FeedPost;