import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'

export default function OptionsScreen({ navigation }) {
  const options = [
    {
      name: 'RAG AI',
      image: require('../assets/rag-ai.jpg'), // Replace with your actual image path
      description: 'Get assistance with AI-powered solutions.',
    },
    {
      name: 'Chat',
      image: require('../assets/chat.webp'), // Replace with your actual image path
      description: 'Engage in interactive conversations.',
    },
    {
      name: 'Study Materials',
      image: require('../assets/study-materials.jpeg'), // Corrected file extension
      description: 'Access a wealth of study resources.',
    },
  ]

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('SelectYearScreen')} /> {/* Go back to Dashboard */}
      <Logo />
      <Header>Select an Option</Header>
      <View style={styles.container}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.name}
            style={styles.optionBox}
            onPress={() => {
              // Handle navigation to the respective screens
              // You can navigate to different screens based on the option selected
            }}
          >
            <Image source={option.image} style={styles.optionImage} />
            <Text style={styles.optionText}>{option.name}</Text>
            <Text style={styles.optionDescription}>{option.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: theme.colors.background,
  },
  optionBox: {
    width: '80%', // Set width for the option box
    paddingVertical: 20,
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Semi-transparent white background for glassmorphism
    borderRadius: 16, // Increased border radius for more rounded corners
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Increased elevation for a stronger shadow effect
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 6, // Shadow radius
  },
  optionImage: {
    width: 60, // Width of the image
    height: 60, // Height of the image
    marginBottom: 10, // Space between image and text
  },
  optionText: {
    fontSize: 20, // Font size for option name
    fontWeight: 'bold',
    color: 'black', // Changed font color to black
  },
  optionDescription: {
    fontSize: 16, // Font size for option description
    color: 'black', // Changed font color to black
    textAlign: 'center', // Center align the description text
  },
})