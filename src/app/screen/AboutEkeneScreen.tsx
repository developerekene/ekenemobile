import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Modal,
    Linking
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    ArrowLeft,
    Briefcase,
    Cpu,
    Globe,
    GraduationCap,
    Linkedin,
    Facebook,
    Youtube,
    X
} from "lucide-react-native";

const PRIMARY_ORANGE = "#E64A19";

const AboutEkeneScreen: React.FC<any> = ({ navigation }) => {

    const [experienceVisible, setExperienceVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("homeScreen")}>
                    <ArrowLeft size={26} color="#000" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

                <Text style={styles.title}>About Ekene</Text>
                <Text style={styles.subtitle}>Lead Software Engineer | Tech Educator and Advocate | Founder and Entrepreneur</Text>

                {/* SOCIALS */}
                <View style={styles.socialRow}>
                    <TouchableOpacity
                        style={styles.socialBtn}
                        onPress={() =>
                            Linking.openURL("https://www.linkedin.com/in/ekenedilichukwu-okoli-7615591b5/")
                        }
                    >
                        <Linkedin size={18} color="#FFF" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialBtn}
                        onPress={() =>
                            Linking.openURL("https://www.facebook.com/kenny.okoli1/")
                        }
                    >
                        <Facebook size={18} color="#FFF" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialBtn}
                        onPress={() =>
                            Linking.openURL("https://studio.youtube.com/channel/UCSFULPR_Lqt1kJAi6m4iKrw")
                        }
                    >

                        <Youtube size={18} color="#FFF" />
                    </TouchableOpacity>
                </View>

                {/* WHO HE IS */}
                <Text style={styles.sectionTitle}>Who is Ekenedilichukwu?</Text>
                <Text style={styles.paragraph}>
                    Ekenedilichukwu is a systems-focused software engineer and product founder building
                    intelligent digital infrastructure at the intersection of AI, healthcare, and scalable cloud systems.
                    He is the creator of Ogoo — an AI-powered healthcare assistant designed to deliver proactive,
                    contextual, and accessible medical intelligence.
                </Text>

                <Text style={styles.paragraph}>
                    His engineering philosophy prioritizes clarity, modularity, performance, and long-term scalability.
                    He approaches every product as a living system — something that must evolve, adapt, and serve human needs with precision.
                </Text>

                {/* TECH STACK */}
                <Text style={styles.sectionTitle}>Core Technologies</Text>

                <View style={styles.card}>
                    <View style={styles.cardRow}>
                        <Cpu size={18} color={PRIMARY_ORANGE} />
                        <Text style={styles.cardTitle}>Engineering Stack</Text>
                    </View>
                    <Text style={styles.cardText}>
                        React Native, React.js, Next.js, TypeScript, JavaScript (ES6+), Node.js,
                        Express, Firebase (Auth, Firestore, Functions), AWS (EC2, S3, Lambda),
                        REST APIs, GraphQL, PostgreSQL, MongoDB, Redis, Docker,
                        CI/CD pipelines, Cloud Architecture, System Design Patterns,
                        State Management (Redux, Zustand), Performance Optimization,
                        Secure Authentication Systems, Payment Integrations.
                    </Text>
                </View>

                {/* SPECIALIZATION */}
                <Text style={styles.sectionTitle}>Specializations</Text>

                <View style={styles.card}>
                    <View style={styles.cardRow}>
                        <Globe size={18} color={PRIMARY_ORANGE} />
                        <Text style={styles.cardTitle}>Advanced Focus Areas</Text>
                    </View>
                    <Text style={styles.cardText}>
                        • AI-integrated product systems {"\n"}
                        • Scalable backend architecture for high-growth applications {"\n"}
                        • Distributed and decentralized system design {"\n"}
                        • Mobile-first performance engineering {"\n"}
                        • Secure fintech & healthcare infrastructures {"\n"}
                        • Cloud-native development and DevOps strategy {"\n"}
                        • Human-centered UX for complex technical systems {"\n"}
                        • Technical product strategy & long-term architecture planning
                    </Text>
                </View>

                {/* EXPERIENCE BUTTON */}
                <Text style={styles.sectionTitle}>Professional Experience</Text>

                <TouchableOpacity
                    style={styles.experienceButton}
                    onPress={() => setExperienceVisible(true)}
                >
                    <Briefcase size={18} color="#FFF" />
                    <Text style={styles.experienceBtnText}>View Full Experience</Text>
                </TouchableOpacity>

                {/* EDUCATION */}
                <Text style={styles.sectionTitle}>Education</Text>

                <View style={styles.card}>
                    <View style={styles.cardRow}>
                        <GraduationCap size={18} color={PRIMARY_ORANGE} />
                        <Text style={styles.cardTitle}>Academic Background</Text>
                    </View>

                    <Text style={styles.cardText}>
                        B.Sc Computer Science {"\n"}
                        Institute National Open University (2014 - 2019)
                        {"\n\n"}
                        B.Ed Chemistry Education {"\n"}
                        Cross River University (2013 - 2018)
                    </Text>
                </View>

                {/* FOUNDER JOURNEY */}
                <Text style={styles.sectionTitle}>Founder Journey</Text>

                <Text style={styles.paragraph}>
                    Ekene founded Ogoo with a singular objective — to redesign how people interact
                    with healthcare intelligence. Rather than reactive care, he envisions proactive,
                    AI-assisted systems that anticipate needs, interpret data contextually, and
                    empower users with clarity before uncertainty becomes crisis.
                </Text>

                <Text style={styles.paragraph}>
                    His founder journey is rooted in system thinking — combining medical workflows,
                    artificial intelligence, behavioral psychology, and scalable infrastructure
                    into one cohesive digital experience. Ogoo is not just an application;
                    it is a long-term infrastructure play aimed at reshaping access to health insight globally.
                </Text>

                <Text style={styles.paragraph}>
                    From early architecture design to production-scale deployment,
                    he leads product direction, AI system integration, backend scalability,
                    and strategic growth planning.
                </Text>


                {/* MENTORSHIP */}
                <Text style={styles.sectionTitle}>Mentorship & Knowledge Sharing</Text>

                <View style={styles.card}>
                    <View style={styles.cardRow}>
                        <GraduationCap size={18} color={PRIMARY_ORANGE} />
                        <Text style={styles.cardTitle}>Community & Leadership</Text>
                    </View>

                    <Text style={styles.cardText}>
                        Ekene is a passionate mentor and community leader dedicated to nurturing the next generation of engineers and technology leaders. He actively guides developers transitioning into advanced system design, mobile architecture, and scalable backend engineering. {"\n\n"}

                        As a mentor at Calabar Tech Community, Men In Tech Africa, and LeadPac Foundation, he not only shares technical knowledge but also provides strategic career guidance, helping mentees navigate complex tech landscapes and accelerate their growth. {"\n\n"}

                        Beyond one-on-one mentorship, Ekene conducts structured training sessions, hosts workshops, and leads interactive learning experiences that blend theory with practical, hands-on problem solving. He regularly participates in conferences, panel discussions, and thought-leadership events, sharing insights on system architecture, AI-integrated applications, scalable mobile solutions, and digital transformation. {"\n\n"}

                        His approach to mentorship goes beyond writing code — he cultivates a mindset of architectural thinking, critical reasoning, ethical engineering, and long-term strategic vision. Through his guidance, mentees learn to design robust, high-performance systems while developing the soft skills necessary to lead projects, teams, and communities.

                        Ultimately, Ekene sees mentorship as a multiplier for impact: by empowering others with knowledge, insight, and confidence, he helps build a stronger, more innovative technology ecosystem that can solve real-world problems at scale.
                    </Text>
                </View>


                {/* LONG-TERM VISION */}
                <Text style={styles.sectionTitle}>Long-Term Vision</Text>

                <Text style={styles.paragraph}>
                    Ekene’s long-term vision is to build globally distributed intelligent systems
                    that operate as seamless extensions of human cognition. He believes AI should
                    augment human judgment — not replace it — and that scalable infrastructure
                    must be built with ethical foresight.
                </Text>

                <Text style={styles.paragraph}>
                    His broader ambition is to design foundational AI-health infrastructure
                    capable of operating across regions, economies, and accessibility constraints —
                    delivering equitable digital intelligence at global scale.
                </Text>

                <View style={{ height: 40 }} />
            </ScrollView>

            {/* EXPERIENCE MODAL */}
            <Modal
                visible={experienceVisible}
                animationType="slide"
                transparent
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Professional Experience</Text>
                            <TouchableOpacity onPress={() => setExperienceVisible(false)}>
                                <X size={24} color="#000" />
                            </TouchableOpacity>
                        </View>

                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Text style={styles.expItem}>
                                D’roid Technologies | Senior Software Engineer (2023 - Current)
                            </Text>

                            <Text style={styles.expItem}>
                                Eco Bank | Senior Software Engineer (2022 - 2023)
                            </Text>

                            <Text style={styles.expItem}>
                                React Native Engineer (React/TypeScript) | Sanwo Pay Inc, Nigeria
                                (February 2022 – May 2022)
                            </Text>

                            <Text style={styles.expItem}>
                                Mobile Engineer (React Native) | DrugStoc, Ibadan Nigeria
                                (September 2021 – February 2022)
                            </Text>

                            <Text style={styles.expItem}>
                                Mobile Engineer (React Native) | Coaster Technologies, Ibadan Nigeria
                                (March 2021 – August 2021)
                            </Text>
                        </ScrollView>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FFF" },

    header: {
        height: 60,
        justifyContent: "center",
        paddingHorizontal: 20,
    },

    content: { padding: 25 },

    title: { fontSize: 30, fontWeight: "900" },

    subtitle: {
        fontSize: 14,
        color: "#777",
        marginBottom: 25,
        fontWeight: '300'
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: "800",
        marginTop: 25,
        marginBottom: 12,
    },

    paragraph: {
        fontSize: 15,
        lineHeight: 22,
        color: "#555",
        marginBottom: 15,
    },

    socialRow: {
        flexDirection: "row",
        gap: 25,
        marginBottom: 25,
    },

    socialBtn: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: PRIMARY_ORANGE,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 20,
    },

    socialText: {
        color: "#FFF",
        marginLeft: 6,
        fontWeight: "700",
        fontSize: 13,
    },

    card: {
        backgroundColor: "#FFF",
        borderRadius: 18,
        padding: 18,
        borderWidth: 1,
        borderColor: "#EEE",
        marginBottom: 15,
    },

    cardRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },

    cardTitle: {
        marginLeft: 8,
        fontWeight: "800",
        fontSize: 14,
        color: PRIMARY_ORANGE,
        textTransform: "uppercase",
    },

    cardText: {
        fontSize: 14,
        lineHeight: 22,
        color: "#555",
    },

    experienceButton: {
        backgroundColor: PRIMARY_ORANGE,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        borderRadius: 15,
        marginBottom: 10,
    },

    experienceBtnText: {
        color: "#FFF",
        fontWeight: "800",
        marginLeft: 8,
    },

    modalOverlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.4)",
    },

    modalContainer: {
        backgroundColor: "#FFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 25,
        maxHeight: "70%",
    },

    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    modalTitle: {
        fontSize: 18,
        fontWeight: "800",
    },

    expItem: {
        fontSize: 14,
        marginBottom: 15,
        lineHeight: 20,
        color: "#444",
    },
});

export default AboutEkeneScreen;