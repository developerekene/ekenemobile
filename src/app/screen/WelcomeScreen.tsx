import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

const PRIMARY_ORANGE = "#E64A19";

const WelcomeScreen: React.FC = () => {
    const navigation = useNavigation<any>();
    return (
        <SafeAreaView style={styles.container}>
            {/* The main container must have flex: 1 to occupy the whole screen */}
            <View style={styles.mainWrapper}>

                {/* TOP SECTION */}
                <View style={styles.section}>
                    <Text style={styles.brandText}>Ekenedilichukwu</Text>
                    <Text style={styles.middleTexttt}>Gratitudes to the Almighty </Text>
                    {/* <View style={styles.orangeDot} /> */}
                </View>

                {/* MIDDLE SECTION */}
                <View style={styles.section}>
                    <View style={styles.centerCircle}>
                        <Text style={styles.middleText}>"Always remember that no one is better than you, you just do not know what they know yet." </Text>
                        <Text style={styles.middleTextt}>- Ekenedilichukwu </Text>
                    </View>
                </View>

                {/* BOTTOM SECTION */}
                <View style={styles.section}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("homeScreen")}>
                        <Text style={styles.buttonText}>Dive In</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    mainWrapper: {
        flex: 1, // This allows the children to be spaced out across the whole screen
        paddingHorizontal: 30,
        paddingVertical: 50,
        justifyContent: "space-between", // Pushes first child to top, last to bottom
        alignItems: "center",
    },
    section: {
        alignItems: 'center',
        width: '100%',
    },
    brandText: {
        fontSize: 22,
        fontWeight: "900",
        letterSpacing: 4,
        color: "#000",
    },
    orangeDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: PRIMARY_ORANGE,
        marginTop: 4,
    },
    centerCircle: {
        width: "auto",
        height: "auto",
        padding: 20,
        borderWidth: 1,
        borderColor: "#eee",
        justifyContent: 'center',
    },
    middleText: {
        fontWeight: "900",
        color: PRIMARY_ORANGE,
    },
    middleTexttt: {
        fontWeight: "300",
        color: "grey",
        fontStyle: "italic"
    },
    middleTextt: {
        fontWeight: "700",
        color: "#666",
        marginTop: 10,
        alignSelf: "flex-end"
    },
    button: {
        backgroundColor: "#000",
        width: '100%',
        padding: 18,
        borderRadius: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: "#fff",
        fontWeight: "900",
        fontSize: 16,
    }
})