import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { images } from "@assets";
import { Card } from "../Card";
import { styles } from "./styles";
import { data, color } from "@constants";

export const SwipeList = ({ onPressStar, deleteTodo, completeTodo }) => {

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
    const renderItem = data => {
        return (
            <Card
                todoItem={data}
                onPressStar={onPressStar}
            />
        )
    }
    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity style={{ ...styles.backLeftBtn, ...styles.backLeftBtnLeft }}
            // onPress={() => completeRow(rowMap, data)
            // }
            >

                <AntDesign name='check' size={wp(8)} color={color.blac100} />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
            // onPress={() => deleteRow(rowMap, data)}
            >
                <Feather name='trash' size={wp(8)} color={color.blac100} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <SwipeListView
                data={data.mostPopular}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={wp(18)}
                rightOpenValue={-wp(18)}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                // onRowDidOpen={onRowDidOpen}
                style={styles.listStyle}
                // ItemSeparatorComponent={itemSeparatorComponent}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={ListEmptyComponent}
            />
        </View>
    )
}

