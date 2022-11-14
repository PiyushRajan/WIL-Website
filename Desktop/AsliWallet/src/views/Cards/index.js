import {View, Text, Pressable, Modal} from 'react-native';
import styles from '../../styles/Cards';
import Content from './data';
import React, {useState} from 'react';

const Card = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Pressable onPress={() => setModalVisible(!modalVisible)}>
      <View style={styles.container}>
        {Content.map(TextContent => (
          <View
            style={[
              styles.card,
              {
                marginTop: TextContent.marginTop,
                backgroundColor: TextContent.backgroundColor,
              },
            ]}
            key={TextContent.id}>
            <Text style={styles.Text1}>{TextContent.name}</Text>
            <Text style={styles.Text2}>{TextContent.govt}</Text>
            <Text style={styles.PhoneText1}>
              {TextContent.phone}
              <Text style={styles.PhoneText2}>{TextContent.number}</Text>
            </Text>
            <Text style={styles.PhoneText1}>
              {TextContent.Verify}
              <Text style={styles.PhoneText2}> {TextContent.Verified}</Text>
            </Text>
          </View>
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalblur}>
          <View style={styles.modalView}>
            <Text style={styles.HelloText}>Hello</Text>
          </View>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.Xbutton}>
              <Text style={styles.XText}>X</Text>
            </View>
          </Pressable>
        </View>
      </Modal>
    </Pressable>
  );
};

export default Card;
