import React, { Component } from 'react';
import { View,  StyleSheet, Image, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView, FlatList} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Tab, Tabs, TabHeading, Icon, Button, Separator, Right, Body, Left, Title } from 'native-base';
import { Row, Column as Col} from 'react-native-responsive-grid'
import faker from 'faker';
import Expo from "expo";
import ImageSlider from 'react-native-image-slider';
import MapView from 'react-native-maps';
import { NavigationActions } from 'react-navigation'

let j = 0
const randomUsers = (count = 10) => {
  const arr = [];
  const foodUrl = [
      'http://www.smeleader.com/wp-content/uploads/2016/09/%E0%B9%81%E0%B8%9F%E0%B8%A3%E0%B8%99%E0%B9%84%E0%B8%8A%E0%B8%AA%E0%B9%8C%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B9%87%E0%B8%81-%E2%80%9C%E0%B9%80%E0%B8%8B%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B9%87%E0%B8%81%E2%80%9D-%E0%B8%98%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B9%84%E0%B8%94%E0%B9%89%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81-%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3%E0%B8%87%E0%B8%B2%E0%B8%A1-660x330.jpg',
      'http://ipattaya.co/wp-content/uploads/2016/12/DSC08017.jpg',
      'http://www.ryoiireview.com/upload/article/201703/1489130437_4d28a080513aa675e7de4965a0a8c922.jpg',
      'https://s.isanook.com/mn/0/rp/r/w700h420/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL21uLzAvdWQvMzIvMTYzOTEyL3N0ZWFrc21hbGwuanBn.jpg',
      'http://www.pakintiew.com/wp-content/uploads/2016/06/%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B5%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B9%87%E0%B8%8101.jpg',
      'https://f.ptcdn.info/457/049/000/olv57u6w4YhffW9aPCJ-o.jpg',
      'http://www.kruamoomoo.com/wp-content/uploads/2012/11/pork-t-bone-steak-and-salad-039.jpg',
      'http://www.uttaraditreview.com/web/wp-content/uploads/2016/06/DSC02384_resize.jpg',
      'https://th.openrice.com/userphoto/Article/0/2W/000KOP0AC7154E148D8EF5j.jpg',
      'https://xn--y3ciq3ab3kc.com/wp-content/uploads/2016/09/%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B9%87%E0%B8%81%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%83.jpg'
  ]
  for (let i = 0; i < count; i++) {
    arr.push({
      key: faker.random.uuid(),
      date: faker.date.weekday(),
      name: faker.name.firstName(),
      job: faker.name.jobTitle(),
      image: foodUrl[i],
      index: j++
    })
  }
  return arr
}

export default class Detail extends Component<{}> {
    state = {
      refreshing: false,
      data: randomUsers(10),
      tab: 'menu',
      isReady: false
    };

    onEndReached = () => {
      const data = [
          ...this.state.data,
          ...randomUsers(10),
        ]

      this.setState(state => ({
        data
      }));
    };

