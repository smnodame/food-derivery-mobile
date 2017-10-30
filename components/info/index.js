import React, { Component } from 'react';
import { View,  StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, FlatList} from 'react-native';
import { Container, Header, Content, List, ListItem, Title, Text, Tab, Tabs, Segment, Badge, TabHeading, Icon, Button, Separator, Right, Body, Left, Card, CardItem, Thumbnail, FooterTab, Footer } from 'native-base';
import { Row, Column as Col} from 'react-native-responsive-grid'
import faker from 'faker'
import ImageSlider from 'react-native-image-slider';
import { AuthSession } from 'expo';

export default class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            logged: false
        }
    }

    _handlePressAsync = async () => {
        console.log('==================')

        const result = await AuthSession.startAsync({
              authUrl:
                'https://smnodame.auth0.com/authorize?'+
                'scope=openid%20name%20picture&'+
                'response_type=token&'+
                'client_id=ynsH1st6PtA5Ey3DBty58CKJm9RMe6Wp&'+
                'redirect_uri=https://auth.expo.io/@anonymous/food-delivery-8ed01021-85f4-4a3d-9870-ee4bae97f0fa'
            })
    }

  render() {
    return (
        this.state.logged?
        <Container >
            <Content style={{ backgroundColor: 'white'}}>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', padding: 15 }}>
                    <Image source={{ uri: 'http://www.chingcancook.com/head_photo/02_20150122172551GLWY.jpg' }} style={{ width: 120, height: 120, borderRadius: 60}}/>
                    <Text style={{ marginTop: 10, fontSize: 20 }}>สมชาย ใจดี</Text>
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
                            <Text>สมชาย ใจดี</Text>
                        </Body>
                    </ListItem>
                    <ListItem >
                        <Left>
                            <Text>อีเมล์</Text>
                        </Left>
                        <Body>
                            <Text>testuser@mail.com</Text>
                        </Body>
                    </ListItem>
                    <ListItem >
                        <Left>
                            <Text>เบอร์ติดต่อ</Text>
                        </Left>
                        <Body>
                            <Text>0812345678</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>ที่อยู่</Text>
                        </Left>
                        <Body>
                            <Text>พิษณุโลก</Text>
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
