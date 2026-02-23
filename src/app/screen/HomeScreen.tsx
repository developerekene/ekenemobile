import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Image,
    StatusBar,
    Animated,
    Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Menu,
    BookOpen,
    Mic,
    GraduationCap,
    Briefcase,
    ArrowRight,
    Play,
    X,
    User,
    Settings,
    Mail
} from 'lucide-react-native';

const { width, height } = Dimensions.get('window');
const PRIMARY_ORANGE = "#E64A19";

// --- Real Data Objects ---
const MENTORING_SESSIONS = [
    { id: 'm1', topic: 'Career in AI', date: 'Oct 12', students: 45 },
    { id: 'm2', topic: 'System Design', date: 'Oct 15', students: 12 },
    { id: 'm3', topic: 'React Native 101', date: 'Oct 20', students: 30 },
];

const BOOKS = [
    {
        id: 'b1',
        title: '9 Laws of an Entrepreneur',
        category: 'Business',
        cover: 'https://scontent.flhr13-1.fna.fbcdn.net/v/t1.6435-9/127489260_3770687716286613_5920261520518974507_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=U2pJsJB0ZYAQ7kNvwHxVwOe&_nc_oc=AdlwQa0VMQEqg2PUQxINuCzqt1UgNBsXMihWlbWGyx67Cpof41WCjzxVoOK-izjwYWA&_nc_zt=23&_nc_ht=scontent.flhr13-1.fna&_nc_gid=wC7DmWvpQXv0HRPSMoAfMQ&oh=00_AftWsfI0PFBg1LujL6mypPW43BkYEF3pmAF_QsdRh8GfyQ&oe=69C40C87'
    },
    {
        id: 'b2',
        title: 'Beginner’s Guide to HTML and CSS',
        category: 'Web Development',
        cover: 'https://ebooks.digitalpathsala.com/wp-content/uploads/2025/07/HTML-CSS-Handwritten-Notes-260x325.webp'
    },
    {
        id: 'b3',
        title: 'Laws of JavaScript',
        category: 'Programming',
        cover: 'https://images.manning.com/320/400/resize/book/5/c5bd123-f4fd-4a03-9069-9309c782ea7e/Atencio_hires_Fc.png'
    },
    {
        id: 'b4',
        title: 'React JS Shinobi',
        category: 'Frontend Development',
        cover: 'https://cdn.thegamesdb.net/images/original/boxart/front/39654-1.jpg'
    },
];

const PODCASTS = [
    { id: 'p1', title: 'The Future of Neural Link', duration: '24 mins', series: 'Tech Talk' },
    { id: 'p2', title: 'Building Nerve Systems', duration: '18 mins', series: 'Architecture' },
];

const COURSES = [
    { id: 'c1', title: 'Advanced Systems Design', lessons: 14 },
    { id: 'c2', title: 'UX for Complex Networks', lessons: 8 },
    { id: 'c3', title: 'Fullstack Engineering', lessons: 22 },
];

