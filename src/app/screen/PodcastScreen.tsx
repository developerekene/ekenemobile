import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Play, Mic } from 'lucide-react-native';

const PRIMARY_ORANGE = "#E64A19";

const PODCASTS = [
    { id: 'p1', title: 'The Future of Neural Link', duration: '24 mins', series: 'Tech Talk' },
    { id: 'p2', title: 'Building Nerve Systems', duration: '18 mins', series: 'Architecture' },
    { id: 'p3', title: 'Cognitive Interfaces', duration: '32 mins', series: 'AI Systems' },
    { id: 'p4', title: 'Human-Machine Thinking', duration: '27 mins', series: 'Philosophy & Tech' },
];

const PodcastScreen: React.FC = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('homeScreen')}>
                    <ArrowLeft size={26} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Podcast</Text>
                <View style={{ width: 26 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.heroSection}>
                    <Text style={styles.heroTitle}>Voice & Vision</Text>
                    <Text style={styles.heroSub}>
                        Conversations on systems, intelligence, and future technology.
                    </Text>
                </View>

                <View style={styles.listContainer}>
                    {PODCASTS.map((pod) => (
                        <TouchableOpacity key={pod.id} style={styles.podcastCard}>
                            <View style={styles.iconBox}>
                                <Play color="#FFF" size={18} />
                            </View>

                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={styles.title}>{pod.title}</Text>
                                <Text style={styles.sub}>
                                    {pod.duration} • {pod.series}
                                </Text>
                            </View>

                            <Mic color="#BBB" size={22} />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PodcastScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FFF" },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        height: 60,
    },
    headerTitle: { fontSize: 18, fontWeight: "900" },
    heroSection: { paddingHorizontal: 25, paddingVertical: 25 },
    heroTitle: { fontSize: 30, fontWeight: "900" },
    heroSub: { fontSize: 15, color: "#666", marginTop: 8, lineHeight: 22 },
    listContainer: { paddingHorizontal: 25 },
    podcastCard: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "#FAFAFA",
        padding: 15,
        borderRadius: 18,
    },
    iconBox: {
        width: 45,
        height: 45,
        borderRadius: 22,
        backgroundColor: PRIMARY_ORANGE,
        justifyContent: "center",
        alignItems: "center",
    },
    title: { fontSize: 16, fontWeight: "800" },
    sub: { fontSize: 13, color: "#888", marginTop: 4 },
});