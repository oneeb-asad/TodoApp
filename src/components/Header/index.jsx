import React from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { TopTab } from "../TopTabs"
import { images } from "@assets"

export const Header = ({ selectedTab, setSelectedTab, onSortByDueDate }) => {
    return (
        <View style={styles.main}>
            {/* Header Title */}
            <View style={styles.row}>
                <Text style={styles.heading}>My Todos</Text>
                {/* Button to Sort Todos By Due Date */}
                <TouchableOpacity onPress={onSortByDueDate}>
                    <Text style={styles.subHeading}>Sort By Date</Text>
                </TouchableOpacity>
            </View>
            {/* Tab Navigation */}
            <View>
                <ScrollView
                    horizontal
                    contentContainerStyle={styles.contentContainerStyle}
                    showsHorizontalScrollIndicator={false}
                >
                    {/* Tab for Important Todos */}
                    <TopTab
                        title={'Important'}
                        onPress={() => setSelectedTab('Important')}
                        selectedTab={selectedTab}
                        showImage={true}
                    />
                    {/* Tab for All Todos */}
                    <TopTab
                        title={'All'}
                        onPress={() => setSelectedTab('All')}
                        selectedTab={selectedTab}
                    />
                    {/* Tab for Completed Todos */}
                    <TopTab
                        title={'Completed'}
                        onPress={() => setSelectedTab('Completed')}
                        selectedTab={selectedTab}
                    />
                    {/* Tab for Incomplete Todos */}
                    <TopTab
                        title={'Incomplete'}
                        onPress={() => setSelectedTab('Incomplete')}
                        selectedTab={selectedTab}
                    />
                </ScrollView>
            </View>
        </View>
    )
}

