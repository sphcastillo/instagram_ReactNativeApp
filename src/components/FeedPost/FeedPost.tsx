import { useState } from 'react';
import { View, Text, Image, Pressable } from "react-native"; 
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import styles from './styles';
import colors from "../../theme/colors";
import fonts from  '../../theme/fonts';
import Comment from '../Comment/Comment';
import { IPost } from '../../types/models';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel/Carousel';

interface IFeedPost {
  post: IPost
}

const FeedPost = (props: IFeedPost) => {
    const { post } = props;

    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const toggleDescriptionExpanded = () => {
      // change the value of our state z
      // update function 
      setIsDescriptionExpanded(existingValue => !existingValue); 
    };

    const toggleLike = () => {

      setIsLiked(existingValue => !existingValue);
    }

    let content;
    if(post.image){
      content = (
        <DoublePressable onDoublePress={toggleLike}>
          <Image 
            source={{
              uri: post.image,
            }}
            style={styles.image}
          />
        </DoublePressable>
      )


    } else if (post.images){
      content = <Carousel images={post.images} onDoublePress={toggleLike}/>;
    }


    return (
        <View style={styles.post}>
            {/* Header */}
            <View style={styles.header}>
                <Image 
                    source={{
                    uri: post.user.image,
                    }}
                    style={styles.userAvatar}
                />
                <Text style={styles.userName}>{post.user.username}</Text>
        
                <Entypo name="dots-three-horizontal" size={16} style={styles.threeDots}/>
            </View>
  
            {/* Content */}
              {content}

            {/* Footer */}
            <View style={styles.footer}>
                <View style={styles.iconContainer}>
                  <Pressable onPress={toggleLike}>
                    <AntDesign 
                      name={isLiked ? 'heart' : 'hearto'}
                      size={24}
                      style={styles.icon}
                      color={isLiked ? colors.accent : colors.black}
                    />
                  </Pressable>
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
            <Text style={styles.bold}>{post.nofLikes} others</Text>
          </Text>
  
          {/* Post description */}
          <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
            <Text style={styles.bold}>{post.user.username}</Text>{' '}
              {post.description}
          </Text>
          <Text 
            onPress={toggleDescriptionExpanded}
            style={styles.lightText}
          >{isDescriptionExpanded ? 'less' : 'more'}</Text>
  
          {/* Comments */}
          <Text style={styles.lightText}>View all {post.nofComments} comments</Text>
          {post.comments.map(comment => (
            <Comment key={comment.id} comment={comment}/>
          ))}

  
          {/* Posted date */}
          <Text style={styles.lightText}>{post.createdAt}</Text>

        </View>
      </View>
    )
}


export default FeedPost;