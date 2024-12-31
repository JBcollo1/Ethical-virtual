import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Command, Laptop, Network } from 'lucide-react-native';
import { useWindowDimensions } from 'react-native';


export default function Home() {
    const { width, height } = Dimensions.get('window');

  // const [fontsLoaded] = useFonts({
  //   Inter: require('./assets/fonts/Inter-Regular.ttf'),
  //   InterBold: require('./assets/fonts/Inter-Bold.ttf'),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
     

      {/* Main content */}
      <View style={[styles.content, { width: width}]}>
        <View style={styles.header}>
           <Image
            source={require('./assets2/photo2.png')}
            style={styles.image}
           />
          <Text style={styles.title}>Welcome to HackLab</Text>
          <Text style={styles.subtitle}>Your Gateway to Ethical Hacking</Text>
        </View>

        {/* Feature list */}
        <View style={styles.features}>
          <View style={styles.featureItem}>
            <View style={styles.iconContainer}>
              <Command size={24} color="#40BAFF" />
            </View>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Central Command Center</Text>
              <Text style={styles.featureDescription}>
                Your mission control for all hacking exercises
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.iconContainer}>
              <Laptop size={24} color="#40BAFF" />
            </View>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>User Workstation</Text>
              <Text style={styles.featureDescription}>
                Personalized environment for hands-on practice
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.iconContainer}>
              <Network size={24} color="#40BAFF" />
            </View>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Networking Zone</Text>
              <Text style={styles.featureDescription}>
                Master network security concepts
              </Text>
            </View>
          </View>
        </View>

      
        {/* Get Started button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,

    backgroundColor: '#0A1229',
  },
 
  content: {
    // flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    alignSelf: 'center', 
  },
  image:{
   width:360,
   height:200,
   marginLeft:-20,
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontFamily: 'InterBold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#40BAFF',
    fontFamily: 'Inter',
  },
  features: {
    marginTop: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(64, 186, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'InterBold',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#8F9BB3',
    fontFamily: 'Inter',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2E3A59',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#40BAFF',
  },
  button: {
    backgroundColor: '#2E5CFF',
    borderRadius: 12,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'InterBold',
  },
});
