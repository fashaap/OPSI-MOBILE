import { Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import FormLayout from "../../layouts/FormLayout";
import ProgressStepBar from "../../components/ProgressStepBar";
import { TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";

const FormStep4Screen = () => {
  const [stepStatus, setStepStatus] = useState(4);
  return (
    <FormLayout>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            padding: 10,
            marginTop: 20,
            borderRadius: 10,
            backgroundColor: "#DAF0FF",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#014B7C",
            }}
          >
            Segera pulang untuk verifikasi kembali. Jika tidak, anda akan
            dinyatakan tidak pulang
          </Text>
        </View>
        <ProgressStepBar step={stepStatus} />
      </View>

      <View style={{ marginTop: 20, marginBottom: 20, alignSelf: "center" }}>
        <QRCode
          size={(Dimensions.get("window").width * 3) / 5}
          value="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        />
      </View>

      <View
        style={{
          marginTop: 20,
          backgroundColor: "#FFCF87",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{ textAlign: "center", color: "#BE7200", fontWeight: 500 }}
        >
          Jika anda lupa untuk verifikasi kembali, anda dapat mengirimkan permintaan
        </Text>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 20,
          alignSelf: "center",
          padding: 15,
          backgroundColor: "#FFA700",
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
          Permintaan Selesai
        </Text>
      </TouchableOpacity>
    </FormLayout>
  );
};

export default FormStep4Screen;
