import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ArrowLeft,
    Mail,
    Phone,
    MapPin,
    Send
} from 'lucide-react-native';

const PRIMARY_ORANGE = "#E64A19";

const ContactScreen: React.FC = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar barStyle="dark-content" />

            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('homeScreen')}>
                    <ArrowLeft size={26} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Contact</Text>
                <View style={{ width: 26 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* INTRO */}
                <View style={styles.introSection}>
                    <Text style={styles.introTitle}>Let’s Connect</Text>
                    <Text style={styles.introSub}>
                        Have a project, collaboration, or idea in mind? Send a message and I’ll respond shortly.
                    </Text>
                </View>

                {/* CONTACT INFO */}
                <View style={styles.infoCard}>
                    <View style={styles.infoRow}>
                        <Mail color={PRIMARY_ORANGE} size={20} />
                        <Text style={styles.infoText}>ekenehq@gmail.com</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Phone color={PRIMARY_ORANGE} size={20} />
                        <Text style={styles.infoText}>+44 7778 745043</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <MapPin color={PRIMARY_ORANGE} size={20} />
                        <Text style={styles.infoText}>Lincoln • United Kingdom</Text>
                    </View>
                </View>

                {/* FORM */}
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Your Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your name"
                        placeholderTextColor="#999"
                        value={name}
                        onChangeText={setName}
                    />

                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Text style={styles.label}>Message</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Write your message..."
                        placeholderTextColor="#999"
                        multiline
                        numberOfLines={5}
                        value={message}
                        onChangeText={setMessage}
                    />

                    <TouchableOpacity style={styles.sendButton}>
                        <Send color="#FFF" size={18} />
                        <Text style={styles.sendText}>Send Message</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    header: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: "900",
        letterSpacing: 1,
    },

    introSection: {
        paddingHorizontal: 25,
        paddingVertical: 20,
    },

    introTitle: {
        fontSize: 30,
        fontWeight: "900",
    },

    introSub: {
        fontSize: 15,
        color: "#666",
        marginTop: 8,
        lineHeight: 22,
    },

    infoCard: {
        marginHorizontal: 25,
        backgroundColor: "#FFF",
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: "#EEE",
        marginBottom: 30,
    },

    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18,
    },

    infoText: {
        marginLeft: 15,
        fontSize: 15,
        fontWeight: '600',
    },

    formContainer: {
        paddingHorizontal: 25,
        paddingBottom: 40,
    },

    label: {
        fontSize: 13,
        fontWeight: '800',
        marginBottom: 6,
        marginTop: 15,
        color: "#333",
        textTransform: 'uppercase',
    },

    input: {
        backgroundColor: "#FAFAFA",
        borderRadius: 15,
        padding: 15,
        fontSize: 15,
        borderWidth: 1,
        borderColor: "#EEE",
    },

    textArea: {
        height: 120,
        textAlignVertical: 'top',
    },

    sendButton: {
        marginTop: 25,
        backgroundColor: PRIMARY_ORANGE,
        paddingVertical: 16,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    sendText: {
        color: "#FFF",
        fontWeight: "800",
        fontSize: 16,
        marginLeft: 8,
    },
});

export default ContactScreen;