import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { formattedAmountWithNaira, scale } from '@/lib/shared';
import icons from '@/constants/icons';
import { COLORS, FONTS, SCREEN_HEIGHT, SIZES } from '@/constants/theme';
import images from '@/constants/images';
import { FontAwesome6, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

interface CustomHeaderProps {
    title?: string;
    guild?: boolean;
    category?: boolean;
    logo?: boolean;
    progressBar?: boolean;
    percentage?: any;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
    title,
    guild,
    percentage,
    progressBar,
    logo,
    category,
}) => {
    const [hide, setHide] = useState(false)

    return (
        <View>
            <LinearGradient
                colors={['#E0F7FF', '#E0F7FF', '#FFFFFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.container}
            >
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

                <View style={styles.content}>
                    <View style={styles.row}>
                        <View style={styles.row2}>
                            <TouchableOpacity>
                                <Image source={images.man} style={styles.img} resizeMode="contain" />
                            </TouchableOpacity>
                            <Text style={{ ...styles.text, marginLeft: scale(7) }}>Hi David,</Text>
                        </View>

                        <View style={styles.row2}>
                            <TouchableOpacity style={styles.circle}>
                                <Ionicons name="gift-outline" size={15} color="white" />
                                <View style={styles.dot} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.circle}>
                                <FontAwesome6 name="add" size={15} color="white" />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginLeft: scale(17) }}>
                                <Fontisto name="bell" size={24} color={COLORS.black} />
                                <View style={styles.dot} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <TouchableOpacity style={{ ...styles.row2, marginTop: scale(10), justifyContent: 'flex-end' }}>
                            <Text style={{ ...styles.smallText, fontSize: 14, textAlign: 'right' }}>Transaction History</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
                        </TouchableOpacity>

                        {/* Balance */}
                        <View style={{ ...styles.row2, marginTop: scale(10), justifyContent: 'center' }}>
                            <Text style={{ ...styles.smallText, fontSize: 14, textAlign: 'center', marginRight: 5 }}>Wallet Balance</Text>
                            <TouchableOpacity onPress={() => setHide(!hide)}>
                                <MaterialCommunityIcons name={hide ? "eye-outline" : "eye-off-outline"} size={20} color="white" />
                            </TouchableOpacity>
                        </View>

                        {
                            hide ?
                                <Text style={styles.bigText}>NGN ********</Text> :
                                <Text style={styles.bigText}>{formattedAmountWithNaira(500000)}</Text>
                        }

                        {/* tag */}
                        <View style={{ ...styles.row2, marginTop: scale(20), justifyContent: 'center' }}>
                            <Text style={{ ...styles.smallText, fontSize: 14, textAlign: 'center', marginRight: 5 }}>Squaremetag: @david222</Text>
                            <TouchableOpacity>
                            <Ionicons name="copy-outline" size={18} color={COLORS.purple} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: SIZES.padding,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : scale(40),
        paddingBottom: scale(16),
        borderBottomLeftRadius: scale(10),
        borderBottomRightRadius: scale(10),
        height: SCREEN_HEIGHT * 0.32
    },
    content: {

        marginTop: scale(10),
        marginHorizontal: scale(15)
    },
    img: {
        height: 36,
        width: 36,
    },
    textContainer: {
        alignItems: 'center',
    },
    text: {
        ...FONTS.regularText,
        color: COLORS.black,
        fontSize: scale(15),
        textAlign: 'center',
    },
    bigText: {
        ...FONTS.mediumText,
        color: COLORS.white,
        fontSize: scale(26),
        textAlign: 'center',
        marginTop: scale(6)
    },
    progressBar: {
        height: scale(6),
        backgroundColor: COLORS.green,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    circle: {
        borderRadius: 100,
        height: 30,
        width: 30,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.secondary,
        marginLeft: scale(6)
    },
    dot: {
        borderRadius: 100,
        height: 10,
        width: 10,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.red,
        position: 'absolute',
        zIndex: 1000,
        top: 0,
        right: 0
    },

    card: {
        height: SIZES.height * 0.2,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base * 1.9,
        paddingHorizontal: SIZES.width * 0.05,
        marginVertical: SIZES.h4,
        justifyContent: 'flex-start',
        paddingVertical: scale(10)
    },
    smallText: {
        ...FONTS.regularText,
        color: COLORS.white,

    }


});

export default CustomHeader;
