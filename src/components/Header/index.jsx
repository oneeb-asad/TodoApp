import React, { useState } from "react"
import { View, Text, ScrollView } from "react-native"
import { styles } from "./styles"
import { TopTab } from "../TopTabs"

export const Header = () => {
    const [selectedTab, setSelectedTab] = useState("Today");
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
                        title={'Today'}
                        onPress={() => setSelectedTab('Today')}
                        selectedTab={selectedTab}
                    />
                    <TopTab
                        title={'Upcoming'}
                        onPress={() => setSelectedTab('Upcoming')}
                        selectedTab={selectedTab}
                    />
                    <TopTab
                        title={'All'}
                        onPress={() => setSelectedTab('All')}
                        selectedTab={selectedTab}
                    />
                </ScrollView>
            </View>
        </View>
    )
}

