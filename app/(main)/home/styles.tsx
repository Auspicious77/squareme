import { COLORS, FONTS } from "@/constants/theme";
import { scale } from "@/lib/shared";
import { StyleSheet } from "react-native";


 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    body: {
        marginHorizontal: scale(15),
        marginTop: scale(20)
    },

    image: {
        resizeMode: 'contain',
        width: scale(199),
        height: scale(132)

    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footer: {
        paddingHorizontal: scale(20),
        paddingBottom: scale(60),
        backgroundColor: COLORS.white,
  
     
    },

    img: {
        height: scale(60),
        width: scale(60),
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    logo: {
        height: scale(31),
        width: scale(123),
        resizeMode: 'contain'
    },

    titleText: {
        ...FONTS.mediumText,
        fontSize: scale(20),
        color: COLORS.black,
        lineHeight: scale(27),
    },
    textView: {
        marginTop: scale(40),
        width: '100%'
    },
    descText: {
        ...FONTS.regularText,
        fontSize: scale(13),
        lineHeight: 20,
        color: COLORS.black,
        opacity: 0.8
    },
 
 
})

export default styles