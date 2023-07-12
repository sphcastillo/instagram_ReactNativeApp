import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../../theme/colors";
import fonts from  '../../theme/fonts';
import { IComment } from '../../types/models';

interface ICommentProps {
    comment: IComment;
}

const Comment = ({comment}: ICommentProps) => {
  return (
    <View style={styles.comment}> 
        <Text style={styles.commentText}>
            <Text style={styles.bold}>{comment.user.username}</Text>{' '}
            {comment.comment}
        </Text>
        <AntDesign 
        name={'hearto'}
        size={14}
        style={styles.icon}
        color={colors.black}
        />
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
        flex: 1
      },
      icon: {
        marginHorizontal: 5,
      },
})

export default Comment;

