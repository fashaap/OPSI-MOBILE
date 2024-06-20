import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TextInput,
  Alert,
} from "react-native";
import { CheckBox } from "@rneui/themed";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ImagePicker from "../../components/ImagePicker";
import { Button } from "react-native-elements";

const FormScreen = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [date, setDate] = useState(() => {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  });

  const [showPicker, setShowPicker] = useState(false);
  const [value, onChangeText] = useState("Alasan Saya Ingin Dispen...");

  const toggleCheckbox1 = () => {
    setChecked1(true);
    setChecked2(false);
  };

  const toggleCheckbox2 = () => {
    setChecked1(false);
    setChecked2(true);
  };

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setShowPicker(false);
      setDate(selectedDate);
    } else {
      setShowPicker(false);
    }
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes}`;
  };

  const handleFormSubmit = () => {
    if (!checked1 && !checked2) {
      Alert.alert("Peringatan", "Pilih salah satu jenis (Dispen/Izin)");
    } else if (formatTime(date) === "00:00") {
      Alert.alert("Peringatan", "Isi form waktu yang dibutuhkan dengan benar");
    } else if (value === "Alasan Saya Ingin Dispen...") {
      Alert.alert("Peringatan", "Isi form alasan izin keluar");
    } else {
      Alert.alert("Konfirmasi", "Apakah Anda yakin ingin mengirim formulir?", [
        {
          text: "Batal",
          style: "cancel",
        },
        {
          text: "Kirim",
          onPress: () => {
            console.log("Formulir terkirim!");
          },
        },
      ]);
    }
  };

  return (
    <ScrollView
      style={{
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: "#F7F8FA",
      }}
    >
      <View style={{ flexDirection: "column", gap: 10 }}>
        <View>
          <Text style={styles.textHeadingForm}>Jenis Izin Keluar</Text>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              checked={checked1}
              onPress={toggleCheckbox1}
              title="Dispen"
              iconType="material-community"
              checkedIcon="checkbox-marked-outline"
              uncheckedIcon="checkbox-blank-outline"
              checkedColor="#386A9E"
              containerStyle={styles.checkBox}
              textStyle={styles.checkBoxText}
            />
            <CheckBox
              checked={checked2}
              onPress={toggleCheckbox2}
              title="Izin"
              iconType="material-community"
              checkedIcon="checkbox-marked-outline"
              uncheckedIcon="checkbox-blank-outline"
              checkedColor="#386A9E"
              containerStyle={styles.checkBox}
              textStyle={styles.checkBoxText}
            />
          </View>
        </View>
        <View>
          <Text style={styles.textHeadingForm}>Waktu Yang Dibutuhkan</Text>
          <TouchableOpacity onPress={showDatePicker} style={styles.timeButton}>
            <Icon name="timer-outline" size={20} color="#386A9E" />
            <Text style={styles.timeText}>{formatTime(date)}</Text>
          </TouchableOpacity>
          {showPicker && (
            <RNDateTimePicker
              value={date}
              onChange={handleDateChange}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              is24Hour={true}
              mode="time"
            />
          )}
        </View>

        <View>
          <Text style={styles.textHeadingForm}>Alasan Izin Keluar</Text>
          <View
            style={{
              backgroundColor: value,
              borderBottomColor: "#000000",
              borderBottomWidth: 1,
            }}
          >
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              style={{ padding: 10 }}
            />
          </View>
        </View>

        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text style={styles.textHeadingForm}>Bukti Kuat (jika ada)</Text>
          <ImagePicker />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#386A9E",
            paddingVertical: 13,
            borderRadius: 5,
          }}
          onPress={handleFormSubmit}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>
            Kirim Formulir
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textHeadingForm: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
    marginRight: 10,
  },
  checkBoxText: {
    fontSize: 16,
    color: "#386A9E",
  },
  timeButton: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#386A9E",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  timeText: {
    marginLeft: 5,
    fontSize: 16,
    color: "#386A9E",
    fontWeight: "bold",
  },
});

export default FormScreen;
