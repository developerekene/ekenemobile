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
import { ArrowLeft, GraduationCap } from 'lucide-react-native';

const PRIMARY_ORANGE = "#E64A19";

const COURSES = [
    { id: 'c1', title: 'Advanced Systems Design', lessons: 14 },
    { id: 'c2', title: 'UX for Complex Networks', lessons: 8 },
    { id: 'c3', title: 'Fullstack Engineering', lessons: 22 },
    { id: 'c4', title: 'Distributed Intelligence', lessons: 17 },
];

const CoursesScreen: React.FC = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('homeScreen')}>
                    <ArrowLeft size={26} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Courses</Text>
                <View style={{ width: 26 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.heroSection}>
                    <Text style={styles.heroTitle}>Structured Learning</Text>
                    <Text style={styles.heroSub}>
                        Deep technical courses designed for scalable thinking.
                    </Text>
                </View>

                <View style={styles.grid}>
                    {COURSES.map((course) => (
                        <TouchableOpacity key={course.id} style={styles.courseCard}>
                            <View style={styles.iconBox}>
                                <GraduationCap color="#FFF" size={18} />
                            </View>
                            <Text style={styles.courseTitle}>{course.title}</Text>
                            <Text style={styles.courseSub}>{course.lessons} Lessons</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CoursesScreen;

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
    grid: {
        paddingHorizontal: 25,
    },
    courseCard: {
        backgroundColor: "#000",
        borderRadius: 22,
        padding: 25,
        marginBottom: 20,
    },
    iconBox: {
        width: 50,
        height: 50,
        borderRadius: 14,
        backgroundColor: PRIMARY_ORANGE,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    },
    courseTitle: { color: "#FFF", fontSize: 18, fontWeight: "900" },
    courseSub: { color: "#AAA", fontSize: 13, marginTop: 6 },
});