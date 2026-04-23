import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth, useUser } from '@clerk/clerk-expo';

export default function HomeScreen() {
  const { signOut } = useAuth();
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CoupleGoals</Text>
      <Text style={styles.subtitle}>Welcome, {user?.firstName || 'Partner'}!</Text>
      <Text style={styles.text}>Your shared goals will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
});
