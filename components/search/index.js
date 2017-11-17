import React, { Component } from 'react';
import { View,  StyleSheet, Image, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView, FlatList} from 'react-native';
import { Container, Header, Content, List, ListItem, Title, Text, Tab, Tabs, Item, Input, Segment, Badge, TabHeading, Icon, Button, Separator, Right, Body, Left, Card, CardItem, Thumbnail, Spinner } from 'native-base';
import { Row, Column as Col} from 'react-native-responsive-grid'
import faker from 'faker'
import Expo from "expo";
import { NavigationActions } from 'react-navigation'

export default class Search extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            isReady: false,
            isShowSearchBox: true,
            searchResult: [],
            query: ""
        }
        this.renderSearchResult = this.renderSearchResult.bind(this)
        this.showSearchBox = this.showSearchBox.bind(this)
        this.searchShops = this.searchShops.bind(this)
        this.renderTypeShop = this.renderTypeShop.bind(this)
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        })
        const response = await fetch('http://192.168.1.38/food_delivery/admin/menu')
        const data = await response.json()
        this.setState({
            shopType: data.map((menu) => ({
                key: menu.id,
                name: {
                    th: menu.name_th,
                    en: menu.name_en
                },
                uri: menu.url
            }))
        })
        this.setState({ isReady: true })
        this.queryInput._root.focus();
    }

    searchShops(query) {
        this.setState({ isReady: false })
        fetch('http://192.168.1.38/food_delivery/admin/search?search_by=word&query='+query)
        .then((res) => res.json())
        .then((data) => {
            const shops = data.map((item) => ({
                id: item.id,
                detail: JSON.parse(item.detail)
            }))
            this.setState({
                searchResult: shops,
                isShowSearchBox: false,
                isReady: true
            })
        })
    }

    renderTypeShop(menu_type) {
        return menu_type.reduce((a, b) => {
            const filter = (item) => {
                return item.key == b
            }
            return a + this.state.shopType.find(filter).name.th + ", "
        }, "")
    }

    renderSearchResult() {
        const template = this.state.searchResult.map((searchResult) => (
            <ListItem key={ searchResult.id }>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Detail') } style={{ flex: 1, flexDirection: 'row'}}>
                    <Image style={{ width: 100, height: 100 }} source={{ uri: searchResult.detail.url_img_profile }} />
                    <Body>
                        {
                            searchResult.detail.title&&<Text style={styles.title} numberOfLines={1}>{ searchResult.detail.title }</Text>
                        }
                        {
                            searchResult.detail.detail!=""&&<Text style={styles.description} numberOfLines={2}>{ searchResult.detail.detail }</Text>
                        }
                        {
                            searchResult.detail.address!=""&&<Text style={styles.address} numberOfLines={2}>{ searchResult.detail.address }</Text>
                        }
                        {
                            searchResult.detail.menu_type.length>=1&&<Text style={styles.category}>{ this.renderTypeShop( searchResult.detail.menu_type) }</Text>
                        }
                        {
                            searchResult.notation&&(
                                <View style={styles.statusContainer}>
                                    <Text style={styles.statusText}>{ searchResult.notation }</Text>
                                </View>
                            )
                        }
                    </Body>
                </ TouchableOpacity>
            </ListItem>
        ))
        return template
    }

    showSearchBox() {
        this.setState({ isShowSearchBox: true })
    }

    render() {
      return (
        <Container style={{ backgroundColor: 'white'}}>
            {
                 Platform.OS != 'ios'&&<View style={styles.statusBar} />
            }
            <Header searchBar rounded>
                {
                    !this.state.isShowSearchBox&&<Left>
                        <Button transparent onPress={() => this.props.navigation.dispatch(NavigationActions.back()) } >
                            {
                                Platform.OS != 'ios'&&<Icon name="md-arrow-round-back" style={{ color: "white"}} />
                            }
                            {
                                Platform.OS == 'ios'&&<Icon name='ios-arrow-back' style={{ color: "black"}} />
                            }
                        </Button>
                    </Left>
                }
                {
                    this.state.isShowSearchBox&&<Item>
                        <Icon name="ios-search" />
                        <Input
                            placeholder="Search"
                            keyboardType="web-search"
                            onSubmitEditing={() => this.searchShops(this.state.query)}
                            ref= {(el) => { this.queryInput = el }}
                            onChangeText={(text) => this.setState({ query: text })}
                            value={this.state.query}
                        />
                        <Icon name="ios-people" />
                    </Item>
                }
                {
                    this.state.isShowSearchBox&&<Button transparent onPress={() => this.setState({ isShowSearchBox: false })}>
                        <Text style={{ color: 'black' }}>Cancle</Text>
                    </Button>
                }
                {
                    !this.state.isShowSearchBox&&<Body>
                        <Title>
                            ค้นหาร้าน
                        </Title>
                    </Body>
                }
                {
                    !this.state.isShowSearchBox&&<Right>
                        <Button transparent onPress={() =>  this.showSearchBox() } >
                            {
                                Platform.OS != 'ios'&&<Icon name="search" style={{ color: "white"}} />
                            }
                            {
                                Platform.OS == 'ios'&&<Icon name='search' style={{ color: "black"}}/>
                            }
                        </Button>
                    </Right>
                }
            </Header>
            {
                this.state.isReady?
                <Content >
                {
                    (this.state.searchResult.length == 0)? (
                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginTop: 20}}>
                            <Icon style={{color: 'gray', marginBottom: 10 }} name='ios-information-circle-outline' />
                            <Text style={{color: 'gray'}}>ไม่พบข้อมูล</Text>
                        </View>
                    ):(
                        <List>
                            {
                                this.renderSearchResult()
                            }
                        </List>
                    )
                }
                </Content>
                :
                <Content>
                    <Spinner />
                </Content>
            }
        </Container>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        padding: 10,
        backgroundColor: '#f4f4f4'
    },
    statusBar: {
        backgroundColor: "#000",
        height: Expo.Constants.statusBarHeight,
    },
    title: {
        fontSize: 16,
        fontFamily: "Roboto",
        paddingBottom: 5
    },
    description: {
        fontSize: 12,
        fontFamily: "Roboto",
        color: '#FF7043',
        paddingBottom: 5
    },
    address: {
        fontSize: 12,
        fontFamily: "Roboto",
        paddingBottom: 5
    },
    category: {
        fontSize: 12,
        fontFamily: "Roboto",
        color: '#bdbdbd',
        paddingBottom: 5
    },
    statusContainer: { flex: 1, flexDirection: 'row', alignItems: 'center'},
    statusText: { color: '#FFF', fontSize: 12, padding: 2, backgroundColor: '#ebb72d', borderRadius: 5 }
})
