import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import ProgressStepBar from "../../components/ProgressStepBar";
import FormLayout from "../../layouts/FormLayout";
import QRCode from "react-native-qrcode-svg";

const FormStep2Screen = () => {
  const [stepStatus, setStepStatus] = useState(2);

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
            Anda telah mendapat izin, harap verifikasi QR code Anda dengan penjaga jika ingin keluar.
          </Text>
        </View>
        <ProgressStepBar step={stepStatus} />
      </View>

      <View style={{ marginTop: 20, marginBottom: 20, alignSelf: "center" }}>
        <QRCode
          size={Dimensions.get("window").width * 3 / 5}
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
          QR CODE ini Berlaku hingga jam 13:00! Segera pergi menuju penjaga sekolah untuk memulai perjalanan
        </Text>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 20,
          alignSelf: "center",
          padding: 15,
          backgroundColor: "#C14747",
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
          Batalkan Izin Keluar
        </Text>
      </TouchableOpacity>
    </FormLayout>
  );
};

export default FormStep2Screen;
