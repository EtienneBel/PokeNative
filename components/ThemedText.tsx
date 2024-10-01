import { Text, type TextProps } from "react-native";

type Props = TextProps & {
  variant?: string;
  color?: string;
};

export function ThemedText({ variant, color, ...rest }: Props) {
  return <Text {...rest} />;
}
