import React, { Component } from 'react';
import { View,  StyleSheet, Platform, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, FlatList} from 'react-native';
import { Container, Header, Content, List, ListItem, Title, Text, Tab, Tabs, Segment, Badge, TabHeading, Icon, Button, Separator, Right, Body, Left, Card, CardItem, Thumbnail, FooterTab, Footer } from 'native-base';
import { Row, Column as Col} from 'react-native-responsive-grid'
import faker from 'faker'
import ImageSlider from 'react-native-image-slider';
import Expo from "expo";
import { StackNavigator } from 'react-navigation'
import Home from './components/home'
import History from './components/history'
import Info from './components/info'

import SeacthResult from './components/searchResult'
import Detail from './components/detail'
import Basket from './components/basket'
import Confirm from './components/confirm'
import Map from './components/chooseMap'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isReady: false,
            tab: 'home'
        }
        this.selectTab = this.selectTab.bind(this)
        this.renderContent = this.renderContent.bind(this)
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        })
        this.setState({ isReady: true })
    }

    selectTab(tab) {
        this.setState({ tab: tab })
    }

    renderContent() {
        if(this.state.tab == 'home') {
            return (
                <Home screenProps={{ rootNavigation: this.props.navigation }} />
            )
        } else if (this.state.tab == 'history') {
            return (
                <History screenProps={{ rootNavigation: this.props.navigation }}/>
            )
        } else {
            return (
                <Info screenProps={{ rootNavigation: this.props.navigation }}/>
            )
        }
    }

  render() {
    return (
        this.state.isReady?
        <Container style={styles.container}>
            {
                 Platform.OS != 'ios'&&<View style={styles.statusBar} />
            }
            <Header>
                <Body>
                    <Title>FOOD DELIVERY</Title>
                </Body>
            </Header>
            {
                this.renderContent()
            }
            <Footer>
                <FooterTab>
                    <Button vertical onPress={() => this.selectTab('home')}>
                        <Icon name="ios-home-outline" />
                        <Text  numberOfLines={1}>Home</Text>
                    </Button>
                    <Button vertical onPress={() => this.selectTab('history')}>
                        <Icon name="ios-time-outline" />
                        <Text  numberOfLines={1}>History</Text>
                    </Button>
                    <Button vertical onPress={() => this.selectTab('info')}>
                        <Icon name="person" />
                        <Text  numberOfLines={1}>Info</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>:
        <Container>
        </Container>

    )
  }
}

export default StackNavigator({
    Home: { screen: App },
    SeacthResult: { screen: SeacthResult },
    Detail: { screen: Detail },
    Basket: { screen: Basket },
    Confirm: { screen: Confirm },
    Map: { screen: Map }
},
{
    initialRouteName: "Home",
    headerMode: "none"
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
    },
    statusBar: {
        backgroundColor: "#000",
        height: Expo.Constants.statusBarHeight,
    },
    content: {
        padding: 10,
        backgroundColor: '#f4f4f4'
    },
    title: {
        fontSize: 16,
        fontFamily: "Roboto",
        paddingBottom: 5
    },
    description: {
        fontSize: 12,
        fontFamily: "Roboto",
        color: '#FF7043'
    },
    category: {
        fontSize: 12,
        fontFamily: "Roboto",
        color: '#bdbdbd'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'black',
        opacity: 0.5
    }
})
