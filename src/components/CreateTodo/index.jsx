import React, { useState, useRef, useEffect } from "react"
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch } from "react-redux";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';
import { addTask } from "@redux";
import { commonStyle, color } from "@constants";
import { family } from "@assets";
import { SelectButton } from "../SelectButton";
import { SaveButton } from "../SaveButton";

export const CreateTodo = ({ isVisible, onBackdropPress, submitTodo }) => {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const [todo, setTodo] = useState('')
    const [importantTodo, setImportantTodo] = useState(false)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState({
        completeDate: new Date(),
        showDate: ('Today')
    });
    const [selectedTime, setSelectedTime] = useState({
        completeTime: '',
        showTime: ''
    });

    const handleDateConfirm = (date) => {
        setSelectedDate({
            completeDate: date,
            showDate: moment(date).format('DD MMM'),
        });
        setDatePickerVisibility(false);
    };
    const handleTimeConfirm = (time) => {
        setSelectedTime({
            completeTime: time,
            showTime: moment(time).format('h:mm A'),
        });
        setTimePickerVisibility(false);
    };
    const handleAddTask = () => {
        if (todo.trim() === "") return;
        const formattedDate = moment(selectedDate.completeDate).format('DD MMM YY');
        const formattedTime = moment(selectedTime.completeTime).format('HH:mm');
        dispatch(
            addTask({
                id: Date.now(),
                text: todo,
                important: importantTodo,
                date: formattedDate,
                time: formattedTime,
            })
        );
        setTodo("");
        onBackdropPress();
    };
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onBackdropPress}
            style={{ justifyContent: 'flex-end' }}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.avoidingViewContainer}>

                <View style={styles.writeTodoContainer}>
                    <View>
                        <TextInput
                            placeholder='Write your Todo'
                            placeholderTextColor={color.grey500}
                            value={todo}
                            onChangeText={(val) => setTodo(val)}
                            style={styles.inputStyle}
                            multiline={true}
                            ref={inputRef}
                            autoFocus={isVisible}
                        />
                        <View style={styles.btnsRowContainer}>
                            <SelectButton
                                title={selectedDate?.showDate}
                                onPress={() => setDatePickerVisibility(true)}
                                Icon={Feather}
                                iconName={'calendar'}
                            />
                            <View style={commonStyle.pl_3} />
                            <SelectButton
                                title={selectedTime?.showTime}
                                onPress={() => setTimePickerVisibility(true)}
                                Icon={AntDesign}
                                iconName={'clockcircleo'}
                            />
                            <View style={commonStyle.pl_2} />
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => setImportantTodo(!importantTodo)}>
                                <AntDesign
                                    name={importantTodo ? 'star' : 'staro'}
                                    color={importantTodo ? color.primary50 : color.white50}
                                    size={wp(5)}
                                />
                            </TouchableOpacity>
                            <View style={styles.saveBtnContainer}>
                                <SaveButton
                                    title={'Save'}
                                    onPress={() => handleAddTask()}
                                    disabled={!todo}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={() => setDatePickerVisibility(false)}
                minimumDate={new Date()}
            />
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={() => setTimePickerVisibility(false)}
            />
        </Modal>
    )
}
const styles = StyleSheet.create({
    writeTodoContainer: {
        backgroundColor: color.grey200,
        ...commonStyle.pb_2,
        ...commonStyle.ph_2
    },
    inputStyle: {
        color: color.white50,
        ...commonStyle.f_5,
        lineHeight: 30,
        fontFamily: family.Medium,
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: Platform.OS === 'ios' ? hp(20) : hp(18),
    },
    btnsRowContainer: {
        ...commonStyle.rowStyle,
        ...commonStyle.pt_1,
        width: '100%',
    },
    saveBtnContainer: {
        flex: 1,
        alignSelf: 'baseline',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
})
