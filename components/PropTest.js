
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Greet from './Greet'

const PropTest = () => {
  return (
    <View style={{}}>
    <Greet greeting={'Welcome To Prop Class'} name={'Joshua'}  />
    <Greet greeting={'Please learn to research'}   />
    </View>
  )
}

export default PropTest

const styles = StyleSheet.create({})