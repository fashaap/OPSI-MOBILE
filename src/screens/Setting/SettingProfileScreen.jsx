import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Avatar, Icon, Input } from "@rneui/base";
import { Button } from "@rneui/themed";

const SettingProfileScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "#f5f5f5" }}>
      <View style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 5,
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
        </View>

        <View
          style={{
            marginTop: 20,
            backgroundColor: "#fff",
            borderRadius: 10,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 5,
          }}
        >
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                marginBottom: 10,
                color: "#333",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Nama
            </Text>
            <Input
              placeholder="Fasha Azhi Putra"
              disabled={true}
              leftIcon={{ type: "feather", name: "user" }}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                marginBottom: 10,
                color: "#333",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Email
            </Text>
            <Input
              placeholder="Bmpasha23@gmail.com"
              disabled={true}
              leftIcon={{ type: "feather", name: "mail" }}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                marginBottom: 10,
                color: "#333",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Wali Kelas
            </Text>
            <Input
              placeholder="Yayat Hidayat, S.Kom"
              disabled={true}
              leftIcon={{ type: "feather", name: "user" }}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                marginBottom: 10,
                color: "#333",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              No Telephone/ No Whatsapp
            </Text>
            <Input
              placeholder="089663050522"
              disabled={true}
              leftIcon={{ type: "feather", name: "phone" }}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                marginBottom: 10,
                color: "#333",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              No Telephone/ No Whatsapp Orang Tua
            </Text>
            <Input
              placeholder="0821263053523"
              disabled={true}
              leftIcon={{ type: "feather", name: "phone" }}
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Button
            radius={"sm"}
            type="solid"
            icon={<Icon name="save" color="white" />}
          >
            Save
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingProfileScreen;
