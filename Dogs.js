import React, { Component } from 'react'
import { AppRegistry, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import {getDogs} from './actions/dogs'

/*@connect(
  state => ({
    dogs : state.dogs,
    errors: state.error,
  }),
  dispatch => ({
    loadDogs: () => dispatch(getDogs()),
  }),
)
const Dogs = (props) => {
  return (
    <Text>WHATTTT</Text>
  )
}*/
const Dogs = (props) => {
  const {dogs, error} = props
  return (
    <View>
    <Button
      onPress={props.loadDogs}
      title="DOGGSSSSSS"
      color="#841584"
      accessibilityLabel="DOGGSSSSSS"
    />
    <Text>{JSON.stringify(dogs)}</Text>
    </View>
  )
}

export default connect(
  state => ({
    dogs : state.dogs,
    errors: state.error,
  }),
  dispatch => ({
    loadDogs: () => dispatch(getDogs()),
  })
)(Dogs)
