import React, { Component } from 'react'
import { AsyncStorage, View } from 'react-native'
// import { Card, CardSection, Button, LibraryList, LibraryItem } from '../.././common'
import { Container, Content, List, Card, CardItem, ListItem, Body, Text, Button, Input, InputGroup } from 'native-base'
import firebase from 'firebase'

export class PatientsList extends Component {
    static navigationOptions = {
        header: false,
    }
    constructor(props) {
        super(props);
        this.searchByName = this.searchByName.bind(this);
        this.state = {
            normalState: true,
            filterState: false,
            arrdata: []
        }
    }

    componentWillMount() {
        let database = firebase.database().ref('patients')
        // database.on('child_added', (snap) => {
        //     let keys = snap.val();
        //     console.log('keys', keys)
        //     // for (var data in keys) {
        //     //     arr.push(keys[data])
        //     // }
        //     this.setState({ arrdata: keys })

        // })
        database.on('child_added', snap => {
            arrayToPushedData = this.state.arrdata;
            arrayToPushedData.push(snap.val());
            this.setState({
                status: true,
                arrdata: arrayToPushedData,
                // backupData: arrayToPushedData
            })
        })
    }

    searchByName(text) {
        var arrayToPushedData = this.state.arrdata;
        this.setState({ searchedVal: text })
        var arrayToPushedData = arrayToPushedData.filter((asset) => asset.name.toLowerCase().indexOf(text) !== -1);

        if (text == '') {
            this.setState({
                normalState: true,
                filterState: false
            })

        }
        else {
            this.setState({
                filterState: true,
                normalState: false,
                filterData: arrayToPushedData,
                date: ''
            })
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        console.log(this.state.arrdata)
        return (
            <Container>
                <Content>
                    <InputGroup>
                        <Input onChangeText={(text) => this.searchByName(text)} />
                    </InputGroup>
                    <List>
                        {this.state.normalState &&
                            this.state.arrdata.map((d, i) => {
                                return (
                                    <ListItem key={i}>
                                        <Text>{d.name}</Text>
                                        <Text>{d.age}</Text>
                                        <Text>{d.email}</Text>
                                        <Text>{d.disease}</Text>
                                    </ListItem>

                                )
                            })

                        }{
                            this.state.filterState &&
                            this.state.filterData.map((d, i) => {
                                return (
                                    <ListItem key={i}>
                                        <Text>{d.name}</Text>
                                        <Text>{d.age}</Text>
                                        <Text>{d.email}</Text>
                                        <Text>{d.disease}</Text>
                                    </ListItem>

                                )})
                            }
                    </List>
                    {/* <Button onPress={() => { this.getData }}><Text>Get Data</Text></Button> */}
                </Content>
            </Container>
                )
    }
}

