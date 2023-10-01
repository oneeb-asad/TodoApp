import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from '@core-ui';
import { color, commonStyle } from '@constants';
import { deleteTask, toggleStar } from '@redux';
import { AddBtn, CreateTodo, Header, SwipeList } from '@components';

export const Home = () => {
    // Get the list of todos from Redux store
    const todos = useSelector((state) => state?.tasks?.tasks);

    // State variables for filtering and showing the CreateTodo component
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [selectedTab, setSelectedTab] = useState('All');
    const [showAddTodo, setShowAddTodo] = useState(false);

    // Function to toggle the CreateTodo modal
    const toggleCreateTodo = () => setShowAddTodo(!showAddTodo);

    // Sorting List through date
    const sortDataHandler = () => {
        const copyArray = [...filteredTodos]
        const sorted = copyArray.sort(
            (a, b) => new Date(a.completedDate) - new Date(b.completedDate)
        );
        setFilteredTodos(sorted);
    }

    // useEffect to filter tasks based on the selected tab
    useEffect(() => {
        const filteredTabData = todos.filter((todo) => {
            if (selectedTab === 'Important') {
                return todo.important;
            } else if (selectedTab === 'Completed') {
                return todo.completed;
            } else if (selectedTab === 'Incomplete') {
                return !todo.completed;
            }
            return true;
        });
        setFilteredTodos(filteredTabData);
    }, [selectedTab, todos])

    return (
        <SafeAreaView>
            <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} onSortByDueDate={sortDataHandler} />
            <SwipeList swipeListData={filteredTodos} />
            {showAddTodo &&
                <CreateTodo
                    isVisible={showAddTodo}
                    onBackdropPress={toggleCreateTodo}
                />
            }
            <AddBtn onPress={toggleCreateTodo} />
        </SafeAreaView>
    )
}