import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import ProgressStepBar from "../../components/ProgressStepBar";
import FormLayout from "../../layouts/FormLayout";

const FormStep1Screen = () => {
  const [stepStatus, setStepStatus] = useState(1);

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
            Mohon tunggu sampai piket mengizinkan anda
          </Text>
        </View>
        <ProgressStepBar step={stepStatus} />
      </View>

      <View style={{ marginTop: 100, marginBottom: 100 }}>
        <Text style={{ textAlign: "center", fontWeight: 500, fontSize: 17 }}>
          STATUS ANDA MASIH DALAM PROSES IZIN PIKET
        </Text>
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
          Jika Anda masih menunggu izin piket dengan waktu yang lama, silakan
          datangi guru Piket.
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

export default FormStep1Screen;
