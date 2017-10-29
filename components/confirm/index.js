import React, { Component } from 'react';
import { View,  StyleSheet, Image, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView, FlatList} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Tab, Tabs, TabHeading, Icon, Button, Separator, Right, Body, Left, Title, Card, CardItem, Input, Switch } from 'native-base';
import { Row, Column as Col} from 'react-native-responsive-grid'
import faker from 'faker'
import Expo from "expo";
import { NavigationActions } from 'react-navigation'

export default class Confirm extends Component<{}> {
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
                      {
                          Platform.OS != 'ios'&&<Icon name="md-arrow-round-back" style={{ color: "white"}} />
                      }
                      {
                          Platform.OS == 'ios'&&<Icon name='ios-arrow-back' style={{ color: "black"}} />
                      }
                  </Button>
              </Left>
              <Body>
                  <Title>Order</Title>
              </Body>
              <Right>
                  {
                      Platform.OS != 'ios'&&<Text style={{ color: 'white' }}>Order</Text>
                  }
                  {
                      Platform.OS == 'ios'&&<Text style={{ color: 'black' }}>Order</Text>
                  }
              </Right>
          </Header>
          {
              this.state.isReady?
              <Content style={styles.content}>
                <List>
                    <ListItem itemDivider>
                        <Text>รายละเอียด ผู้ชื้อ</Text>
                    </ListItem>
                    <ListItem icon onPress={() => this.props.navigation.navigate('Map') }>
                        <Left>
                            <Icon name="ios-pin-outline" />
                        </Left>
                        <Body>
                            <Text>เลือกสถานที่</Text>
                        </Body>
                        <Right>
                                <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-person-outline" />
                        </Left>
                        <Body>
                            <TextInput
                            style={{ width: '100%'}}
                                    editable = {true}
                                    maxLength = {40}
                                    placeholder="ชื่อ - นามสกุล"
                                  />
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-call-outline" />
                        </Left>
                        <Body>
                        <TextInput
                        style={{ width: '100%'}}
                                editable = {true}
                                maxLength = {40}
                                placeholder="เบอร์ติดต่อ"
                              />
                        </Body>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>รายละเอียด ร้าน</Text>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-pin-outline" />
                        </Left>
                        <Body>
                            <Text numberOfLines={1}>เอกมัย กรุงเทพ มหานคร</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="ios-person-outline" />
                        </Left>
                        <Body>
                            <Text>ร้านกุ้งหอยไข่มุก</Text>
                        </Body>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>สรุปผล</Text>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Text>ระยะทาง</Text>
                        </Left>
                        <Body />
                        <Right>
                            <Text numberOfLines={1}>0 กม</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Text>ค่าขนส่ง</Text>
                        </Left>
                        <Body />
                        <Right>
                            <Text>54 บาท</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Text>ค่าอาหาร</Text>
                        </Left>
                        <Body />
                        <Right>
                            <Text>100 บาท</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Text>รวมทั้งหมด</Text>
                        </Left>
                        <Body />
                        <Right>
                            <Text>154 บาท</Text>
                        </Right>
                    </ListItem>
                </List>
              </Content>
              :
              <Content>
              </Content>
          }
        </Container>
      )
    }
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white'
    },
    fontRobo: {
        fontSize: 15,
        fontFamily: "Roboto"
    },
    statusBar: {
        backgroundColor: "#000",
        height: Expo.Constants.statusBarHeight,
    },
    note: {
        fontSize: 12,
        fontFamily: "Roboto",
        color: '#FF7043'
    },
    orderItem: {
        padding: 10,
        borderColor: '#d3d3d3',
        borderWidth: 1
    },
    icon: {fontSize: 30, color: 'black'},
    amount: {fontSize: 20, color: 'black', fontFamily: "Roboto"},
    buttonContinue: {
        width: '100%',
        marginTop: 10,
        marginBottom: 20
    },
    textContinue: { width: '100%', textAlign: 'center'},
    total: {
        fontSize: 15,
        fontFamily: "Roboto",
        color: 'green'
    }
})
