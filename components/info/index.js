import React, { Component } from 'react';
import { View,  StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, FlatList} from 'react-native';
import { Container, Header, Content, List, ListItem, Title, Text, Input, Tab, Item, Label, Tabs, Segment, Badge, TabHeading, Icon, Button, Separator, Right, Body, Left, Card, CardItem, Thumbnail, FooterTab, Footer } from 'native-base';
import { Row, Column as Col} from 'react-native-responsive-grid'
import faker from 'faker'
import ImageSlider from 'react-native-image-slider';
import { AuthSession, Facebook } from 'expo';

export default class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            logged: false,
            info: null
        }
    }

    _handlePressAsync = async () => {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1406405586148086', {
            permissions: ['public_profile'],
        });
        if (type === 'success') {
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            const info = await response.json()
            imageURL = "http://graph.facebook.com/" + info.id + "/picture?type=large"
            this.setState({
                info: {
                    picture: imageURL,
                    name: info.name
                },
                logged: true
            })
        }
    }

  render() {
    return (
        this.state.logged?
        <Container >
            <Content style={{ backgroundColor: 'white'}}>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', padding: 15 }}>
                    <Image source={{ uri: this.state.info.picture }} style={{ width: 120, height: 120, borderRadius: 60}}/>
                    <Text style={{ marginTop: 10, fontSize: 20 }}>{ this.state.info.name }</Text>
                </View>
                <List>
                    <ListItem itemDivider>
                        <Text>รายละเอียด</Text>
                    </ListItem>
                    <ListItem >
                        <Left>
                            <Text>ชื่อ</Text>
                        </Left>
                        <Body>
                            <Text>{ this.state.info.name }</Text>
                        </Body>
                    </ListItem>
                    <ListItem >
                        <Left>
                            <Text>อีเมล์</Text>
                        </Left>
                        <Body>
                        <TextInput
                                style={{ width: '100%'}}
                                editable = {true}
                                maxLength = {40}
                                placeholder="กรุณาเพิ่มอีเมล์"
                              />
                        </Body>
                    </ListItem>
                    <ListItem >
                        <Left>
                            <Text>เบอร์ติดต่อ</Text>
                        </Left>
                        <Body>
                            <TextInput
                                    style={{ width: '100%'}}
                                    editable = {true}
                                    maxLength = {40}
                                    placeholder="กรุณาเพิ่มเบอร์ติดต่อ"
                                  />
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>ที่อยู่</Text>
                        </Left>
                        <Body>
                            <TextInput
                                    style={{ width: '100%'}}
                                    editable = {true}
                                    maxLength = {40}
                                    placeholder="กรุณาเพิ่มที่อยู่ปัจจุบัน"
                                  />
                        </Body>
                    </ListItem>

                </List>
                <Button block danger onPress={() => this.setState({ logged: false })} style={{ margin: 10 }}>
                    <Text>ออกจากระบบ</Text>
                </Button>
            </Content>
        </Container>
        :
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Your Profile</Text>
            <Text style={{ textAlign: 'center', marginTop: 10, marginLeft: 20, marginRight: 20 }}>Before order, please sing in or create an account.</Text>
            <View style={{ marginTop: 10 }}>
                <Button info onPress={() => this._handlePressAsync()}><Text> Log in or Create an account</Text></Button>
            </View>
        </View>
    )
  }
}
