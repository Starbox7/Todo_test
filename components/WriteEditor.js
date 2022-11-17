import React from "react";
import { View, StyleSheet, TextInput, Text } from 'react-native';
// import { Icon } from "react-native-vector-icons/Icon";

function WriteEditor({ title, body, onChangeTitle, onChangeBody }) {
    return (
        <View style={{flex:1}}>
            <View style={styles.block}>
                <TextInput
                    placeholder="리마인더 제목"
                    style={styles.titleInput}
                    returnKeyType="next"
                    onChangeText={onChangeTitle}
                    value={title}
                />
                <TextInput
                    placeholder="리마인더 내용"
                    style={styles.bodyInput}
                    multiline   //multiline={true} 와 동일
                    textAlignVertical="top"
                    onChangeText={onChangeBody}
                    value={body}
                />
                <Text>리마인더 체크형 할일목록 구현 자리</Text>
                <Text>할일목록 활성화 버튼 자리(우측 끝)</Text>
            </View>
            <View>
                <Text>이곳은 리마인더 시간 설정이 들어갈 공간입니다.</Text>
            </View>
            <View>
                <Text>이곳은 리마인더 장소 설정이 들어갈 공간입니다.</Text>
            </View>
            <View>
                <Text>이곳은 리마인더 카테고리 설정이 들어갈 공간입니다.</Text>
            </View>
            <View>
                {/* <Icon></Icon> */}
                <Text>알림을 받지 않습니다.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    block: { 
        backgroundColor: "#ffffff",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        padding: 16,
        color: "white",
     },
    titleInput: {
        paddingVertical: 0,
        fontSize: 18,
        marginBottom: 16,
        color: "#263238",
        fontWeight: "bold",
    },
    bodyInput: {
        fontSize: 16,
        paddingVertical: 0,
        color: "#263238",
    },
});

export default WriteEditor;