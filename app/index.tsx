import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const colors = useThemeColors();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
      <ThemedText variant="headline" color="grayWhite">
        Pokédex
      </ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#ff0000", flex: 1 },
});
