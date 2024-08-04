import React from 'react';
import {Text, Modal, View, Pressable, Image} from 'react-native';
import styles, {darkColors, lightColors} from '../styles/theme';
import closeIcon from '../assets/icons/close.png';
import {useSelector} from 'react-redux';

const SelectModal = ({children, modalVisible, setModalVisible, title}) => {
  const colorMode = useSelector(state => state.colorMode.mode);
  const theme = colorMode === 'light' ? lightColors : darkColors;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View
          style={[
            styles.modalContainer,
            theme.primary_background,
            theme.secondary_border,
          ]}>
          <View style={[styles.modalHeader, theme.primary_background]}>
            <Text style={[styles.modalTitle, theme.secondary_text]}>
              {title}
            </Text>
            <Pressable
              // style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Image source={closeIcon} style={styles.closeIcon} />
            </Pressable>
          </View>
          <View style={styles.selectMenuWrapper}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};
export default SelectModal;
