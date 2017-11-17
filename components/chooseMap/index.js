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
// https://maps.googleapis.com/maps/api/directions/json?origin=13.7396191,100.5889698&destination=13.7485809,100.5832588&mode=driving
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
        polygon: []
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        })
        const response = await fetch('https://maps.googleapis.com/maps/api/directions/json?origin=13.7396191,100.5889698&destination=13.7485809,100.5832588&mode=driving&key=AIzaSyBwDyJal22jgxbmZ-9TVuIxbKdsj1VBd6U')
        const result = await response.json()
        if (result.routes.length) {
            this.setState({
                polygon: this.decode(result.routes[0].overview_polyline.points) // definition below
            });
        }
        this.setState({ isReady: true })
    }

    decode(t,e){for(var n,o,u=0,l=0,r=0,d= [],h=0,i=0,a=null,c=Math.pow(10,e||5);u<t.length;){a=null,h=0,i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);n=1&i?~(i>>1):i>>1,h=i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);o=1&i?~(i>>1):i>>1,l+=n,r+=o,d.push([l/c,r/c])}return d=d.map(function(t){return{latitude:t[0],longitude:t[1]}})}

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
                      latitude: 13.7396191,
                      longitude:  100.588969,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421
                  }}>
                      <MapView.Marker
                          coordinate={{latitude: 13.7396191, longitude: 100.5889698}}
                        />
                    <MapView.Marker
                        coordinate={{latitude: 13.7485809, longitude: 100.5832588}}
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
