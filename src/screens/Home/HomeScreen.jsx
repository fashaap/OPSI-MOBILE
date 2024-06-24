import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Alert,
} from "react-native";
import React from "react";
import { Avatar, Skeleton } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { statusForm } from "../../data/userInfo";
import * as Clipboard from "expo-clipboard";
import CountdownTimerSmall from "../../components/CountdownTimerSmall";
import { useState } from "react";

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const data = {
    name: statusForm.name,
    id: statusForm.id,
    time: statusForm.time,
  };

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("id-ID", options);
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(id);
    if (Platform.OS === "android") {
      ToastAndroid.show("ID telah disalin ke clipboard", ToastAndroid.SHORT);
    } else {
      Alert.alert("Disalin ke Papan Klip", "ID telah disalin ke papan klip");
    }
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {statusForm.status === 3333 || statusForm.status === 4444 ? (
          <View
            style={{
              paddingTop: Platform.OS === "android" ? 65 : 50,
              backgroundColor: "#FFA700",
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontWeight: "300" }}>
              Anda sedang dalam status dispensasi. Harap menggunakan aplikasi
              dengan bijak. Waktu Anda tersisa{" "}
              <CountdownTimerSmall countdown={data.time} /> jam untuk kembali ke
              sekolah. Jika Anda mengalami masalah, hubungi guru piket atau wali
              kelas Anda.
            </Text>
          </View>
        ) : null}

        <View
          style={{
            marginTop: statusForm.status === 3333 ? 10 : 65,
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            {isLoading ? (
              <Skeleton width={100} height={15}></Skeleton>
            ) : (
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                Selamat Pagi
              </Text>
            )}

            {isLoading ? (
              <Skeleton
                width={200}
                style={{ marginTop: 5 }}
                height={25}
              ></Skeleton>
            ) : (
              <Text
                style={{ color: "#ffffff", fontSize: 15, fontWeight: "bold" }}
              >
                {data.name}
              </Text>
            )}
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {isLoading ? (
              <Skeleton width={90} height={20}></Skeleton>
            ) : (
              <Text
                style={{ color: "#ffffff", fontSize: 15, fontWeight: "bold" }}
              >
                {formatDate(new Date())}
              </Text>
            )}
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
                  onPress={() => navigation.navigate("EditProfile")}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  {isLoading ? (
                    <Skeleton
                      width={48}
                      height={48}
                      style={{ borderRadius: 24 }}
                    ></Skeleton>
                  ) : (
                    <Avatar
                      size={48}
                      rounded
                      source={{
                        uri: "https://randomuser.me/api/portraits/men/36.jpg",
                      }}
                    />
                  )}

                  <View style={{ marginLeft: 15 }}>
                    {isLoading ? (
                      <Skeleton width={160} height={20}></Skeleton>
                    ) : (
                      <Text
                        style={{
                          color: "#053f5e",
                          fontWeight: "bold",
                          fontSize: 20,
                        }}
                      >
                        FASHA AZHI PUTRA
                      </Text>
                    )}

                    {isLoading ? (
                      <Skeleton
                        width={80}
                        style={{ marginTop: 5 }}
                        height={20}
                      ></Skeleton>
                    ) : (
                      <Text
                        style={{
                          color: "#053f5e",
                          fontWeight: "bold",
                          fontSize: 18,
                        }}
                      >
                        XI IPA 4
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>

                {isLoading ? (
                  <Skeleton
                    width={50}
                    height={40}
                    style={{ borderRadius: 15 }}
                  ></Skeleton>
                ) : (
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
                )}
              </View>
              <View style={{ marginTop: 25 }}>
                {isLoading ? (
                  <Skeleton width={60} height={15}></Skeleton>
                ) : (
                  <Text style={{ color: "#053f5e", fontWeight: "bold" }}>
                    ID Akun:
                  </Text>
                )}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {isLoading ? (
                    <Skeleton
                      width={200}
                      style={{ marginTop: 5 }}
                      height={25}
                    ></Skeleton>
                  ) : (
                    <>
                      <Text
                        style={{
                          color: "#053f5e",
                          fontWeight: "bold",
                          fontSize: 15,
                        }}
                      >
                        {data.id}
                      </Text>
                      <TouchableOpacity
                        onPress={copyToClipboard}
                        style={{
                          marginLeft: 5,
                          padding: 5,
                          backgroundColor: "#bfdaf3",
                          borderRadius: 5,
                        }}
                      >
                        <AntDesign name="copy1" size={10} color="#053f5e" />
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </View>
            </View>

            {/* rekap izin keluar semester ini */}
            <View style={{ marginTop: 25 }}>
              {isLoading ? (
                <Skeleton
                  style={{ alignSelf: "center" }}
                  width={200}
                  height={17}
                ></Skeleton>
              ) : (
                <Text style={{ fontSize: 17, textAlign: "center" }}>
                  Rekap Izin Keluar Semester ini
                </Text>
              )}
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  justifyContent: "space-between",
                }}
              >
                {isLoading ? (
                  <Skeleton width={75} height={57}></Skeleton>
                ) : (
                  <View
                    style={{
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.22,
                      shadowRadius: 2.22,

                      elevation: 3,

                      backgroundColor: "#fff",
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
                )}

                {isLoading ? (
                  <Skeleton width={75} height={57}></Skeleton>
                ) : (
                  <View
                    style={{
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.22,
                      shadowRadius: 2.22,

                      elevation: 3,

                      backgroundColor: "#fff",
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: "#C0A101",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      width: "24%",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 17,
                        color: "#333333",
                      }}
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
                )}

                {isLoading ? (
                  <Skeleton width={75} height={57}></Skeleton>
                ) : (
                  <View
                    style={{
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.22,
                      shadowRadius: 2.22,

                      elevation: 3,

                      backgroundColor: "#fff",
                      borderWidth: 1,
                      borderRadius: 5,
                      paddingHorizontal: 10,
                      borderColor: "#C00101",
                      paddingVertical: 5,
                      width: "24%",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 17,
                        color: "#333333",
                      }}
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
                )}

                {isLoading ? (
                  <Skeleton width={75} height={57}></Skeleton>
                ) : (
                  <View
                    style={{
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.22,
                      shadowRadius: 2.22,

                      elevation: 3,

                      backgroundColor: "#fff",
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: "#16A34A",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      width: "24%",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 17,
                        color: "#333333",
                      }}
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
                )}
              </View>
            </View>

            {/* List nama */}
            <View style={{ marginTop: 45 }}>
              {isLoading ? (
                <Skeleton width={100} height={17}></Skeleton>
              ) : (
                <Text style={{ fontSize: 17, color: "#333333" }}>
                  List Nama
                </Text>
              )}
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 15,
                  marginTop: 10,
                }}
                TouchableOpacity
              >
                {isLoading ? (
                  <Skeleton width={80} height={90}></Skeleton>
                ) : (
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
                        height: 1,
                      },
                      shadowOpacity: 0.22,
                      shadowRadius: 2.22,

                      elevation: 3,
                    }}
                  >
                    <FontAwesome6
                      name="user-circle"
                      size={30}
                      color="#333333"
                    />
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
                )}

                {isLoading ? (
                  <Skeleton width={80} height={90}></Skeleton>
                ) : (
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
                        height: 1,
                      },
                      shadowOpacity: 0.22,
                      shadowRadius: 2.22,

                      elevation: 3,
                    }}
                  >
                    <FontAwesome6
                      name="user-circle"
                      size={30}
                      color="#222222"
                    />
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
                )}

                {isLoading ? (
                  <Skeleton width={80} height={90}></Skeleton>
                ) : (
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
                        height: 1,
                      },
                      shadowOpacity: 0.22,
                      shadowRadius: 2.22,

                      elevation: 3,
                    }}
                  >
                    <FontAwesome6
                      name="user-circle"
                      size={30}
                      color="#222222"
                    />
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
                )}

                {isLoading ? (
                  <Skeleton width={80} height={90}></Skeleton>
                ) : (
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
                        height: 1,
                      },
                      shadowOpacity: 0.22,
                      shadowRadius: 2.22,

                      elevation: 3,
                    }}
                  >
                    <FontAwesome6
                      name="user-circle"
                      size={30}
                      color="#222222"
                    />
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
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
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
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default HomeScreen;
