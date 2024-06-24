import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import FormLayout from "../../layouts/FormLayout";
import ProgressStepBar from "../../components/ProgressStepBar";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import CountdownTimer from "../../components/CountdownTimer";
import { statusForm } from "../../data/userInfo";

const FormStep3Screen = () => {
  const [stepStatus, setStepStatus] = useState(3);

  const data = {
    code: statusForm.code,
    countdown: statusForm.time,
  };

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
            Jika waktu telah habis dimohon verifikasi kembali dengan penjaga
            keamanan. Jika tidak, Anda kemungkinan dianggap tidak pulang.
          </Text>
        </View>
        <ProgressStepBar step={stepStatus} />
      </View>

      <View style={{ marginTop: 40 }}>
        {/* timer disini */}

        <View style={{ marginBottom: 40 }}>
          <CountdownTimer countdown={data.countdown} />
        </View>

        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 17 }}>
          Kode Tiket
        </Text>
        <Text style={{ textAlign: "center", fontWeight: "400", fontSize: 15 }}>
          {data.code}
        </Text>

        <TouchableOpacity
          style={{
            marginTop: 20,
            alignSelf: "center",
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderWidth: 1,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="copy1" size={20} color="black" />
          <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 20 }}>
            Salin Kode
          </Text>
        </TouchableOpacity>
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
          Jika Anda menghadapi masalah, jangan ragu untuk menghubungi guru piket
          atau wali kelas Anda.
        </Text>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 20,
          marginBottom: 20,
          alignSelf: "center",
          paddingVertical: 10,
          paddingHorizontal: 15,
          backgroundColor: "#16A34A",
          borderRadius: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesome name="whatsapp" size={24} color="white" />
        <Text style={{ marginLeft: 10, color: "#FFFFFF", fontWeight: "bold" }}>
          Hubungi Guru Piket
        </Text>
      </TouchableOpacity>
    </FormLayout>
  );
};

export default FormStep3Screen;
