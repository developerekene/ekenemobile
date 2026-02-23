import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ArrowLeft,
    Calendar,
    Users,
    Clock,
    Video,
    MessageCircle,
    GraduationCap
} from 'lucide-react-native';

const { width } = Dimensions.get('window');
const PRIMARY_ORANGE = "#E64A19";

// --- Real Mentoring Data ---
const UPCOMING_SESSIONS = [
    { id: '1', topic: 'Scaling AI Systems', date: 'Oct 28', time: '6:00 PM', students: 32 },
    { id: '2', topic: 'System Architecture Deep Dive', date: 'Nov 02', time: '5:30 PM', students: 18 },
];

const PAST_SESSIONS = [
    { id: '3', topic: 'Breaking into Tech', duration: '1hr 20min', students: 45 },
    { id: '4', topic: 'React Native Mastery', duration: '2hr 05min', students: 27 },
];

const MENTORING_TRACKS = [
    { id: 't1', title: 'AI Engineering Path', sessions: 12 },
    { id: 't2', title: 'Fullstack Systems Track', sessions: 18 },
    { id: 't3', title: 'Product & UX Strategy', sessions: 9 },
];

const MentoringScreen: React.FC = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar barStyle="dark-content" />

            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('homeScreen')}>
                    <ArrowLeft size={26} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Mentoring</Text>
                <View style={{ width: 26 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* HERO */}
                <View style={styles.heroSection}>
                    <Text style={styles.heroTitle}>Build with Clarity.</Text>
                    <Text style={styles.heroSub}>
                        Join structured mentoring sessions focused on engineering depth,
                        systems thinking, and scalable innovation.
                    </Text>
                </View>

                {/* UPCOMING */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Upcoming Sessions</Text>
                </View>

                {UPCOMING_SESSIONS.map(session => (
                    <TouchableOpacity key={session.id} style={styles.upcomingCard}>
                        <View style={styles.liveBadge}>
                            <Text style={styles.liveText}>LIVE</Text>
                        </View>

                        <Text style={styles.sessionTitle}>{session.topic}</Text>

                        <View style={styles.row}>
                            <Calendar size={14} color="#777" />
                            <Text style={styles.metaText}>{session.date}</Text>

                            <Clock size={14} color="#777" style={{ marginLeft: 15 }} />
                            <Text style={styles.metaText}>{session.time}</Text>
                        </View>

                        <View style={[styles.row, { marginTop: 8 }]}>
                            <Users size={14} color="#777" />
                            <Text style={styles.metaText}>
                                {session.students} Joined
                            </Text>
                        </View>

                        <TouchableOpacity style={styles.joinBtn}>
                            <Video size={14} color="#FFF" />
                            <Text style={styles.joinText}>Join Session</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}

                {/* TRACKS */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Mentoring Tracks</Text>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 25 }}
                >
                    {MENTORING_TRACKS.map(track => (
                        <TouchableOpacity key={track.id} style={styles.trackCard}>
                            <View style={styles.trackIcon}>
                                <GraduationCap size={16} color="#FFF" />
                            </View>
                            <Text style={styles.trackTitle}>{track.title}</Text>
                            <Text style={styles.trackSub}>
                                {track.sessions} Sessions
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* PAST */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Past Sessions</Text>
                </View>

                <View style={{ paddingHorizontal: 25 }}>
                    {PAST_SESSIONS.map(session => (
                        <TouchableOpacity key={session.id} style={styles.pastCard}>
                            <View style={styles.playCircle}>
                                <Video size={16} color="#FFF" />
                            </View>

                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={styles.sessionTitle}>
                                    {session.topic}
                                </Text>
                                <Text style={styles.metaText}>
                                    {session.duration} • {session.students} Participants
                                </Text>
                            </View>

                            <MessageCircle size={20} color="#CCC" />
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default MentoringScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        height: 60
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: '900',
        letterSpacing: 1
    },

    heroSection: {
        paddingHorizontal: 25,
        paddingVertical: 20
    },

    heroTitle: {
        fontSize: 28,
        fontWeight: '900'
    },

    heroSub: {
        fontSize: 15,
        color: '#666',
        marginTop: 8,
        lineHeight: 22
    },

    sectionHeader: {
        paddingHorizontal: 25,
        marginTop: 30,
        marginBottom: 15
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: '800'
    },

    upcomingCard: {
        marginHorizontal: 25,
        backgroundColor: '#FFF',
        borderRadius: 18,
        padding: 20,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        marginBottom: 20
    },

    liveBadge: {
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: PRIMARY_ORANGE + '20',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6
    },

    liveText: {
        fontSize: 10,
        fontWeight: '900',
        color: PRIMARY_ORANGE
    },

    sessionTitle: {
        fontSize: 16,
        fontWeight: '800',
        marginBottom: 10
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    metaText: {
        fontSize: 12,
        color: '#777',
        marginLeft: 6
    },

    joinBtn: {
        marginTop: 15,
        backgroundColor: PRIMARY_ORANGE,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 10
    },

    joinText: {
        color: '#FFF',
        fontWeight: '800',
        marginLeft: 6
    },

    trackCard: {
        width: width * 0.65,
        backgroundColor: '#000',
        borderRadius: 20,
        padding: 20,
        marginRight: 15
    },

    trackIcon: {
        width: 45,
        height: 45,
        borderRadius: 12,
        backgroundColor: PRIMARY_ORANGE,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 35
    },

    trackTitle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '800'
    },

    trackSub: {
        color: '#888',
        fontSize: 12,
        marginTop: 4
    },

    pastCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        padding: 15,
        borderRadius: 15,
        marginBottom: 15
    },

    playCircle: {
        width: 40,
        height: 40,
        backgroundColor: PRIMARY_ORANGE,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});