
import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { scale } from '@/lib/shared';
import { COLORS, FONTS, SCREEN_WIDTH, SIZES } from '@/constants/theme';

interface MoreActionsProps {
  item: {
    title: string;
    img: any;
    onPress?: () => void;
  };
  index: number
}

const MoreActions: React.FC<MoreActionsProps> = ({ item, index }) => {
  return (
    <TouchableOpacity onPress={item.onPress} style={{...styles.container,  backgroundColor: index == 0? COLORS.gray300 : '#D7E5FF',}}>
         <Text style={styles.title}>{item.title}</Text>
      <Image
        source={item.img}
        style={styles.image}
        resizeMode="contain"
      />
     
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(15),
    paddingVertical: scale(20),
    borderRadius: SIZES.base,
    marginHorizontal: scale(4),
    marginTop: scale(12),
    width: SCREEN_WIDTH * 0.7, // 45% leaves space for 2 items + margin
marginRight: scale(10),

    
  },
  image: {
    height: scale(200),
    width: scale(200),
    alignSelf: 'flex-start',
    marginBottom: 4,
    resizeMode: 'contain'
  },
  title: {
    ...FONTS.regularText,
    color: COLORS.black,
    fontSize: 17,
    textAlign: 'left',
    width: '70%'
  
  },
});

export default MoreActions;
