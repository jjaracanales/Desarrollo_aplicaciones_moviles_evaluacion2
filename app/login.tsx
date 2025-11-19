import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { useUser } from '../context/UserContext';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';

// Usuarios predefinidos
const PREDEFINED_USERS = [
  {
    name: 'FRANCISCO ALEJANDRO BERNAL ARAYA',
    email: 'francisco.bernal.araya@estudiante.ipss.cl',
  },
  {
    name: 'JOSE ANTONIO JARA CANALES',
    email: 'jose.jara.canales@estudiante.ipss.cl',
  },
  {
    name: 'RAUL VELOSO ORTIZ',
    email: 'raul.veloso.ortiz@estudiante.ipss.cl',
  },
  {
    name: 'ADOLFO CAMPOS GOMEZ',
    email: 'Adolfo.campos.gomez@estudiante.ipss.cl',
  },
];

export default function LoginScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailFocused, setEmailFocused] = useState<boolean>(false);
  const [passwordFocused, setPasswordFocused] = useState<boolean>(false);
  const { setEmail: setUserEmail } = useUser();

  const handleLogin = () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Por favor ingresa tu email');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Error', 'Por favor ingresa tu contraseña');
      return;
    }

    if (password !== '1234') {
      Alert.alert('Error', 'Contraseña incorrecta');
      return;
    }

    // Guardar el email en el contexto y navegar
    setUserEmail(email);
    router.replace('/(tabs)');
  };

  const handleSelectUser = (userEmail: string) => {
    setEmail(userEmail);
    setPassword('1234');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar style="light" />

      {/* Background with gradient effect */}
      <View style={styles.background}>
        <View style={styles.gradientCircle1} />
        <View style={styles.gradientCircle2} />
      </View>

      <View style={styles.content}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.iconWrapper}>
            <MaterialIcons name="person" size={64} color="#10B981" />
          </View>
          <Text style={styles.titleText}>Login</Text>
          <Text style={styles.subtitleText}>Inicia sesión para continuar</Text>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          {/* Email Input */}
          <View style={styles.inputWrapper}>
            <View style={[styles.inputContainer, emailFocused && styles.inputFocused]}>
              <MaterialIcons
                name="email"
                size={20}
                color={emailFocused ? '#10B981' : '#94A3B8'}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                placeholderTextColor="#94A3B8"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />
            </View>
          </View>

          {/* Quick User Selection */}
          <View style={styles.quickSelectContainer}>
            <Text style={styles.quickSelectTitle}>Selección rápida:</Text>
            <View style={styles.userButtonsGrid}>
              {PREDEFINED_USERS.map((user, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.userButton,
                    email === user.email && styles.userButtonSelected
                  ]}
                  onPress={() => handleSelectUser(user.email)}
                  activeOpacity={0.7}
                >
                  <MaterialIcons
                    name="person"
                    size={16}
                    color={email === user.email ? '#fff' : '#10B981'}
                  />
                  <Text
                    style={[
                      styles.userButtonText,
                      email === user.email && styles.userButtonTextSelected
                    ]}
                    numberOfLines={1}
                  >
                    {user.name.split(' ')[0]}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Password Input */}
          <View style={styles.inputWrapper}>
            <View style={[styles.inputContainer, passwordFocused && styles.inputFocused]}>
              <MaterialIcons
                name="lock-outline"
                size={20}
                color={passwordFocused ? '#10B981' : '#94A3B8'}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#94A3B8"
                value={password}
                onChangeText={setPassword}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                secureTextEntry
                autoCapitalize="none"
                autoComplete="password"
              />
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={[styles.button, (!email.trim() || !password.trim()) && styles.buttonDisabled]}
            onPress={handleLogin}
            disabled={!email.trim() || !password.trim()}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Iniciar sesión</Text>
            <MaterialIcons name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>

          {/* Aviso Contraseña */}
          <Text style={styles.hint}>
            💡 La contraseña es "1234"
          </Text>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Pure black base
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0A0E1A', // Very dark blue-black
  },
  gradientCircle1: {
    position: 'absolute',
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: '#1E3A8A', // Navy blue
    top: -150,
    right: -100,
    opacity: 0.3,
  },
  gradientCircle2: {
    position: 'absolute',
    width: 350,
    height: 350,
    borderRadius: 175,
    backgroundColor: '#3B82F6', // Bright blue
    bottom: -100,
    left: -80,
    opacity: 0.2,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  iconWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(59, 130, 246, 0.2)', // Translucent blue
    borderWidth: 2,
    borderColor: 'rgba(59, 130, 246, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: '#3B82F6',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 12,
  },
  titleText: {
    fontSize: 42,
    fontWeight: '700',
    color: '#FFFFFF', // White text on dark
    marginBottom: 8,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    textShadowColor: 'rgba(59, 130, 246, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: '#60A5FA', // Light blue
    fontWeight: '500',
  },
  formContainer: {
    width: '100%',
  },
  inputWrapper: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Glassmorphism
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  inputFocused: {
    borderColor: '#3B82F6',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    shadowColor: '#3B82F6',
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF', // White text
    fontWeight: '500',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B82F6', // Bright blue for CTA
    paddingVertical: 18,
    borderRadius: 16,
    marginTop: 8,
    shadowColor: '#3B82F6',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 10,
  },
  buttonDisabled: {
    backgroundColor: '#9CA3AF',
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginRight: 8,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  hint: {
    marginTop: 24,
    textAlign: 'center',
    color: '#60A5FA',
    fontSize: 14,
    fontWeight: '500',
  },
  quickSelectContainer: {
    marginBottom: 20,
  },
  quickSelectTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  userButtonsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  userButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    width: '48%',
  },
  userButtonSelected: {
    backgroundColor: 'rgba(59, 130, 246, 0.3)',
    borderColor: '#3B82F6',
  },
  userButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#94A3B8',
    marginLeft: 6,
  },
  userButtonTextSelected: {
    color: '#FFFFFF',
  },
});

