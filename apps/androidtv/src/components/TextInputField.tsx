import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

export default function TextInputField({ label, value, onChangeText, secureTextEntry }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={label}
        placeholderTextColor="#888"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  label: { color: 'white', marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: '#555',
    padding: 10,
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#222',
  },
});
