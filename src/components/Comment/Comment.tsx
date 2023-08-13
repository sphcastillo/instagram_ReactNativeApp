import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../../theme/colors";
import fonts from  '../../theme/fonts';
import { IComment } from '../../types/models';


interface ICommentProps {
    comment: IComment;
    includeDetails: boolean;
}

const Comment = ({comment, includeDetails = false}: ICommentProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(v => !v);
  }
  return (
    <View style={styles.comment}> 
      {includeDetails && (
        <Image source={{ uri: comment.user.image }} style={styles.avatar}/>
      )}
        <View style={styles.middleColumn}>
          <Text style={styles.commentText}>
              <Text style={styles.bold}>{comment.user.username}</Text>{' '}
              {comment.comment}
          </Text>
        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
        </View>

        <Pressable onPress={toggleLike}  hitSlop={5}>
          <AntDesign 
          name={isLiked ? 'heart' : 'hearto'}
          size={14}
          style={styles.icon}
          color={isLiked ? colors.accent : colors.black}
          />
        </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
    bold: {
        fontWeight: fonts.weight.bold,
      },
      comment: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      commentText: {
        color: colors.black,
        marginVertical: 5
      },
      icon: {
        marginHorizontal: 5,
      },
      avatar: {
        width: 38,
        aspectRatio: 1,
        borderRadius: 25,
        marginRight: 8,
      },
      middleColumn: {
        flex: 1,
      },
      footer: {
        flexDirection: "row",
        marginBottom: 10,
      },
      footerText: {
        marginHorizontal: 10,
      },
})

export default Comment;

