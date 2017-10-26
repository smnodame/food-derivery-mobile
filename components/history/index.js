import React, { Component } from 'react';
import { View,  StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, FlatList} from 'react-native';
import { Container, Header, Content, List, ListItem, Title, Text, Tab, Tabs, Segment, Badge, TabHeading, Icon, Button, Separator, Right, Body, Left, Card, CardItem, Thumbnail, FooterTab, Footer } from 'native-base';
import { Row, Column as Col} from 'react-native-responsive-grid'
import faker from 'faker'
import ImageSlider from 'react-native-image-slider';
import Expo from "expo";
import StepIndicator from 'react-native-step-indicator';



const labels = ["รอการยืนยัน","จัดเตรียมสินค้า","กำลังขนส่ง", ,"รับเงิน", "เสร็จสิ้น"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}

export default class History extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPosition: 0
        }
    }

  render() {
    return (
        <Content>
            <Tabs>
                <Tab heading={ <TabHeading><Text>In progress</Text></TabHeading>}>
                    <View>
                        <View style={{ marginTop: 20 }}>
                            <StepIndicator
                                customStyles={customStyles}
                                currentPosition={this.state.currentPosition}
                                labels={labels}
                            />
                            <View style={{ backgroundColor: 'white', width: '100%', marginTop: 10 }}>
                                <List>
                                    <ListItem >
                                        <Left>
                                            <Text>ชื่อร้าน</Text>
                                        </Left>
                                        <Body>
                                            <Text numberOfLines={1}>ร้านกุ้งเผาเตาย่างควัน</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem >
                                        <Left>
                                            <Text>ค่าอาหาร</Text>
                                        </Left>
                                        <Body>
                                            <Text>20 บาท</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem >
                                        <Left>
                                            <Text>ค่าขนส่ง</Text>
                                        </Left>
                                        <Body>
                                            <Text>20 บาท</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem >
                                        <Left>
                                            <Text>รวม</Text>
                                        </Left>
                                        <Body>
                                            <Text>20 บาท</Text>
                                        </Body>
                                    </ListItem>
                                </List>
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <StepIndicator
                                customStyles={customStyles}
                                currentPosition={2}
                                labels={labels}
                            />
                            <View style={{ backgroundColor: 'white', width: '100%', marginTop: 10 }}>
                                <List>
                                    <ListItem >
                                        <Left>
                                            <Text>ชื่อร้าน</Text>
                                        </Left>
                                        <Body>
                                            <Text numberOfLines={1}>ร้านไข่พะโล้ (สูตรดั้งเดิม)</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem >
                                        <Left>
                                            <Text>ค่าอาหาร</Text>
                                        </Left>
                                        <Body>
                                            <Text>150 บาท</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem >
                                        <Left>
                                            <Text>ค่าขนส่ง</Text>
                                        </Left>
                                        <Body>
                                            <Text>74 บาท</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem >
                                        <Left>
                                            <Text>รวม</Text>
                                        </Left>
                                        <Body>
                                            <Text>224 บาท</Text>
                                        </Body>
                                    </ListItem>
                                </List>
                            </View>
                        </View>
                    </View>
                </Tab>
                <Tab heading={ <TabHeading><Text>Success</Text></TabHeading>}>
                    <List>
                        <ListItem itemDivider>
                            <Text>25 มีนา 2557</Text>
                        </ListItem>
                        <ListItem >
                            <Left>
                                <Text>ชื่อร้าน</Text>
                            </Left>
                            <Body>
                                <Text numberOfLines={1}>ร้านกุ้งเผาเตาย่างควัน</Text>
                            </Body>
                        </ListItem>
                        <ListItem >
                            <Left>
                                <Text>ค่าอาหาร</Text>
                            </Left>
                            <Body>
                                <Text>20 บาท</Text>
                            </Body>
                        </ListItem>
                        <ListItem >
                            <Left>
                                <Text>ค่าขนส่ง</Text>
                            </Left>
                            <Body>
                                <Text>20 บาท</Text>
                            </Body>
                        </ListItem>
                        <ListItem >
                            <Left>
                                <Text>รวม</Text>
                            </Left>
                            <Body>
                                <Text>20 บาท</Text>
                            </Body>
                        </ListItem>

                        <ListItem itemDivider>
                            <Text>21 ธันวา 2557</Text>
                        </ListItem>
                        <ListItem >
                            <Left>
                                <Text>ชื่อร้าน</Text>
                            </Left>
                            <Body>
                                <Text numberOfLines={1}>ร้านไข่พะโล้ (สูตรดั้งเดิม)</Text>
                            </Body>
                        </ListItem>
                        <ListItem >
                            <Left>
                                <Text>ค่าอาหาร</Text>
                            </Left>
                            <Body>
                                <Text>150 บาท</Text>
                            </Body>
                        </ListItem>
                        <ListItem >
                            <Left>
                                <Text>ค่าขนส่ง</Text>
                            </Left>
                            <Body>
                                <Text>74 บาท</Text>
                            </Body>
                        </ListItem>
                        <ListItem >
                            <Left>
                                <Text>รวม</Text>
                            </Left>
                            <Body>
                                <Text>224 บาท</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Tab>
            </Tabs>

        </Content>
    )
  }
}
