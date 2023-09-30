import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from '@core-ui';
import { color, commonStyle } from '@constants';
import { AddBtn, CreateTodo, Header, SwipeList } from '@components';

export const Home = () => {
    const [showAddTodo, setShowAddTodo] = useState(false);
    const toggleCreateTodo = () => setShowAddTodo(!showAddTodo);
    return (
        <SafeAreaView>
            <Header />
            <SwipeList />
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

const styles = StyleSheet.create({
    itemSeparator: {
        height: 1,
        backgroundColor: color.grey200,
        ...commonStyle.mv_2
    },

})