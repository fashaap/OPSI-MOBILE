import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const HistoryScreen = ({ navigation }) => {
  const dataDummyCard = [
    {
      id: 1,
      title: "Fasha Azhi Putra Putra",
      date: "1 Maret 2024",
      code: "00eb19a6-0359-407d-a47b-9b3111111145",
      category: "IZIN",
      timeOut: "10.00",
      timeIn: "15.00",
    },
    {
      id: 2,
      title: "Fasha Azhi Putra",
      date: "5 Maret 2024",
      code: "00eb19a6-0359-407d-a47b-a22222222226",
      category: "BOLOS",
      timeOut: "10.00",
      timeIn: null,
    },
    {
      id: 3,
      title: "Fasha Azhi Putra",
      date: "10 Maret 2024",
      code: "00eb19a6-0359-407d-a47b-ece1233331236",
      category: "DISPEN",
      timeOut: "10.00",
      timeIn: "12.40",
    },
  ];

  const badgeText = (text) => {
    if (text === "DISPEN") {
      return (
        <View
          style={{
            backgroundColor: "#A9E0FF",
            flex: 1,
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#053f5e",
              fontSize: 20,
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
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#f9a813",
              fontSize: 20,
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
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#d91d1d",
              fontSize: 20,
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
    <ScrollView style={{ flexGrow: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
          paddingHorizontal: 25,
        }}
      >
        {dataDummyCard
          .slice()
          .reverse()
          .map((item, idx) => {
            return (
              <View key={idx} style={{ width: "100%", marginBottom: 20 }}>
                <View
                  style={{
                    padding: 7,
                    backgroundColor: "#D0DFED",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                  }}
                >
                  <Text style={{ fontSize: 15, color: "#333333" }}>
                    Kode Tiket
                  </Text>
                  <Text style={{ fontWeight: "bold", color: "#333333" }}>
                    {item.code}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderWidth: 1,
                    borderColor: "#A9E0FF",
                    backgroundColor: "#fff",
                    borderRadius: 13,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15 }}>{item.date}</Text>
                    <View style={{ flexWrap: "wrap", width: "75%" }}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 20,
                          color: "#333333",
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>

                    <View
                      style={{
                        padding: 7,
                        marginTop: 10,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <MaterialIcons
                          name="directions-walk"
                          size={30}
                          color={"#333333"}
                        />
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#333333",
                          }}
                        >
                          {item.timeOut}
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontSize: 20,
                          marginHorizontal: "5%",
                          fontWeight: "bold",
                          color: "#333333",
                        }}
                      >
                        -
                      </Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#333333",
                          }}
                        >
                          {item.timeIn === null ? "?" : item.timeIn}
                        </Text>
                        {item.timeIn === null ? null : (
                          <MaterialIcons
                            name="directions-walk"
                            size={30}
                            color={"#333333"}
                            style={{ transform: [{ rotateY: "180deg" }] }}
                          />
                        )}
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 10,
                        justifyContent: "space-between",
                      }}
                    >
                      {badgeText(item.category)}
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("HistoryDetail", {
                            codeTicket: item.code,
                          })
                        }
                        style={{
                          flex: 1,
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: "#053f5e",
                          padding: 5,
                        }}
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#053f5e",
                          }}
                        >
                          Lihat detail
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default HistoryScreen;
