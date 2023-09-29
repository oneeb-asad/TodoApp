import React from 'react'
import { Text, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { commonStyle, color } from '@constants';
import { styles } from './styles';

export const Card = ({ todoItem, onPressStar }) => {
    const { index, item } = todoItem
    return (
        <View style={styles.cardContainer}>
            <View style={commonStyle.flex_1}>
                <Text style={[styles.todoTitle,
                {
                    textDecorationLine: item?.completeTodo ? 'line-through' : 'none',
                    textDecorationColor: item?.completeTodo ? color.grey400 : color.white50,
                    color: item?.completeTodo ? color.grey400 : color.white50,
                }
                ]}>{item?.itemName}</Text>
                {/* <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{item?.todoDate?.showDate} {item?.todoTime?.showTime && ' at ' + item?.todoTime?.showTime}</Text>
                </View> */}
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>12:00</Text>
                </View>
            </View>
            <AntDesign
                name={item?.todoImp ? 'star' : 'staro'}
                size={wp(8)}
                color={item?.todoImp ? color.primary50 : color.grey400}
            // onPress={() => onPressStar({
            //     index,
            //     item
            // })}
            />
        </View>
    )
}
