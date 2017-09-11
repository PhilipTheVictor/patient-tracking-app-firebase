import React, { Component } from 'react'
import { AsyncStorage, View } from 'react-native'
// import { Card, CardSection, Button, LibraryList, LibraryItem } from '../.././common'
import { Container, Content, List, Card, CardItem, ListItem, Body, Text, Button } from 'native-base'
import firebase from 'firebase'

export class PatientsList extends Component {
    static navigationOptions = {
        header: false,
    }
    constructor(props) {
        super(props);
        // this.getData = this.getData.bind(this);
        this.state = {
            arrdata: []
        }
    }

    componentWillMount() {
        let arr = []
        let database = firebase.database().ref('patients')
        database.on('child_added', (snap) => {
            let keys = snap.val();
            console.log(keys)
            for (var data in keys) {
                arr.push(keys[data])
            }
            this.setState({ arrdata : arr })

        })
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content>

                    <List>
                        {
                            console.log(this.state.arrdata)
                        /* this.state.arrdata.map((d, i) => {
                                return (
                                    <ListItem key={i}>
                                        <Text>{d.name}</Text>
                                        <Text>{d.age}</Text>
                                        <Text>{d.email}</Text>
                                        <Text>{d.disease}</Text>
                                    </ListItem>

                                )
                            }) */
                        }
                    </List>
                    {/* <Button onPress={() => { this.getData }}><Text>Get Data</Text></Button> */}
                </Content>
            </Container>
        )
    }
}

