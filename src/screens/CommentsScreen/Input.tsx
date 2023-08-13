import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const Input = () => {
    const [newComment, setNewComment] = useState('');

    const onPost = () => {
        console.warn("Posting the comment: ", newComment);
        // implement sending the data to backend
        setNewComment('');
    } 

    return (
        <View style={styles.root}>
            <Image 
                source={{
                    uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg'
                }}
                style={styles.image}
            />
            <TextInput 
                placeholder='Write your comment...'
                style={styles.input}
                value={newComment}
                onChangeText={setNewComment}
                multiline
            />

            <Text 
                style={styles.button} 
                onPress={onPost}
            >
            POST
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        padding: 5,
        borderTopWidth: 1,
        borderColor: colors.border,
        alignItems: "flex-end"

    },
    image: {
        width: 40,
        aspectRatio: 1,
        borderRadius:  20,
    },
    input: {
        flex: 1,

        borderColor: colors.border,
        borderWidth: 1, 
        borderRadius: 25,


        paddingVertical: 5,
        paddingHorizontal: 10,
        paddingRight: 50,
        marginLeft: 5,
    },
    button: {
        position:'absolute',
        right: 15,
        bottom: 15,
        fontSize: fonts.size.small,
        fontWeight: fonts.weight.full,
        color: colors.primary,
    },

})
export default Input;