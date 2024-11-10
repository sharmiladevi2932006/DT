import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'

export default function SelectYearScreen({ navigation }) {
  const years = ['I', 'II', 'III', 'IV']

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('Dashboard')} /> {/* Go back to Dashboard */}
      <Logo />
      <Header>Select Year</Header>
      <View style={styles.container}>
        {years.map((year) => (
          <TouchableOpacity
            key={year}
            style={styles.yearBox} // Style for each year box
            onPress={() => navigation.navigate('OptionsScreen')} // Navigate to OptionsScreen on press
          >
            <Text style={styles.yearText}>{year}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the boxes vertically
    alignItems: 'center', // Center the boxes horizontally
    paddingHorizontal: 16,
    backgroundColor: theme.colors.background, // Optional: Set background color
  },
  yearBox: {
    width: '300%', // Adjust width for proper alignment
    paddingVertical: 20,
    marginVertical: 10,
    backgroundColor: theme.colors.primary, // Background color of the box
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Optional: Add shadow
  },
  yearText: {
    fontSize: 24, // Larger font size for year
    fontWeight: 'bold',
    color: theme.colors.surface,
  },
})