    onRefresh = () => {
      this.setState({
        data: randomUsers(10),
      });
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
        <Container style={styles.container}>
            {
                 Platform.OS != 'ios'&&<View style={styles.statusBar} />
            }
            <Header>
                <Left>
                    <Button transparent  onPress={() => this.props.navigation.dispatch(NavigationActions.back()) } >
                        {
                            Platform.OS != 'ios'&&<Icon name="md-arrow-round-back" style={{ color: "white"}} />
                        }
                        {
                            Platform.OS == 'ios'&&<Icon name='ios-arrow-back' style={{ color: "black"}} />
                        }
                    </Button>
                </Left>
                <Body>
                    <Title>ร้านอาหารไทยเจ้าน้อย</Title>
                </Body>
                <Right>
                    <Button transparent  onPress={() => this.props.navigation.navigate('Basket') } >
                        {
                            Platform.OS != 'ios'&&<Icon name="md-cart" style={{ color: "white"}} />
                        }
                        {
                            Platform.OS == 'ios'&&<Icon name='ios-cart-outline' style={{ color: "black"}}/>
                        }
                    </Button>
                </Right>
            </Header>
            {
                 this.state.isReady?
                 <Content style={{ backgroundColor: '#f4f4f4' }}>
                     <View style={{ backgroundColor: '#FFF' }}>
                         <ImageSlider images={[
                             'https://img01.siam2nite.com/Y5iKuprgOI7ychRL3Pty5Le3feU=/smart/locations/1081/cover_large_p19op819ru1v92sof1k0l138rf6p3.jpg',
                             'https://s3.amazonaws.com/media.citizine.tv/uploads/2015/11/11/shannonullman-warmupcafe_1280x853.jpg',
                             'https://img01.siam2nite.com/XxoZa5z3cN6JYtN_SCYlcZkhly8=/smart/locations/1081/cover_large_p19op819ru38p18pe1dat1jq71smk8.jpg'
                         ]}/>
                         <Text style={styles.title}>ร้านอาหารไทยเจ้าน้อย</Text>
                         <Text style={styles.subtitle}>Bars, Barbeque / Grill , Quick Meal</Text>
                         <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
                             <View style={{padding: 2, backgroundColor: '#ebb72d', borderRadius: 5 }}><Text style={{ color: '#FFF' }}> ร้านอาหารเเนะนำ </Text></View>
                         </View>
                         <Text style={styles.hour}>
                             <Text style={styles.hourStatus}>Closed Now  </Text>
                             <Text style={styles.hourTime}>
                                 8 AM to 10:30 PM (Mon)
                             </Text>
                         </Text>
                     </View>
                     <View style={{ backgroundColor: '#FFF', marginTop: 20, borderColor: '#d3d3d3', borderBottomWidth: 0.5 }}>
                         <View style={styles.tabs}>
                             <Button transparent dark onPress={() => this.setState({ tab: 'menu'})}>
                                 <Text>Menu</Text>
                             </Button>
                             <Button transparent dark onPress={() => this.setState({ tab: 'info'})}>
                                 <Text>Info</Text>
                             </Button>
                         </View>
                     </View>
                     <View style={{ backgroundColor: '#FFF', marginTop: 10 }}>
                         {this.state.tab == 'info' ?
                         <View style={{ marginTop: 15 }}>
                             <List>
                                 <ListItem>
                                     <Body>
                                         <Text style={styles.fontRobo}>Everyday 11:00 - 20:00</Text>
                                         <Text style={styles.fontRobo} note>โทร 0828469953</Text>
                                     </Body>
                                 </ListItem>
                                 <ListItem >
                                     <Body>
                                         <Text style={styles.fontRobo}>141/1 ชั้น 1 Belle Grand export default class ListIconExample extends Component</Text>
                                     </Body>
                                     <Right>
                                     <MapView style={ styles.map }
                                         initialRegion={{
                                             latitude: 37.78825,
                                             longitude: -122.4324,
                                             latitudeDelta: 0.0922,
                                             longitudeDelta: 0.0421,
                                         }}
                                         />
                                     </Right>
                                 </ListItem>
                                 <ListItem>
                                     <Body>
                                         <Text style={styles.fontRobo}>Estimated cook time</Text>
                                     </Body>
                                     <Right>
                                         <Text style={styles.fontRobo}>6 นาที</Text>
                                     </Right>
                                 </ListItem>
                             </List>
                         </View>
                         :
                         <View>
                         <View style={{ marginTop: 15 }}>
                             <FlatList
                                 horizontal={true}
                                 data={this.state.data}
                                 renderItem={({item}) => (
                                     <View style={{ padding: 15, width: 120 }}>
                                         <Image style={{ height: 100, width: 100, borderRadius: 5, marginBottom: 10 }} source={{ uri: item.image}}></Image>
                                         <Text numberOfLines={2}>{item.name}</Text>
                                     </View>
                                 )}
                             />
                         </View>
                         <Separator bordered>
                             <Text>Recommended</Text>
                         </Separator>
                         <ListItem >
                             <View style={styles.itemProduct}>
                                 <Text>บาบีคิวเนื้อ</Text>
                                 <Text style={{ color: '#44cb5d'}}>209฿</Text>
                             </View>
                         </ListItem>
                         <ListItem>
                             <View style={styles.itemProduct}>
                                 <Text>เห็ดห่มผ้า</Text>
                                 <Text style={{ color: '#44cb5d'}}>199฿</Text>
                             </View>
                         </ListItem>
                         <ListItem last>
                             <View style={styles.itemProduct}>
                                 <Text>ซี่โครงหมูบาบีคิว size 1 เมตร</Text>
                                 <Text style={{ color: '#44cb5d'}}>569฿</Text>
                             </View>
                         </ListItem>
                         <Separator bordered>
                             <Text>จานหลัก</Text>
                         </Separator>
                         <ListItem>
                             <View style={styles.itemProduct}>
                                 <Text>ซี่โครงบาร์บีคิวหมู size 0.25 เมตร</Text>
                                 <Text style={{ color: '#44cb5d'}}>129฿</Text>
                             </View>
                         </ListItem>
                         <ListItem>
                             <View style={styles.itemProduct}>
                                 <Text>ซี่โครงบาร์บีคิวหมู size 0.5 เมตร</Text>
                                 <Text style={{ color: '#44cb5d'}}>220฿</Text>
                             </View>
                         </ListItem>
                         <ListItem>
                             <View style={styles.itemProduct}>
                                 <Text>ซี่โครงบาร์บีคิวหมู size 1 เมตร</Text>
                                 <Text style={{ color: '#44cb5d'}}>299฿</Text>
                             </View>
                         </ListItem>
                         </View>
                     }
                 </View>
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
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
    },
    title: {
        fontFamily: "Roboto",
        color: '#263238',
        fontSize: 25,
        paddingTop: 12,
        paddingBottom: 8,
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    subtitle: {
        fontFamily: "Roboto",
        color: '#bdbdbd',
        paddingBottom: 15,
        textAlign: 'center',
        fontSize: 15,
        paddingLeft: 10,
        paddingRight: 10
    },
    hour: {
        fontFamily: "Roboto",
        paddingTop: 8,
        paddingBottom: 8,
        borderColor: '#d3d3d3',
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        textAlign: 'center'
    },
    statusBar: {
        backgroundColor: "#000",
        height: Expo.Constants.statusBarHeight,
    },
    hourStatus: {
        fontFamily: "Roboto",
        color: '#FF7043',
        fontSize: 15,
        fontWeight: 'bold',
    },
    hourTime: {
        fontFamily: "Roboto",
        color: '#939393',
        fontSize: 12
    },
    chart: {
        fontFamily: "Roboto",
        paddingTop: 15,
        textAlign: 'center',
        fontSize: 13,
        color: '#939393',
        paddingBottom: 15
    },
    itemProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tabs: {
        flex: 1,
        flexDirection: 'row'
    },
    fontRobo: {
        fontSize: 13,
        fontFamily: "Roboto"
    },
    map: {
        flex: 1,
        height: 50,
        width: 50,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    }
})
