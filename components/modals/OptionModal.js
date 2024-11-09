import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { contentColor, titleColor } from "../../constants/colors.js";

const OptionModal = ({ visible, setVisible, content }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
      animationType="fade"
    >
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback>
            <View style={styles.tooltip}>
              <View style={styles.modalHeadingWrapper}>
                <AntDesign name="warning" size={40} color="orange" />
              </View>

              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.modalContent}>{content}</Text>
              </ScrollView>
              <TouchableOpacity
                onPress={() => setVisible(false)}
                style={styles.buttonStyle}
              >
                <Text style={styles.closeText}>ठीक है</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  tooltip: {
    backgroundColor: "white",
    width: "100%",
    padding: 8,
    borderRadius: 5,
    maxWidth: 350,
    height: "auto",
    maxHeight: 250,
    alignItems: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  closeText: {
    color: "white",
    fontSize: 20,
  },
  buttonStyle: {
    backgroundColor: "#0b5884",
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  modalHeadingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  modalHeading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3d3d3d",
  },
  modalContent: {
    fontSize: 20,
    textAlign: "justify",
    color: "#636262",
  },
});

export default OptionModal;
