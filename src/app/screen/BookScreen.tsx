import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Image,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, BookOpen } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const PRIMARY_ORANGE = "#E64A19";

const BOOKS = [
    { id: 'b1', title: 'The Silent Architect', category: 'Philosophy', cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400' },
    { id: 'b2', title: 'Cognitive Networks', category: 'Technology', cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400' },
    { id: 'b3', title: 'Beyond the Binary', category: 'Logic', cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400' },
    { id: 'b4', title: 'Human Intelligence', category: 'Psychology', cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=400' },
    { id: 'b5', title: 'Neural Architectures', category: 'Technology', cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=400' },
];

const categories = ['All', 'Technology', 'Philosophy', 'Logic', 'Psychology'];

const BookScreen: React.FC = ({ navigation }: any) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredBooks =
        selectedCategory === 'All'
            ? BOOKS
            : BOOKS.filter(book => book.category === selectedCategory);

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('homeScreen')}>
                    <ArrowLeft size={26} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Books</Text>
                <View style={{ width: 26 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                {/* Hero Section */}
                <View style={styles.heroSection}>
                    <BookOpen size={28} color={PRIMARY_ORANGE} />
                    <Text style={styles.heroTitle}>My Written Work</Text>
                    <Text style={styles.heroSubtitle}>
                        A collection of my thinking across technology, systems, philosophy and intelligence.
                    </Text>
                </View>

                {/* Categories */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categoryContainer}
                >
                    {categories.map((cat) => (
                        <TouchableOpacity
                            key={cat}
                            onPress={() => setSelectedCategory(cat)}
                            style={[
                                styles.categoryButton,
                                selectedCategory === cat && styles.categoryActive
                            ]}
                        >
                            <Text
                                style={[
                                    styles.categoryText,
                                    selectedCategory === cat && styles.categoryTextActive
                                ]}
                            >
                                {cat}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Book Grid */}
                <View style={styles.grid}>
                    {filteredBooks.map((book) => (
                        <TouchableOpacity key={book.id} style={styles.bookCard}>
                            <Image source={{ uri: book.cover }} style={styles.bookCover} />
                            <Text numberOfLines={1} style={styles.bookTitle}>{book.title}</Text>
                            <Text style={styles.bookCategory}>{book.category}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FFF" },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        height: 60,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "900",
        letterSpacing: 1
    },

    heroSection: {
        paddingHorizontal: 25,
        paddingVertical: 30,
    },
    heroTitle: {
        fontSize: 26,
        fontWeight: "900",
        marginTop: 15,
    },
    heroSubtitle: {
        fontSize: 14,
        color: "#666",
        marginTop: 10,
        lineHeight: 22
    },

    categoryContainer: {
        paddingHorizontal: 25,
        paddingBottom: 15,
    },
    categoryButton: {
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
        marginRight: 10,
    },
    categoryActive: {
        backgroundColor: PRIMARY_ORANGE,
    },
    categoryText: {
        fontSize: 13,
        fontWeight: "700",
        color: "#444",
    },
    categoryTextActive: {
        color: "#FFF",
    },

    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingBottom: 40,
    },
    bookCard: {
        width: (width - 65) / 2,
        marginBottom: 25,
    },
    bookCover: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        backgroundColor: '#F0F0F0',
    },
    bookTitle: {
        fontSize: 15,
        fontWeight: "800",
        marginTop: 10,
    },
    bookCategory: {
        fontSize: 12,
        color: "#888",
        marginTop: 3,
    }
});

export default BookScreen;