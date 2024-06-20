import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Avatar } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          marginTop: 50,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
            Selamat Pagi
          </Text>
          <Text style={{ color: "#ffffff", fontSize: 15, fontWeight: "bold" }}>
            FASHA AZHI PUTRA
          </Text>
        </View>
        <View>
          <Text style={{ color: "#ffffff", fontSize: 15, fontWeight: "bold" }}>
            15 Juni 2024
          </Text>
        </View>
      </View>
      <View style={styles.fullScreenView}>
        <View style={styles.containerContent}>
          {/* Card  */}
          <View style={styles.cardContent}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Avatar
                  size={48}
                  rounded
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/36.jpg",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text
                    style={{
                      color: "#053f5e",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    FASHA AZHI PUTRA
                  </Text>
                  <Text
                    style={{
                      color: "#053f5e",
                      fontWeight: "bold",
                      fontSize: 18,
                    }}
                  >
                    XI IPA 4
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#a8d1f7",
                  borderRadius: 15,
                  padding: 10,
                }}
              >
                <Text style={{ color: "#053f5e", fontWeight: "bold" }}>
                  YYT
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 25 }}>
              <Text style={{ color: "#053f5e", fontWeight: "bold" }}>
                ID Akun:
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{ color: "#053f5e", fontWeight: "bold", fontSize: 15 }}
                >
                  B3oFcYdRqVql78IX2RGU
                </Text>
                <TouchableOpacity
                  style={{
                    marginLeft: 5,
                    padding: 5,
                    backgroundColor: "#bfdaf3",
                    borderRadius: 5,
                  }}
                >
                  <AntDesign name="copy1" size={10} color="#053f5e" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* rekap izin keluar semester ini */}
          <View style={{ marginTop: 25 }}>
            <Text style={{ fontSize: 17, textAlign: "center" }}>
              Rekap Izin Keluar Semester ini
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: "#0D629A",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  width: "24%",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 17,
                    fontWeight: "bold",
                    color: "#333333",
                  }}
                >
                  Dispen
                </Text>
                <Text style={{ fontSize: 20, color: "#333333" }}>50</Text>
                <View
                  style={{
                    marginTop: 5,
                    height: 5,
                    backgroundColor: "#0D629A",
                    borderRadius: 5,
                  }}
                ></View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: "#C0A101",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  width: "24%",
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "#333333" }}
                >
                  Izin
                </Text>
                <Text style={{ fontSize: 20, color: "#333333" }}>50</Text>
                <View
                  style={{
                    marginTop: 5,
                    height: 5,
                    backgroundColor: "#C0A101",
                    borderRadius: 5,
                  }}
                ></View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  borderColor: "#C00101",
                  paddingVertical: 5,
                  width: "24%",
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "#333333" }}
                >
                  Bolos
                </Text>
                <Text style={{ fontSize: 20, color: "#333333" }}>50</Text>
                <View
                  style={{
                    marginTop: 5,
                    height: 5,
                    backgroundColor: "#C00101",
                    borderRadius: 5,
                  }}
                ></View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: "#16A34A",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  width: "24%",
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "#333333" }}
                >
                  Pulang
                </Text>
                <Text style={{ fontSize: 20, color: "#333333" }}>50</Text>
                <View
                  style={{
                    marginTop: 5,
                    height: 5,
                    backgroundColor: "#16A34A",
                    borderRadius: 5,
                  }}
                ></View>
              </View>
            </View>
          </View>

          {/* List nama */}
          <View style={{ marginTop: 45 }}>
            <Text style={{ fontSize: 17, color: "#333333" }}>List Nama</Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 15,
                marginTop: 10,
              }}
              TouchableOpacity
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("ListGuruMapel")}
                style={{
                  backgroundColor: "blue",
                  paddingVertical: 15,
                  width: "24%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,

                  elevation: 7,
                }}
              >
                <FontAwesome6 name="user-circle" size={30} color="#333333" />
                <Text
                  style={{
                    color: "#333333",
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  Guru Mapel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("ListGuruBK")}
                style={{
                  backgroundColor: "blue",
                  paddingVertical: 15,
                  width: "24%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,

                  elevation: 7,
                }}
              >
                <FontAwesome6 name="user-circle" size={30} color="#222222" />
                <Text
                  style={{
                    color: "#222222",
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  Guru BK
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("ListGuruPiket")}
                style={{
                  backgroundColor: "blue",
                  paddingVertical: 15,
                  width: "24%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,

                  elevation: 7,
                }}
              >
                <FontAwesome6 name="user-circle" size={30} color="#222222" />
                <Text
                  style={{
                    color: "#222222",
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  Guru Piket
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("ListSecurity")}
                style={{
                  backgroundColor: "blue",
                  paddingVertical: 15,
                  width: "24%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,

                  elevation: 7,
                }}
              >
                <FontAwesome6 name="user-circle" size={30} color="#222222" />
                <Text
                  style={{
                    color: "#222222",
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  Satpam
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#053f5e",
  },
  fullScreenView: {
    backgroundColor: "#F7F8FA",
    padding: 20,
    minHeight: Dimensions.get("window").height * 0.8,
    marginTop: (Dimensions.get("window").height * 1) / 5.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  containerContent: {
    width: "100%",
    height: "100%",
    // borderWidth: 1,
    transform: [{ translateY: -80 }],
  },
  cardContent: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default HomeScreen;
