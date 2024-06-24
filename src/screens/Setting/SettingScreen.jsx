import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Avatar } from "@rneui/base";
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

const SettingScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        flexGrow: 1,
        backgroundColor: "#F7F8FA",
        padding: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("EditProfile")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          marginTop: 40,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
          marginBottom: 20,
          borderColor: "#ddd",
          borderWidth: 1,
        }}
      >
        <Avatar
          size={50}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        />
        <View style={{ marginLeft: 16 }}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            Fasha Azhi Putra
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 15 }}>
            11223823 | XI IPA 4
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{ marginTop: 20 }}>
        {/* EDIT PROFILE */}
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile")}
          style={{
            paddingVertical: 18,
            paddingHorizontal: 15,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#E3F2FD",
            marginBottom: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5 name="user-cog" size={20} color="#1E88E5" />
            <Text style={{ marginLeft: 10, fontSize: 20, color: "#1E88E5" }}>
              Edit Profile
            </Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#1E88E5" />
        </TouchableOpacity>

        {/* CHANGE PASSWORD */}
        <TouchableOpacity
          onPress={() => navigation.navigate("ChangePassword")}
          style={{
            paddingVertical: 18,
            paddingHorizontal: 15,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#ffefd6",
            marginBottom: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="account-key"
              size={24}
              color="#BE7200"
            />
            <Text style={{ marginLeft: 10, fontSize: 20, color: "#BE7200" }}>
              Ganti Password
            </Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#BE7200" />
        </TouchableOpacity>

        {/* PENGADUAN */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Report")}
          style={{
            paddingVertical: 18,
            paddingHorizontal: 15,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#E8F5E9",
            marginBottom: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="report" size={25} color="#388E3C" />
            <Text style={{ marginLeft: 10, fontSize: 20, color: "#388E3C" }}>
              Pengaduan
            </Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#388E3C" />
        </TouchableOpacity>

        {/* Privacy */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Privacy")}
          style={{
            paddingVertical: 18,
            paddingHorizontal: 15,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#e9d8ff",
            marginBottom: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="privacy-tip" size={24} color="#5d388e" />
            <Text style={{ marginLeft: 10, fontSize: 20, color: "#5d388e" }}>
              Kebijakan privasi
            </Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#5d388e" />
        </TouchableOpacity>

        {/* LOG OUT */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            paddingVertical: 18,
            paddingHorizontal: 15,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#FFCDD2",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="poweroff" size={24} color="#C62828" />
            <Text style={{ marginLeft: 10, fontSize: 20, color: "#C62828" }}>
              Log Out
            </Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={20} color="#C62828" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SettingScreen;
