import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from '@core-ui';
import { color, commonStyle } from '@constants';
import { deleteTask, toggleStar } from '@redux';
import { AddBtn, CreateTodo, Header, SwipeList } from '@components';

export const Home = () => {
    const todos = useSelector((state) => state?.tasks?.tasks);
    console.log(todos)
    const [selectedTab, setSelectedTab] = useState('All');
    const [showAddTodo, setShowAddTodo] = useState(false);
    const toggleCreateTodo = () => setShowAddTodo(!showAddTodo);

    const filteredTodos = todos.filter((todo) => {
        if (selectedTab === 'Important') {
            return todo.important;
        } else if (selectedTab === 'Completed') {
            return todo.completed;
        } else if (selectedTab === 'Incomplete') {
            return !todo.completed;
        }
        return true;
    });
    return (
        <SafeAreaView>
            <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <SwipeList swipeListData={filteredTodos} />
            <AddBtn onPress={toggleCreateTodo} />
            {showAddTodo &&
                <CreateTodo
                    isVisible={showAddTodo}
                    onBackdropPress={toggleCreateTodo}
                />
            }
        </SafeAreaView>
    )
}