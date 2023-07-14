import { StyleSheet } from 'react-native';
import colors from "../../theme/colors";
import fonts from  '../../theme/fonts';

export default StyleSheet.create({
    post: {},
    image: {
      width: '100%',
      aspectRatio: 1,
      resizeMode: 'cover'
    },
    header: {
      flexDirection: 'row',
      // padding: 10,
      paddingBottom: 10,
      paddingTop: 10,
      paddingRight: 10,
      paddingLeft: 5,
      alignItems: 'center'
    },
    userAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10
    },
    userName: {
      fontWeight: fonts.weight.bold,
      color: colors.black
    },
    threeDots: {
      marginLeft: 'auto'
    },
    footer: {
      padding: 10
    },
    iconContainer: {
      flexDirection: 'row',
      marginBottom: 5
    },
    icon: {
      marginHorizontal: 5,
    },
    likedText: {
        color: colors.black,
        lineHeight: 18,
        paddingTop: 3,
        paddingBottom: 5
    },
    text: {
      color: colors.black,
      lineHeight: 17
    },
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
    lightText: {
      paddingTop: 5,
      paddingBottom: 3,
      color: colors.gray
    }
  })