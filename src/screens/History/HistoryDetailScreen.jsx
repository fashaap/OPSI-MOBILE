import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Skeleton } from "@rneui/themed";

const HistoryDetailScreen = () => {
  const route = useRoute();
  const { codeTicket } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const imageUrl = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRET-vdSZCUGSZHPHY0TBpQW-Nqu9ZeZ5KNjg`;

  const badgeText = (text) => {
    let backgroundColor = "";
    let textColor = "";

    switch (text) {
      case "DISPEN":
        backgroundColor = "#A9E0FF";
        textColor = "#053f5e";
        break;
      case "IZIN":
        backgroundColor = "#ffd587";
        textColor = "#f9a813";
        break;
      case "BOLOS":
        backgroundColor = "#ff8587";
        textColor = "#d91d1d";
        break;
      default:
        backgroundColor = "#e0e0e0";
        textColor = "#555";
    }

    return (
      <View
        style={{
          backgroundColor,
          paddingVertical: 6,
          paddingHorizontal: 12,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            color: textColor,
            fontSize: 14,
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {text}
        </Text>
      </View>
    );
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
      <View style={{ marginBottom: 20 }}>
        {isLoading ? (
          <Skeleton width={90} height={16} />
        ) : (
          <Text style={{ color: "#555", fontSize: 16, marginBottom: 5 }}>
            Kode Tiket
          </Text>
        )}
        {isLoading ? (
          <Skeleton style={{ marginTop: 5 }} width={200} height={18} />
        ) : (
          <Text style={{ color: "#333", fontSize: 15, fontWeight: "bold" }}>
            {codeTicket}
          </Text>
        )}
      </View>

      <View
        style={{
          padding: 20,
          marginBottom: 40,
          borderRadius: 10,
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View>
            {isLoading ? (
              <Skeleton width={100} height={16} />
            ) : (
              <Text style={{ fontSize: 16, color: "#777" }}>10 Maret 2024</Text>
            )}
            {isLoading ? (
              <Skeleton style={{ marginTop: 5 }} width={170} height={20} />
            ) : (
              <Text style={{ fontWeight: "bold", fontSize: 20, color: "#333" }}>
                Fasha Azhi Putra
              </Text>
            )}
          </View>

          {isLoading ? (
            <Skeleton style={{ borderRadius: 14 }} width={56} height={35} />
          ) : (
            <View>{badgeText("DISPEN")}</View>
          )}
        </View>

        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          {isLoading ? (
            <Skeleton width={150} height={25} />
          ) : (
            <>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>
                10:00
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginHorizontal: 5,
                  color: "#333",
                }}
              >
                -
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>
                12:00
              </Text>
            </>
          )}
        </View>

        <View style={{ marginBottom: 20 }}>
          {isLoading ? (
            <Skeleton style={{ marginBottom: 5 }} width={100} height={15} />
          ) : (
            <Text style={{ fontWeight: "bold", marginBottom: 5, color: "#333" }}>
              Alasan:
            </Text>
          )}
          {isLoading ? (
            <Skeleton width={"100%"} height={200} />
          ) : (
            <Text style={{ color: "#555", lineHeight: 22 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              atque dolores voluptates, id quo minus libero fugit ad officia
              magni dicta temporibus possimus, molestiae, neque cumque? Ratione
              tenetur eligendi assumenda. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Praesentium quisquam ipsam aut possimus alias
              repellendus vero delectus doloremque. Ratione atque exercitationem
              in dignissimos, a maxime error dicta. Commodi, neque nisi?
            </Text>
          )}
        </View>

        <View style={{ marginBottom: 20 }}>
          {isLoading ? (
            <Skeleton style={{ marginBottom: 5 }} width={100} height={15} />
          ) : (
            <Text style={{ fontWeight: "bold", marginBottom: 5, color: "#333" }}>
              Bukti:
            </Text>
          )}
          {isLoading ? (
            <Skeleton width={"100%"} height={200} />
          ) : (
            <View
              style={{
                borderWidth: 1,
                height: 200,
                borderRadius: 10,
                borderColor: "#e0e0e0",
                backgroundColor: "#f9f9f9",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              {imageUrl ? (
                <>
                  <Image
                    source={{ uri: imageUrl }}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                  />
                  {!modalVisible && (
                    <TouchableOpacity
                      style={styles.viewImageButton}
                      onPress={() => setModalVisible(true)}
                    >
                      <Text style={styles.viewImageText}>View Image</Text>
                    </TouchableOpacity>
                  )}
                </>
              ) : (
                <Text style={{ color: "#999" }}>No Image</Text>
              )}
            </View>
          )}
        </View>
      </View>

      {imageUrl && (
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Tutup</Text>
            </TouchableOpacity>
            <Image
              source={{ uri: imageUrl }}
              style={styles.modalImage}
              resizeMode="contain"
            />
          </View>
        </Modal>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.7,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  viewImageButton: {
    position: "absolute",
    bottom: 10,
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  viewImageText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default HistoryDetailScreen;
