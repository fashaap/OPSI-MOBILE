import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker"; // Ensure this library is installed
import { Button } from "react-native-elements";

const ImagePickerComponent = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  const cancelUpload = () => {
    // Function to handle canceling upload
    setImage(null); // Reset the image state
  };

  return (
    <View style={styles.container}>
      {!image ? (
        <TouchableOpacity
          title="Upload Gambar Disini"
          style={styles.button}
          onPress={pickImage}
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            Upload Gambar Disini
          </Text>
        </TouchableOpacity>
      ) : (
        <View>
          <TouchableOpacity
            title="Ganti Gambar"
            style={styles.button}
            onPress={pickImage}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Ganti Gambar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            title="Batalkan Mengirim Gambar"
            style={[styles.button, { backgroundColor: "red", marginTop: 10 }]}
            onPress={cancelUpload}
          >
            <Text style={{ color: "white", fontSize: 16 }}>
              Batalkan Mengirim Gambar
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  button: {
    alignItems: "center",

    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#386A9E",
  },
});

export default ImagePickerComponent;
