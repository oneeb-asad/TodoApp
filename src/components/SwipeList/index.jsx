import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, completeTask, toggleStar } from "@redux";
import { images } from "@assets";
import { data, color, routes } from "@constants";
import { Card } from "../Card";
import { styles } from "./styles";


export const SwipeList = ({ swipeListData, onPressStar, deleteTodo, completeTodo, onPress }) => {

    // For updating redux state
    const dispatch = useDispatch();

    //Data Coming From Redux
    const todos = useSelector((state) => state?.tasks?.tasks);
    // console.log(todos)

    //List Empty Components
    const ListEmptyComponent = () => {
        return (
            <View style={styles.emptyComponentContainer}>
                <View>
                    <Image style={styles.image} source={images.list} resizeMode='cover' />
                </View>
                <Text style={styles.emptylistText1}>You're all caught up</Text>
                <Text style={styles.emptylistText2}>Tap the + button to add a todo and keep track of your day</Text>
            </View>
        )
    }
    //Render Items
    const renderItem = ({ item, index }) => {
        return (
            <Card
                item={item}
                index={index}
                onPressStar={() => handleToggleStar(item.id)}
            />
        )
    }
    //SwipeList renderHidden Function
    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity style={{ ...styles.backLeftBtn, ...styles.backLeftBtnLeft }}
                onPress={() => handleCompleteTodo(data.item.id)}
            >
                <AntDesign name='check' size={wp(8)} color={color.blac100} />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => handleDeleteTodo(data.item.id)}
            >
                <Feather name='trash' size={wp(8)} color={color.blac100} />
            </TouchableOpacity>
        </View>
    );

    //Function For Completion Task
    const handleCompleteTodo = (taskId) => {
        dispatch(completeTask(taskId));
    };

    //Function For Deleting Task
    const handleDeleteTodo = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleToggleStar = (taskId) => {
        dispatch(toggleStar(taskId));
    };

    return (
        <View style={styles.container}>
            <SwipeListView
                data={swipeListData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={wp(18)}
                rightOpenValue={-wp(18)}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                style={styles.listStyle}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={ListEmptyComponent}
            />
        </View>
    )
}