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
        paddingTop: scale(20)
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
    transactionContainer:{
        backgroundColor: COLORS.white,
        paddingVertical: scale(10),
        paddingHorizontal: scale(10),
        marginHorizontal: 3,
        borderRadius: 14,
        marginTop: scale(10),
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2
    },
    seeMore: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        position: 'absolute',
        zIndex: 1000,
        backgroundColor: COLORS.white,
        paddingVertical: scale(5),
        paddingHorizontal: scale(5),
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: scale(-15),
        alignSelf: 'center'


    }
 
 
})

export default styles