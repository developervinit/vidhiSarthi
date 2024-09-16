import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

const CustomModal = ({ content, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setVisible(true)}>
        {children}
      </TouchableOpacity>

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
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                  {content}
                </ScrollView>
                <TouchableOpacity
                  onPress={() => setVisible(false)}
                  style={styles.buttonStyle}
                >
                  <Text style={styles.closeText}>हटाएं</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
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
    width: "95%",
    padding: 10,
    borderRadius: 5,
    maxWidth: 350,
    height: 450,
    alignItems: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  closeText: {
    color: "white",

    fontSize: 20,
  },
  buttonStyle: {
    backgroundColor: "#03448b", // Example: blue button
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default CustomModal;
