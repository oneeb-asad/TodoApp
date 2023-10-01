import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { commonStyle, color } from '@constants';
import { styles } from './styles';

export const Card = ({ item, index, onPressStar }) => {
    return (
        <TouchableOpacity style={styles.cardContainer} activeOpacity={1}>
            <View style={commonStyle.flex_1}>
                <View style={styles.row}>
                    <Text style={[styles.todoTitle,
                    {
                        textDecorationLine: item?.completed ? 'line-through' : 'none',
                        textDecorationColor: item?.completed ? color.grey400 : color.white50,
                        color: item?.completed ? color.grey400 : color.white50,
                    }
                    ]}>{item?.text}</Text>
                    <AntDesign
                        name={item?.important ? 'star' : 'staro'}
                        size={wp(8)}
                        color={item?.important ? color.primary50 : color.grey400}
                        onPress={onPressStar}
                    />
                </View>
                <View style={{ ...commonStyle.mt_1 }} />
                {item.description &&
                    <Text style={[styles.todoDescription,
                    {
                        textDecorationLine: item?.completed ? 'line-through' : 'none',
                        textDecorationColor: item?.completed ? color.grey400 : color.white50,
                        color: item?.completed ? color.grey400 : color.white50,
                    }
                    ]}>{item?.description}</Text>}

                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{item?.date}
                        {/* {!item?.time ? `at ${item?.time}` : null} */}
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}
