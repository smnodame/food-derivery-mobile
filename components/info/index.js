import React, { Component } from 'react';
import { View,  StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, FlatList} from 'react-native';
import { Container, Header, Content, List, ListItem, Title, Text, Tab, Tabs, Segment, Badge, TabHeading, Icon, Button, Separator, Right, Body, Left, Card, CardItem, Thumbnail, FooterTab, Footer } from 'native-base';
import { Row, Column as Col} from 'react-native-responsive-grid'
import faker from 'faker'
import ImageSlider from 'react-native-image-slider';
import Expo from "expo";

export default class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

  render() {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Your Profile</Text>
            <Text style={{ textAlign: 'center', marginTop: 10 }}>Before order, please sing in or create an account.</Text>
            <View style={{ marginTop: 10 }}>
                <Button info><Text> Log in or Create an account</Text></Button>
            </View>
        </View>
    )
  }
}
