import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, User, Bell, Shield, Moon } from 'lucide-react-native';

const PRIMARY_ORANGE = "#E64A19";

const SettingsScreen: React.FC = ({ navigation }: any) => {
    const [notifications, setNotifications] = React.useState(true);
    const [darkMode, setDarkMode] = React.useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('homeScreen')}>
                    <ArrowLeft size={26} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Settings</Text>
                <View style={{ width: 26 }} />
            </View>

            <ScrollView contentContainerStyle={{ padding: 25 }}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Account</Text>

                    <TouchableOpacity style={styles.item}>
                        <User size={20} />
                        <Text style={styles.itemText}>Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        <Shield size={20} />
                        <Text style={styles.itemText}>Privacy & Security</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Preferences</Text>

                    <View style={styles.item}>
                        <Bell size={20} />
                        <Text style={styles.itemText}>Notifications</Text>
                        <Switch
                            value={notifications}
                            onValueChange={setNotifications}
                            trackColor={{ true: PRIMARY_ORANGE }}
                        />
                    </View>

                    <View style={styles.item}>
                        <Moon size={20} />
                        <Text style={styles.itemText}>Dark Mode</Text>
                        <Switch
                            value={darkMode}
                            onValueChange={setDarkMode}
                            trackColor={{ true: PRIMARY_ORANGE }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SettingsScreen;

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
    section: { marginBottom: 40 },
    sectionTitle: { fontSize: 20, fontWeight: "900", marginBottom: 20 },
    item: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: "#F1F1F1",
    },
    itemText: {
        fontSize: 16,
        fontWeight: "700",
        marginLeft: 15,
        flex: 1,
    },
});