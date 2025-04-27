
import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { scale } from '@/lib/shared';
import { COLORS, FONTS, SIZES } from '@/constants/theme';

interface ActionItemsProps {
  item: {
    title: string;
    img: any;
    onPress?: () => void;
  };
}

const ActionItems: React.FC<ActionItemsProps> = ({ item }) => {
  return (
    <TouchableOpacity onPress={item.onPress} style={styles.container}>
      <Image
        source={item.img}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(4),
    width: 67,
    height: 67,
    backgroundColor: COLORS.gray300,
    borderRadius: SIZES.base,
    marginHorizontal: scale(4),
    marginTop: scale(12)
  },
  image: {
    height: scale(25),
    width: scale(25),
    marginBottom: 4,
  },
  title: {
    ...FONTS.regularText,
    color: COLORS.black,
    fontSize: scale(11),
    textAlign: 'center',
  
  },
});

export default ActionItems;
