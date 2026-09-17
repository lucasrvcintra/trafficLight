import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";

type LightColor = "red" | "yellow" | "green";

export default function TrafficLightScreen() {
  const [activeLight, setActiveLight] = useState<LightColor>("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((current) => {
        if (current === "red") return "green";
        if (current === "green") return "yellow";
        return "red";
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView edges={["bottom", "left", "right"]} style={styles.content}>
        <View style={styles.trafficLightContainer}>
          <View style={styles.verticalTrafficLight}>
            <View
              style={[
                styles.light,
                styles.redLight,
                activeLight !== "red" && styles.offLight,
              ]}
            />
            <View
              style={[
                styles.light,
                styles.yellowLight,
                activeLight !== "yellow" && styles.offLight,
              ]}
            />
            <View
              style={[
                styles.light,
                styles.greenLight,
                activeLight !== "green" && styles.offLight,
              ]}
            />
          </View>

          <View style={styles.horizontalTrafficLight}>
            <View
              style={[
                styles.light,
                styles.redLight,
                activeLight !== "red" && styles.offLight,
              ]}
            />
            <View
              style={[
                styles.light,
                styles.yellowLight,
                activeLight !== "yellow" && styles.offLight,
              ]}
            />
            <View
              style={[
                styles.light,
                styles.greenLight,
                activeLight !== "green" && styles.offLight,
              ]}
            />
          </View>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 30,
  },
  trafficLightContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  verticalTrafficLight: {
    width: 100,
    height: 260,
    backgroundColor: "#222222",
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
    borderWidth: 2,
    borderColor: "#444444",
  },
  horizontalTrafficLight: {
    width: 260,
    height: 100,
    backgroundColor: "#222222",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: "#444444",
  },
  light: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  redLight: {
    backgroundColor: "#FF3B30",
  },
  yellowLight: {
    backgroundColor: "#FFCC00",
  },
  greenLight: {
    backgroundColor: "#34C759",
  },
  offLight: {
    opacity: 0.25,
  },
});
