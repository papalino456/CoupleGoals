import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSignIn } from '@clerk/clerk-expo';

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();

  const onSignInPress = async () => {
    if (!isLoaded) return;
    
    try {
      const result = await signIn.create({
        strategy: 'oauth_google',
        redirectUrl: 'couplegoals://oauth-callback',
      });
      
      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
      }
    } catch (err) {
      console.error('OAuth error:', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CoupleGoals</Text>
      <Text style={styles.subtitle}>Build your future together</Text>
      <View style={styles.buttonContainer}>
        <Button title="Continue with Google" onPress={onSignInPress} />
      </View>
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
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
});
