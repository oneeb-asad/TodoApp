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
import { styles } from "./styles";

export const CreateTodo = ({ isVisible, onBackdropPress, submitTodo }) => {
    const dispatch = useDispatch();

    // State variables for todo input, description, date selection, and importance
    const [todo, setTodo] = useState('')
    const [description, setDescription] = useState('')
    const [importantTodo, setImportantTodo] = useState(false)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState({
        completeDate: new Date(),
        showDate: ('Today')
    });

    // Handle date selection from the date picker
    const handleDateConfirm = (date) => {
        setSelectedDate({
            completeDate: date,
            showDate: moment(date).format('DD MMM'),
        });
        setDatePickerVisibility(false);
    };

    // Handle adding a new task
    const handleAddTask = () => {
        if (todo.trim() === "") return;  // Prevent adding empty tasks

        // Format the selected date
        const formattedDate = moment(selectedDate.completeDate).format('DD MMM YY');

        // Dispatch the addTask action to add the task to Redux state
        dispatch(
            addTask({
                id: Date.now(),
                text: todo,
                description: description,
                important: importantTodo,
                date: formattedDate,
                completedDate: selectedDate.completeDate
            })
        );

        // Clear the todo input and close the modal
        setTodo("");
        onBackdropPress();
    };
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onBackdropPress}
            style={styles.flexEnd}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.avoidingViewContainer}>
                <View style={styles.writeTodoContainer}>
                    <View>
                        {/* Todo Input */}
                        <TextInput
                            placeholder='Todo'
                            placeholderTextColor={color.grey500}
                            value={todo}
                            onChangeText={(val) => {
                                if (val.length <= 20) {
                                    setTodo(val);
                                }
                            }}
                            style={styles.inputStyle}
                            autoFocus={isVisible}
                            maxLength={20}
                        />
                        {/* Description Input */}
                        <TextInput
                            placeholder='Description'
                            placeholderTextColor={color.grey500}
                            value={description}
                            onChangeText={(val) => setDescription(val)}
                            style={styles.inputStyle}
                            multiline={true}
                        />
                        <View style={styles.btnsRowContainer}>
                            {/* Date Selection Button */}
                            <SelectButton
                                title={selectedDate?.showDate}
                                onPress={() => setDatePickerVisibility(true)}
                                Icon={Feather}
                                iconName={'calendar'}
                            />
                            <View style={commonStyle.pl_3} />
                            <View style={commonStyle.pl_2} />
                            {/* Toggle Importance */}
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
                                {/* Save Button */}
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
            {/* Date Picker Modal */}
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={() => setDatePickerVisibility(false)}
                minimumDate={new Date()} // Prevent selecting past dates
            />
        </Modal>
    )
}

