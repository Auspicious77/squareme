import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { scale } from '@/lib/shared';
import Button from '@/components/global/button';
import images from '@/constants/images';
import { COLORS, FONTS, SIZES } from '@/constants/theme';

const { height } = Dimensions.get('window');

interface SuccessModalProps {
  visible: boolean;
  title: string;
  description: string;
  buttonText: string;
  onPress: () => void;
  onRequestClose?: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  visible,
  title,
  description,
  buttonText,
  onPress,
  onRequestClose,
}) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        friction: 6,
      }).start();
    } else {
      scaleAnim.setValue(0);
    }
  }, [visible]);

  return (
    <Modal
      transparent
      animationType="none"
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.modalContent}>
          <Animated.Image
            source={images.done}
            style={[styles.image, { transform: [{ scale: scaleAnim }] }]}
          />

          <View style={styles.textView}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>

        

         
        </View>
        <View style={styles.footer}>
          <Button
            buttonStyle={{ marginTop: scale(40) }}
            text={buttonText}
            onPress={onPress}
          />

          </View>
      </SafeAreaView>
      
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'flex-end',
   
  },
  modalContent: {
    backgroundColor: COLORS.white,
    marginHorizontal: scale(20),
    borderRadius: SIZES.radius,
    padding: scale(25),
    alignItems: 'center',
    marginBottom: scale(200)
  },
  image: {
    width: scale(100),
    height: scale(100),
    marginBottom: scale(20),
  
  },
  textView: {
    marginTop: scale(10),
    alignItems: 'center',
  },
  title: {
    ...FONTS.mediumText,
    fontSize: scale(17),
    textAlign: 'center',
    color: COLORS.black,
    marginBottom: scale(8),
  },
  description: {
    ...FONTS.regularText,
    textAlign: 'center',
    color: COLORS.black,
  },
  footer: {
    paddingHorizontal: scale(30),
    position: 'fixed',
    bottom: 30
  }
});

export default SuccessModal;
