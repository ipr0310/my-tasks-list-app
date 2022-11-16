import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeStackNavigationProps = {
  list: undefined;
  create: undefined;
};

export type ListScreenProps = NativeStackScreenProps<
  HomeStackNavigationProps,
  "list"
>;

export type CreateScreenProps = NativeStackScreenProps<
  HomeStackNavigationProps,
  "create"
>;
