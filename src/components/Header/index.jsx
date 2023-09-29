import React, { useState } from "react"
import { View, Text, ScrollView } from "react-native"
import { styles } from "./styles"
import { TopTab } from "../TopTabs"

export const Header = () => {
    const [selectedTab, setSelectedTab] = useState("All");
    return (
        <View style={styles.main}>
            <Text style={styles.heading}>My {'\n'}Todos</Text>
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

