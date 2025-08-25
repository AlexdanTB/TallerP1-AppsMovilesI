import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import NavegadorBottom from './navigations/BottomTab';

export default function App() {
  return (
    <NavegadorBottom/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
