import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const PRIMARY_ORANGE = "#E64A19";

const AboutEkeneScreen: React.FC<any> = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("homeScreen")}>
                    <ArrowLeft size={26} color="#000" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>About Ekene</Text>

                <Text style={styles.menuItemText}>Who is Ekenedilichukwu</Text>
                <Text style={styles.paragraph}>
                    Ekenedilichukwu is a software engineer and product founder behind Ogoo, an AI-driven healthcare assistant focused on delivering smarter, more accessible care. He builds high-performance web and mobile applications using React Native, Next.js, Firebase, and AWS, with a strong emphasis on usability, scalability, and long-term product growth.
                </Text>

                <Text style={styles.paragraph}>
                    His work is driven by a belief that technology should simplify complexity and serve real human needs. With experience spanning full-stack development, system architecture, and product strategy, he designs and engineers solutions that are not only technically sound but intuitive and impactful. Beyond building products, he is passionate about mentorship, knowledge sharing, and exploring how intelligent systems can reshape healthcare and everyday digital experiences.
                </Text>

                <View>
                <Text style={styles.menuItemText}>Experience</Text>
                </View>
            </ScrollView>
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

    title: {
        fontSize: 28,
        fontWeight: "900",
        marginBottom: 20,
    },

    paragraph: {
        fontSize: 15,
        lineHeight: 22,
        color: "#555",
        marginBottom: 15,
    },

    menuItemText: { fontSize: 20, fontWeight: '300', color: PRIMARY_ORANGE, marginBottom: 10 },
});

export default AboutEkeneScreen;