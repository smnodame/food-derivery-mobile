import React, { Component } from 'react';
import { View,  StyleSheet, Image, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView, FlatList, Dimensions } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Tab, Tabs, TabHeading, Icon, Button, Separator, Right, Body, Left, Title, Card, CardItem, Input, Switch } from 'native-base';
import faker from 'faker'
import Expo from "expo";
import { NavigationActions } from 'react-navigation'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

export default class PlaceAutoComplete extends Component<{}> {
    state = {
        isReady: false
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        })
        this.setState({ isReady: true })
    }

    render() {
      return (
          <Container>
          {
               Platform.OS != 'ios'&&<View style={styles.statusBar} />
          }
          <Header>
              <Left>
                  <Button transparent onPress={() => this.props.navigation.dispatch(NavigationActions.back()) } >
                      <Icon name='ios-arrow-back' style={{ color: "black"}} />
                  </Button>
              </Left>
              <Body>
                  <Title>Map</Title>
              </Body>
              <Right>
              </Right>
          </Header>
          {
              this.state.isReady?
              <GooglePlacesAutocomplete
                placeholder='Search'
                minLength={2} // minimum length of text to search
                autoFocus={false}
                returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                listViewDisplayed='auto'    // true/false/undefined
                fetchDetails={true}
                renderDescription={(row) => row.description} // custom description render
                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                  console.log(data);
                  console.log(details);
                  this.props.navigation.dispatch(NavigationActions.back())
                }}
                getDefaultValue={() => {
                  return ''; // text input default value
                }}
                query={{
                  // available options: https://developers.google.com/places/web-service/autocomplete
                  key: 'AIzaSyBwDyJal22jgxbmZ-9TVuIxbKdsj1VBd6U',
                  language: 'en', // language of the results
                  types: '(cities)' // default: 'geocode'
                }}
                styles={{
                  description: {
                    fontWeight: 'bold'
                  },
                  predefinedPlacesDescription: {
                    color: '#1faadb'
                  }
                }}

                currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                currentLocationLabel="Current location"
                nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                GoogleReverseGeocodingQuery={{
                  // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                }}
                GooglePlacesSearchQuery={{
                  // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                  rankby: 'distance',
                  types: 'food'
                }}

                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                // predefinedPlaces={[homePlace, workPlace]}

                debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                //renderLeftButton={() =>  <Icon name='ios-arrow-back' style={{ color: "black"}} />}
                //renderRightButton={() => <Text>Custom text after the inputg</Text>}
              />
              :
              <View>
              </View>
          }
        </Container>
      )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    statusBar: {
        backgroundColor: "#000",
        height: Expo.Constants.statusBarHeight,
    },
})
