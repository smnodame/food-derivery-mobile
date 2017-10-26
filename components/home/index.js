import React, { Component } from 'react';
import { View,  StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, FlatList} from 'react-native';
import { Container, Header, Content, List, ListItem, Title, Text, Tab, Tabs, Segment, Badge, TabHeading, Icon, Button, Separator, Right, Body, Left, Card, CardItem, Thumbnail, FooterTab, Footer } from 'native-base';
import { Row, Column as Col} from 'react-native-responsive-grid'
import faker from 'faker'
import ImageSlider from 'react-native-image-slider';
import Expo from "expo";

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
      name: faker.name.firstName(),
      image: foodUrl[i],
      key: j++
    })
  }
  return arr
}

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: randomUsers(10),
            category: [
                { name: 'HOT DEALS', key: 1 },
                { name: 'NEARBY', key: 2 },
                { name: 'MY FERVORITE', key: 3 },
                { name: 'DELIVERY DISCOUNT', key: 4 },
                { name: 'LOW BUDGET', key: 5 },
                { name: 'LONG LINE', key: 6 },
            ],
            shopType: [
                {
                    key: 1,
                    name: {
                        th: 'ก๋วยเตี๋ยว',
                        en: 'NOODLE'
                    },
                    uri: 'http://www.chingcancook.com/head_photo/02_20150122172551GLWY.jpg'
                },
                {
                    key: 2,
                    name:  {
                        th: 'ซูซิ',
                        en: 'SHUSI'
                    },
                    uri: 'http://www.kruamoomoo.com/wp-content/uploads/2012/11/pork-t-bone-steak-and-salad-039.jpg'
                },
                {
                    key: 3,
                    name: {
                        th: 'สเต็ก',
                        en: 'STECK'
                    },
                    uri: 'https://s.isanook.com/mn/0/rp/r/w700h420/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL21uLzAvdWQvMzIvMTYzOTEyL3N0ZWFrc21hbGwuanBn.jpg'
                },
                {
                    key: 4,
                    name: {
                        th: 'ข้าว',
                        en: 'RICE'
                    },
                    uri: 'http://ipattaya.co/wp-content/uploads/2016/12/DSC08017.jpg'
                }
            ]
        }
        this.renderCategory = this.renderCategory.bind(this)
        this.renderShopType = this.renderShopType.bind(this)
    }

    renderCategory() {
        const template = this.state.category.map((category) => (
            <Col size={50} style={{ padding: 10}} key={ category.key }>
                <Button bordered block iconLeft style={{ borderColor: '#d3d3d3', borderBottomWidth: 0.5, backgroundColor: 'white' }} onPress={() => this.props.screenProps.rootNavigation.navigate('SeacthResult')}>
                        <Text numberOfLines={1} style={{color: '#4c4c4c'}}>{ category.name }</Text>
                </Button>
            </Col>
        ))
        return template
    }

    renderShopType() {
        const template = this.state.shopType.map((shopType) => (
            <TouchableOpacity onPress={() => this.props.screenProps.rootNavigation.navigate('SeacthResult')}  key={ shopType.key }>
                <Image style={{ width: '100%', height: 90, marginBottom: 10 }} source={{ uri: shopType.uri }}>
                    <View style={styles.overlay}/>
                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 22, fontFamily: "Roboto", fontWeight: 'bold'}}>{ shopType.name.en }</Text>
                        <Text style={{ color: '#F0F0F0', fontSize: 18, fontFamily: "Roboto"}}>{ shopType.name.th }</Text>
                    </View>
                </Image>
            </TouchableOpacity>
        ))
        return template
    }

    render() {
    return (
        <Content>
            <ImageSlider images={[
                'https://i.ytimg.com/vi/Tvvdww2C-XE/maxresdefault.jpg',
                'https://s3.amazonaws.com/media.citizine.tv/uploads/2015/11/11/shannonullman-warmupcafe_1280x853.jpg',
                'https://img01.siam2nite.com/XxoZa5z3cN6JYtN_SCYlcZkhly8=/smart/locations/1081/cover_large_p19op819ru38p18pe1dat1jq71smk8.jpg'
            ]}/>

            <Button bordered block style={{ backgroundColor: 'white', margin: 10, borderColor: '#d3d3d3', borderBottomWidth: 0.5 }} onPress={() => this.props.screenProps.rootNavigation.navigate('SeacthResult')}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Icon style={{color: '#4c4c4c'}} name='ios-restaurant-outline' />
                    <Text style={{color: '#4c4c4c' }}>ค้นหาร้านอาหาร</Text>
                    <Icon style={{color: '#4c4c4c'}} name='md-arrow-round-forward' />
                </View>
            </Button>

            <View style={{ padding: 10, marginTop: 10, }}>
                <Text style={{ marginLeft: 10, fontFamily: "Roboto", color: '#bdbdbd', marginBottom: 10 }}>The Best Top 10</Text>
                <FlatList
                    horizontal={true}
                    data={this.state.data}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => this.props.screenProps.rootNavigation.navigate('Detail')}>
                            <View style={{ backgroundColor: 'white', borderRadius: 5, width: 180, height: 220, borderColor: '#d3d3d3', borderWidth: 1, margin: 10 }}>
                                <Image style={{ width: '100%', height: 120 }} source={{ uri: item.image }} />
                                <View style={{ padding: 15 }}>
                                    <Text numberOfLines={1} style={{ color: '#4c4c4c', fontSize: 15 }}>ร้านอาหารไทยเจ้าน้อย</Text>
                                    <Text style={styles.description} numberOfLines={2}>บะหมี่ทำเองต้นตำรับฉบับฮ่องกง พร้อมน้ำซุปรสเด็ดส่งตรงถึงบ้าน</Text>
                                    <Text style={styles.category} numberOfLines={1}>บะหมี่, อาหารญี่ปุ่น</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <View style={{ padding: 10, marginTop: 6 }}>
                <Text style={{ marginLeft: 10, fontFamily: "Roboto", color: '#bdbdbd', marginBottom: 15 }}>Here are  8 ways to think about your next meal</Text>
                <Row style={{ marginBottom: 15 }}>
                    {
                        this.renderCategory()
                    }
                </Row>
            </View>

            <View style={{ padding: 20, marginTop: 6 }}>
                <Text style={{ fontFamily: "Roboto", color: '#bdbdbd', marginBottom: 15 }}>Here are  8 ways to think about your next meal</Text>
                {
                    this.renderShopType()
                }
            </View>
        </Content>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
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
