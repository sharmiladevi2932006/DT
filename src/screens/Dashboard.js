import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'

export default function SelectDepartmentScreen({ navigation }) {
  const [selectedDepartment, setSelectedDepartment] = useState('')

  const departments = ['CSE', 'ECE', 'CSBS', 'IT']


  const onDepartmentPress = (department) => {
    setSelectedDepartment(department)
    // Navigate to SelectYearScreen when a department is pressed
    navigation.navigate('SelectYearScreen')
  }


  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('StartScreen')} /> {/* Go back to StartScreen */}
      <Logo />
      <Header>Select Department</Header>
      <View style={styles.container}>
        {departments.map((department, index) => (
          <TouchableOpacity
            key={department}
            style={[
              styles.departmentBox,
              index % 2 !== 0 ? styles.rightBox : styles.leftBox,
              selectedDepartment === department && styles.selectedBox,
            ]}
            onPress={() => onDepartmentPress(department)}
          >
            <Text style={styles.departmentText}>{department}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  departmentBox: {
    width: '45%',
    paddingVertical: 20,
    marginVertical: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  leftBox: {
    marginRight: '2%',
  },
  rightBox: {
    marginLeft: '2%',
  },
  selectedBox: {
    borderWidth: 2,
    borderColor: theme.colors.accent,
  },
  departmentText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.surface,
  },
})

