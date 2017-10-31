import React, { Component } from 'react';
import { View,  StyleSheet, Image, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView, FlatList, Dimensions } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Tab, Tabs, TabHeading, Icon, Button, Separator, Right, Body, Left, Title, Card, CardItem, Input, Switch } from 'native-base';
import { Row, Column as Col} from 'react-native-responsive-grid'
import faker from 'faker'
import Expo from "expo";
import { NavigationActions } from 'react-navigation'
import MapView from 'react-native-maps'

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE = 13.74091
const LONGITUDE = 100.58973
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class Map extends Component<{}> {
    state = {
        isReady: false,
        circle: {
            center: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
            },
            radius: 5000,
        },
        polygon: [
            {latitude: 13.74091, longitude: 100.58973},
            {latitude: 13.74099, longitude: 100.58976},
            {latitude: 13.74108, longitude: 100.58971},
            {latitude: 13.74132, longitude: 100.58961},
            {latitude: 13.74153, longitude: 100.5894},
            {latitude: 13.74171, longitude: 100.58924},
            {latitude: 13.74186, longitude: 100.58918},
            {latitude: 13.74209, longitude: 100.58919},
            {latitude: 13.74295, longitude: 100.58948},
            {latitude: 13.74333, longitude: 100.5896},
            {latitude: 13.74348, longitude: 100.58955},
            {latitude: 13.74364, longitude: 100.58943},
            {latitude: 13.74366, longitude: 100.58933},
            {latitude: 13.74379, longitude: 100.58875},

            {latitude: 13.74386, longitude: 100.58837},
            {latitude: 13.74401, longitude: 100.58766},

            {latitude: 13.74414, longitude: 100.58705},
            {latitude: 13.74441, longitude: 100.58593},
            {latitude: 13.74462, longitude: 100.58502},
            {latitude: 13.7447, longitude: 100.58472},
            {latitude: 13.74508, longitude: 100.58482},

            {latitude: 13.74555, longitude: 100.58494},

            {latitude: 13.74582, longitude: 100.58501},
            {latitude: 13.74622, longitude: 100.58511},

            {latitude: 13.74624, longitude: 100.58503},
            {latitude: 13.74629, longitude: 100.58487},

            {latitude: 13.74634, longitude: 100.58468},
            {latitude: 13.74653, longitude: 100.58474},

            {latitude: 13.74672, longitude: 100.58479},

            {latitude: 13.74696, longitude: 100.584},
            {latitude: 13.74742, longitude: 100.58241},

            {latitude: 13.74758, longitude: 100.58195},

            {latitude: 13.74768, longitude: 100.58162},

            {latitude: 13.74804, longitude: 100.58172}
        ]
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
                  <Button transparent onPress={() =>  this.props.navigation.navigate('PlaceAutoComplete')} >
                      {
                          Platform.OS != 'ios'&&<Icon name="search" style={{ color: "white"}} />
                      }
                      {
                          Platform.OS == 'ios'&&<Icon name='search' style={{ color: "black"}}/>
                      }
                  </Button>
              </Right>
          </Header>
          {
              this.state.isReady?
              <View style={styles.content}>
              <MapView style={ styles.map }
                  initialRegion={{
                      latitude: 13.74091,
                      longitude:  100.58973,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                  }}>
                      <MapView.Marker
                          coordinate={{latitude: 13.74804, longitude: 100.58172}}
                        />
                    <MapView.Marker
                        coordinate={{latitude: 13.74091, longitude: 100.58973}}
                      />
                      <MapView.Circle
                          center={this.state.circle.center}
                          radius={this.state.circle.radius}
                          fillColor="rgba(0, 0, 255, 0.1)"
                          strokeColor="rgba(0,0,0,0.5)"
                          zIndex={2}
                          strokeWidth={1}
                      />
                      <MapView.Polyline
                          coordinates={this.state.polygon}
                          strokeColor="rgba(0,0,150,0.7)"
                          strokeWidth={4}
                        />
              </MapView>
              </View>
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
    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    statusBar: {
        backgroundColor: "#000",
        height: Expo.Constants.statusBarHeight,
    },
})
