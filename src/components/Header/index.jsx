import React from "react"
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native"
import { styles } from "./styles"
import { TopTab } from "../TopTabs"
import { images } from "@assets"

export const Header = ({ selectedTab, setSelectedTab, onSortByDueDate }) => {
    return (
        <View style={styles.main}>
            <View style={styles.row}>
                <Text style={styles.heading}>My Todos</Text>
                <TouchableOpacity onPress={onSortByDueDate}>
                    <Image source={images.sort} style={styles.image} />
                </TouchableOpacity>
            </View>
            <View>
                <ScrollView
                    horizontal
                    contentContainerStyle={styles.contentContainerStyle}
                    showsHorizontalScrollIndicator={false}
                >
                    <TopTab
                        title={'Important'}
                        onPress={() => setSelectedTab('Important')}
                        selectedTab={selectedTab}
                        showImage={true}
                    />
                    <TopTab
                        title={'All'}
                        onPress={() => setSelectedTab('All')}
                        selectedTab={selectedTab}
                    />
                    <TopTab
                        title={'Completed'}
                        onPress={() => setSelectedTab('Completed')}
                        selectedTab={selectedTab}
                    />
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