const HomeScreen: React.FC = ({ navigation }: any) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const slideAnim = useRef(new Animated.Value(width)).current;

    const toggleMenu = (open: boolean) => {
        setIsMenuOpen(open);
        Animated.timing(slideAnim, {
            toValue: open ? width * 0.2 : width, // Slide to cover 80% of screen
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const SectionHeader = ({ title }: { title: string }) => (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <TouchableOpacity style={styles.seeAllBtn}>
                <Text style={styles.seeAllText}>See All</Text>
                <ArrowRight color={PRIMARY_ORANGE} size={16} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={styles.container} edges={['top']}>
                <StatusBar barStyle="dark-content" />

                <View style={styles.header}>
                    <Text style={styles.headerName}>EKENEDILICHUKWU</Text>
                    <TouchableOpacity onPress={() => toggleMenu(true)}>
                        <Menu color="#000" size={28} />
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.greetingSection}>
                        <Text style={styles.greetingHello}>Welcome</Text>
                        <Text style={styles.greetingSub}>Step into my mobile portfolio. Explore my thoughts, voice, and craft.</Text>
                    </View>

                    {/* BOOKS */}
                    <SectionHeader title="Latest Books" />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
                        {BOOKS.map((book) => (
                            <TouchableOpacity key={book.id} style={styles.bookCard}>
                                <Image source={{ uri: book.cover }} style={styles.bookCover} />
                                <Text numberOfLines={1} style={styles.itemTitle}>{book.title}</Text>
                                <Text style={styles.itemSub}>{book.category}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    {/* MENTORING */}
                    <SectionHeader title="Mentoring" />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
                        {MENTORING_SESSIONS.map((session) => (
                            <TouchableOpacity key={session.id} style={styles.mentorCard}>
                                <View style={styles.mentorTag}>
                                    <Text style={styles.mentorTagText}>LIVE</Text>
                                </View>
                                <Text style={styles.mentorTopic}>{session.topic}</Text>
                                <View style={styles.mentorFooter}>
                                    <Text style={styles.mentorDate}>{session.date}</Text>
                                    <View style={styles.mentorDivider} />
                                    <Text style={styles.mentorStudents}>{session.students} Joined</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    {/* PODCASTS */}
                    <SectionHeader title="Recent Podcasts" />
                    <View style={styles.verticalContainer}>
                        {PODCASTS.map((pod) => (
                            <TouchableOpacity key={pod.id} style={styles.podcastCard}>
                                <View style={styles.podcastIconBox}>
                                    <Play color="#fff" size={16} />
                                </View>
                                <View style={styles.podcastInfo}>
                                    <Text style={styles.itemTitle}>{pod.title}</Text>
                                    <Text style={styles.itemSub}>{pod.duration} • {pod.series}</Text>
                                </View>
                                <Mic color="#CCC" size={24} />
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* COURSES */}
                    <SectionHeader title="Featured Courses" />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
                        {COURSES.map((course) => (
                            <TouchableOpacity key={course.id} style={styles.courseCard}>
                                <View style={styles.courseTop}>
                                    <GraduationCap color="#fff" size={16} />
                                </View>
                                <Text style={styles.courseTitle}>{course.title}</Text>
                                <Text style={styles.courseSub}>{course.lessons} Lessons</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    {/* EXPERIENCE */}
                    <SectionHeader title="Experience" />
                    <View style={styles.experienceCard}>
                        <View style={styles.expHeader}>
                            <Briefcase color={PRIMARY_ORANGE} size={16} />
                            <Text style={styles.expCompany}>D'roid Technologies</Text>
                        </View>
                        <Text style={styles.expRole}>Senior Software Engineer</Text>
                        <Text style={styles.expDesc}>
                            Leading the development of decentralized networks and cognitive systems for global scalability.
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>

            {/* SIDE MENU OVERLAY */}
            {isMenuOpen && (
                <Pressable style={styles.overlay} onPress={() => toggleMenu(false)} />
            )}

            {/* SIDE MENU CONTENT */}
            <Animated.View style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.sideMenuHeader}>
                        <TouchableOpacity onPress={() => toggleMenu(false)}>
                            <X color="#000" size={30} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuItemsContainer}>
                        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('aboutEkeneScreen')}>
                            <User color="#000" size={22} />
                            <Text style={styles.menuItemText}>About Ekene</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('bookScreen')}>
                            <BookOpen color="#000" size={22} />
                            <Text style={styles.menuItemText}>Books</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('mentoringScreen')}>
                            <GraduationCap color="#000" size={22} />
                            <Text style={styles.menuItemText}>Mentoring</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('podcastScreen')}>
                            <Mic color="#000" size={22} />
                            <Text style={styles.menuItemText}>Podcast</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('coursesScreen')}>
                            <Play color="#000" size={22} />
                            <Text style={styles.menuItemText}>Courses</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('settingsScreen')}>
                            <Settings color="#000" size={22} />
                            <Text style={styles.menuItemText}>Settings</Text>
                        </TouchableOpacity>

                        <View style={styles.menuDivider} />

                        <TouchableOpacity style={[styles.menuItem, { marginTop: 'auto' }]} onPress={() => navigation.navigate('contactScreen')}>
                            <Mail color={PRIMARY_ORANGE} size={22} />
                            <Text style={[styles.menuItemText, { color: PRIMARY_ORANGE }]}>Let's Talk</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FFFFFF" },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 25, height: 60 },
    headerName: { fontSize: 18, fontWeight: "900", letterSpacing: 2 },
    greetingSection: { paddingHorizontal: 25, paddingVertical: 20 },
    greetingHello: { fontSize: 32, fontWeight: "900" },
    greetingSub: { fontSize: 15, color: "#666", marginTop: 8, lineHeight: 22 },
    sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, marginTop: 30, marginBottom: 15 },
    sectionTitle: { fontSize: 20, fontWeight: "800" },
    seeAllText: { color: PRIMARY_ORANGE, fontWeight: "700", marginRight: 5 },
    seeAllBtn: { flexDirection: 'row', alignItems: 'center' },
    horizontalScroll: { paddingLeft: 25, paddingRight: 25 },
    verticalContainer: { paddingHorizontal: 25 },
    bookCard: { width: 130, marginRight: 20 },
    bookCover: { width: 130, height: 180, borderRadius: 8, backgroundColor: '#F0F0F0' },
    podcastCard: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, backgroundColor: '#FAFAFA', padding: 12, borderRadius: 15 },
    podcastIconBox: { width: 40, height: 40, backgroundColor: PRIMARY_ORANGE, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
    podcastInfo: { flex: 1, marginLeft: 15 },
    courseCard: { width: 210, backgroundColor: '#000', borderRadius: 20, padding: 20, marginRight: 15 },
    courseTop: { width: 45, height: 45, borderRadius: 12, backgroundColor: PRIMARY_ORANGE, justifyContent: 'center', alignItems: 'center', marginBottom: 35 },
    courseTitle: { color: '#FFF', fontSize: 16, fontWeight: '800' },
    courseSub: { color: '#888', fontSize: 12, marginTop: 4 },
    experienceCard: { marginHorizontal: 25, padding: 20, backgroundColor: '#FFF', borderRadius: 20, borderWidth: 1, borderColor: '#EEE', marginBottom: 30 },
    expHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    expCompany: { marginLeft: 8, fontWeight: '900', color: PRIMARY_ORANGE, textTransform: 'uppercase', fontSize: 12 },
    expRole: { fontSize: 18, fontWeight: '800' },
    expDesc: { fontSize: 14, color: '#666', marginTop: 8, lineHeight: 20 },
    itemTitle: { fontSize: 15, fontWeight: "700", marginTop: 10 },
    itemSub: { fontSize: 12, color: "#888", marginTop: 2 },
    mentorCard: { width: 180, height: 120, backgroundColor: '#FFF', marginRight: 15, borderRadius: 15, padding: 15, borderWidth: 1, borderColor: '#F0F0F0', justifyContent: 'center' },
    mentorTag: { position: 'absolute', top: 10, right: 10, backgroundColor: PRIMARY_ORANGE + '20', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4 },
    mentorTagText: { fontSize: 10, fontWeight: '900', color: PRIMARY_ORANGE },
    mentorTopic: { fontSize: 16, fontWeight: '800', color: '#000', marginBottom: 8 },
    mentorFooter: { flexDirection: 'row', alignItems: 'center' },
    mentorDate: { fontSize: 12, color: '#888', fontWeight: '600' },
    mentorDivider: { width: 4, height: 4, borderRadius: 2, backgroundColor: '#DDD', marginHorizontal: 8 },
    mentorStudents: { fontSize: 12, color: '#888', fontWeight: '600' },
    overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 10 },
    sideMenu: { position: 'absolute', width: width * 0.8, height: height, backgroundColor: '#FFF', right: 0, zIndex: 20, paddingHorizontal: 20, elevation: 5 },
    sideMenuHeader: { height: 60, justifyContent: 'center', alignItems: 'flex-end' },
    menuItemsContainer: { flex: 1, marginTop: 40, paddingBottom: 40 },
    menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: '#F9F9F9' },
    menuItemText: { fontSize: 18, fontWeight: '700', marginLeft: 15, color: '#000' },
    menuDivider: { height: 1, backgroundColor: '#EEE', marginVertical: 20 }
});

export default HomeScreen;