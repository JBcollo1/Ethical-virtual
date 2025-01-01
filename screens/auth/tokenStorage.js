// src/auth/tokenStorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const encryptToken = (token) => Buffer.from(token).toString('base64');
const decryptToken = (encryptedToken) => Buffer.from(encryptedToken, 'base64').toString('ascii');

const storage = Platform.select({
  web: {
    async setItem(key, value) {
      const encrypted = encryptToken(value);
      await AsyncStorage.setItem(key, encrypted);
    },
    async getItem(key) {
      const encrypted = await AsyncStorage.getItem(key);
      return encrypted ? decryptToken(encrypted) : null;
    },
    async removeItem(key) {
      await AsyncStorage.removeItem(key);
    },
  },
  default: {
    async setItem(key, value) {
      await SecureStore.setItemAsync(key, value);
    },
    async getItem(key) {
      return await SecureStore.getItemAsync(key);
    },
    async removeItem(key) {
      await SecureStore.deleteItemAsync(key);
    },
  },
});

export const setTokens = async (accessToken, refreshToken) => {
  await storage.setItem('accessToken', accessToken);
  await storage.setItem('refreshToken', refreshToken);
};

export const getTokens = async () => {
  const accessToken = await storage.getItem('accessToken');
  const refreshToken = await storage.getItem('refreshToken');
  return { accessToken, refreshToken };
};

export const clearTokens = async () => {
  await storage.removeItem('accessToken');
  await storage.removeItem('refreshToken');
};
