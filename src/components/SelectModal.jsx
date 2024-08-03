import React from 'react';
import {Text, Modal, View, Pressable, Image} from 'react-native';
import styles from '../styles/theme';
import closeIcon from '../assets/icons/close.png';

const SelectModal = ({children, modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Select Language</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
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
