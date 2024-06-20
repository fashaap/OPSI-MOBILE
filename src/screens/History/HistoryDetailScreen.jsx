import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const HistoryDetailScreen = () => {
  const route = useRoute();
  const { codeTicket } = route.params;

  const badgeText = (text) => {
    if (text === "DISPEN") {
      return (
        <View
          style={{
            backgroundColor: "#A9E0FF",
            flex: 1,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#053f5e",
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {text}
          </Text>
        </View>
      );
    } else if (text === "IZIN") {
      return (
        <View
          style={{
            backgroundColor: "#ffd587",
            flex: 1,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#f9a813",
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {text}
          </Text>
        </View>
      );
    } else if (text === "BOLOS") {
      return (
        <View
          style={{
            backgroundColor: "#ff8587",
            flex: 1,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#d91d1d",
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {text}
          </Text>
        </View>
      );
    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: "#F7F8FA",
      }}
    >
      <View>
        <Text style={{ color: "#333333" }}>Kode Tiket</Text>
        <Text style={{ color: "#333333" }}>{codeTicket}</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          padding: 10,
          borderRadius: 5,
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 15, color: "#333333" }}>
              10 Maret 2024
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, color: "#333333" }}
            >
              Fasha Azhi Putra
            </Text>
          </View>

          <View>
            <Text>{badgeText("DISPEN")}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#333333",
            }}
          >
            10:00
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 5,
              color: "#333333",
            }}
          >
            -
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#333333",
            }}
          >
            12:00
          </Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text
            style={{ fontWeight: "bold", marginBottom: 5, color: "#333333" }}
          >
            Alasan:
          </Text>
          <Text style={{ color: "#333333" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            atque dolores voluptates, id quo minus libero fugit ad officia magni
            dicta temporibus possimus, molestiae, neque cumque? Ratione tenetur
            eligendi assumenda. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Praesentium quisquam ipsam aut possimus alias
            repellendus vero delectus doloremque. Ratione atque exercitationem
            in dignissimos, a maxime error dicta. Commodi, neque nisi?
          </Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text
            style={{ fontWeight: "bold", marginBottom: 5, color: "#333333" }}
          >
            Bukti:
          </Text>
          <View
            style={{ borderWidth: 1, height: 200, borderRadius: 10 }}
          ></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HistoryDetailScreen;
