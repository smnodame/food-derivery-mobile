import React, { Component } from 'react';
import { View,  StyleSheet, Image, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView, FlatList} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Tab, Tabs, TabHeading, Icon, Button, Separator, Right, Body, Left, Title, Card, CardItem, Input } from 'native-base';
import { Row, Column as Col} from 'react-native-responsive-grid'
import faker from 'faker'
import Expo from "expo";
import { NavigationActions } from 'react-navigation'

export default class Basket extends Component<{}> {
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
                <Button transparent onPress={() => this.props.navigation.dispatch(NavigationActions.back()) }  >
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
                    Platform.OS != 'ios'&&<Text style={{ color: 'white'  }} onPress={() => this.props.navigation.navigate('Confirm')}>Next</Text>
                }
                {
                    Platform.OS == 'ios'&&<Text style={{ color: 'black'  }} onPress={() => this.props.navigation.navigate('Confirm')}>Next</Text>
                }
            </Right>
          </Header>
          {
              this.state.isReady?
              <Content style={styles.content}>
                  <Card style={{borderColor: '#d3d3d3', borderWidth: 1}}>
                    <CardItem>
                      <Body>
                          <Text style={styles.fontRobo}>
                              ร้านโคขุนโพยางคำ
                          </Text>
                      </Body>
                      <Right>
                      </Right>
                    </CardItem>
                 </Card>
                    <Card style={styles.orderItem}>
                      <CardItem>
                        <Body>
                            <Text style={styles.fontRobo}>
                                เนื้อหมู สเต๊ะ
                            </Text>
                            <Text style={styles.note}>
                                ขอน้ำจิ้มเยอะๆ
                            </Text>
                        </Body>
                        <Right>
                            <Text style={styles.fontRobo}>250 บาท</Text>
                        </Right>
                      </CardItem>

                      <CardItem>
                        <Body style={{
                            flex: 1,
                            flexDirection: 'row'
                        }}>
                            <Button transparent>
                                <Icon name="ios-add-circle-outline" style={styles.icon}/>
                            </Button>
                            <Button transparent>
                                <Text style={styles.amount}>0</Text>
                            </Button>
                            <Button transparent>
                                <Icon name="ios-remove-circle-outline" style={styles.icon}/>
                            </Button>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name="ios-trash-outline" style={styles.icon}/>
                            </Button>
                        </Right>
                      </CardItem>
                   </Card>
                   <Card style={styles.orderItem}>
                     <CardItem>
                       <Body>
                           <Text style={styles.fontRobo}>
                               เนื้อหมู สเต๊ะ
                           </Text>
                           <Text style={styles.note}>
                               ขอน้ำจิ้มเยอะๆ
                           </Text>
                       </Body>
                       <Right>
                           <Text style={styles.fontRobo}>250 บาท</Text>
                       </Right>
                     </CardItem>

                     <CardItem>
                       <Body style={{
                           flex: 1,
                           flexDirection: 'row'
                       }}>
                           <Button transparent>
                               <Icon name="ios-add-circle-outline" style={styles.icon}/>
                           </Button>
                           <Button transparent>
                               <Text style={styles.amount}>0</Text>
                           </Button>
                           <Button transparent>
                               <Icon name="ios-remove-circle-outline" style={styles.icon}/>
                           </Button>
                       </Body>
                       <Right>
                           <Button transparent>
                               <Icon name="ios-trash-outline" style={styles.icon}/>
                           </Button>
                       </Right>
                     </CardItem>
                  </Card>
                  <Card style={styles.orderItem}>
                    <CardItem>

                      <TextInput
                      style={{ width: '100%'}}
                       multiline = {true}
                              editable = {true}
                              maxLength = {40}
                              placeholder="รายละเอียดเพิ่มเติม"
                            />
                    </CardItem>
                 </Card>
                  <Card style={styles.orderItem}>
                    <CardItem>
                      <Body>
                          <Text style={styles.fontRobo}>
                              Subtotal:
                          </Text>
                      </Body>
                      <Right>
                          <Text style={styles.fontRobo}>100</Text>
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Body>
                          <Text style={styles.fontRobo}>
                              Tax:
                          </Text>
                      </Body>
                      <Right>
                          <Text style={styles.fontRobo}>20</Text>
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Body>
                          <Text style={styles.fontRobo}>
                              Tatal:
                          </Text>
                      </Body>
                      <Right>
                          <Text style={styles.total}>120</Text>
                      </Right>
                    </CardItem>
                 </Card>
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
        padding: 10,
        backgroundColor: '#f4f4f4'
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
