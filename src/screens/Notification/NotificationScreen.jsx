import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Skeleton } from "@rneui/themed";

const NotificationScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  const notifications = [
    {
      id: 1,
      title: "SI MIKA",
      time: "12:00",
      message: "Anda tidak diizinkan oleh guru piket",
    },
    {
      id: 2,
      title: "SI MIKA",
      time: "14, November 2024",
      message: "Anda tidak diizinkan oleh guru piket",
    },
  ];

  return (
    <ScrollView
      style={{
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: "#F7F8FA",
      }}
    >
      <View style={{ flexDirection: "column", justifyContent: "center" }}>
        {notifications.map((notification, idx) =>
          isLoading ? (
            <Skeleton
              width={"100%"}
              style={{ marginBottom: 20, borderRadius: 15 }}
              height={80}
              key={idx}
            ></Skeleton>
          ) : (
            <View
              key={idx}
              style={{
                padding: 15,
                backgroundColor: "#fff",
                borderRadius: 15,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 5,
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="notifications-sharp" size={24} color="#555" />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#555",
                    }}
                  >
                    {notification.title}
                  </Text>
                </View>
                <Text style={{ color: "#999" }}>{notification.time}</Text>
              </View>
              <Text style={{ fontSize: 16, color: "#666" }}>
                {notification.message}
              </Text>
            </View>
          )
        )}
      </View>
    </ScrollView>
  );
};

export default NotificationScreen;
