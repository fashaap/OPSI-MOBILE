import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + "...";
  }
  return text;
};

const HomeScreen = () => {
  const name = "FASHA AZHI PUTRA";
  const truncatedName = truncateText(name, 20);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.containerMorning}>
          <Text style={styles.textMorning}>Selamat pagi</Text>
          <Text style={styles.textMorningName}>Fasha Azhi Putra</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Text style={{ fontSize: 20, color: "#ffffff" }}>100</Text>
            <Text
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: 20,
                color: "#ffffff",
              }}
            >
              DISPEN
            </Text>
          </View>
          <View style={{ marginRight: 10 }}>
            <Text style={{ fontSize: 20, color: "#ffffff" }}>100</Text>
            <Text
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: 20,
                color: "#ffffff",
              }}
            >
              IZIN
            </Text>
          </View>
          <View style={{ marginRight: 10 }}>
            <Text style={{ fontSize: 20, color: "#ffffff" }}>100</Text>
            <Text
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: 20,
                color: "#ffffff",
              }}
            >
              PULANG
            </Text>
          </View>
          <View style={{ marginRight: 10 }}>
            <Text style={{ fontSize: 20, color: "#ffffff" }}>100</Text>
            <Text
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: 20,
                color: "#ffffff",
              }}
            >
              BOLOS
            </Text>
          </View>
        </View>

        <View style={styles.oldCardContainer}>
          <ScrollView
            horizontal={true}
            style={{ flexDirection: "row", gap: 12, marginBottom: 10 }}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                marginRight: 10,
                borderRadius: 5,
                backgroundColor: "#175d9e",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 17, fontWeight: "bold" }}>
                List Guru MAPEL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,

                marginRight: 10,
                borderRadius: 5,
                backgroundColor: "#175d9e",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 17, fontWeight: "bold" }}>
                List Guru PIKET
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,

                marginRight: 10,
                borderRadius: 5,
                backgroundColor: "#175d9e",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 17, fontWeight: "bold" }}>
                List Guru BK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                marginRight: 10,
                borderRadius: 5,
                borderColor: "#ffffff",
                backgroundColor: "#175d9e",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 17, fontWeight: "bold" }}>
                List Penjaga Gerbang
              </Text>
            </TouchableOpacity>
          </ScrollView>

          <View
            style={{
              marginVertical: 10,
              backgroundColor: "#175d9e",
              padding: 10,
              borderRadius: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialIcons
                name="announcement"
                size={24}
                color="#fff"
                style={{ marginRight: 5 }}
              />
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                Pengumuman
              </Text>
            </View>
            <View>
              <Text style={{ color: "#fff", fontSize: 17 }}>
                Kami mohon maaf atas ketidaknyamanannya. Aplikasi SIMIKA saat
                ini sedang dalam tahap pengembangan dan belum sepenuhnya
                optimal. Terima kasih atas pengertian dan kesabaran Anda.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.newCardContainer}>
          <LinearGradient
            colors={["#134d83", "#1963a9", "#0e5291"]}
            style={styles.card}
          >
            <Text style={styles.cardTitle}>KARTU SIMIKA</Text>
            <View style={styles.containerCardContent}>
              <Avatar
                size={45}
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/36.jpg",
                }}
              />
              <View style={styles.cardTitleNameAndClass}>
                <Text style={styles.cardTitleName}>{truncatedName}</Text>
                <Text style={styles.cardTitleName}>XI IPA 4</Text>
              </View>
              <View style={styles.badgeCode}>
                <Text style={styles.badgeTextCode}>YYT</Text>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.textId}>ID PENGGUNA: </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Text style={{ fontSize: 15, color: "#ffffff" }}>
                  B3oFcYdRqVql78IX2RGU
                </Text>
                <View
                  style={{
                    padding: 3,
                    borderRadius: 5,
                    backgroundColor: "#a7a7a77a",
                  }}
                >
                  <MaterialIcons name="copy-all" size={15} color="#ffffff" />
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerMorning: { paddingTop: 60, paddingHorizontal: 20 },
  textMorning: {
    fontSize: 15,
    color: "#fff",
    textTransform: "uppercase",
  },
  textMorningName: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  container: {
    flex: 1,
    backgroundColor: "#10497f",
    position: "relative",
  },
  scrollContainer: {
    paddingBottom: 200,
  },
  oldCardContainer: {
    backgroundColor: "#e6eaef",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: "27%",
    height: "auto",
    paddingHorizontal: 20,
    marginTop: "25%",
  },
  newCardContainer: {
    position: "absolute",
    top: "33%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  card: {
    borderColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 15,
    width: "92%",
    padding: 15,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
  cardTitleNameAndClass: {
    marginTop: 3,
    marginLeft: 10,
    flex: 1,
    alignContent: "left",
  },
  cardTitleName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
  containerCardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  badgeCode: {
    backgroundColor: "#c9c9c95d",
    padding: 10,
    borderRadius: 15,
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  badgeTextCode: { color: "#fff", fontWeight: "bold" },
  textId: { fontWeight: "600", color: "#fff" },
});

export default HomeScreen;
