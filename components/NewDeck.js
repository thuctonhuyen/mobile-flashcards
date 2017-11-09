import React from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {
    Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
    , Card, CardItem, Item, Input
} from 'native-base';

import {Col, Row, Grid} from 'react-native-easy-grid';
import AppHeader from './AppHeader'
import {saveDeck} from "../actions/index";
import {connect} from 'react-redux'
import {headerText, inputStyle, centerGrid, emptyRow} from "../helpers/commonStyle";


class NewDeck extends React.Component {

    state = {
        title: '',
        status: 'regular',
        icon: ''
    }

    handleOnPress = async (e) => {

        if(this.state.title) {
            this.setState((prevState) => {
                prevState.status = 'success';
                prevState.icon = 'checkmark-circle';
                return prevState;
            });

            const {dispatch} = this.props;
            await dispatch(saveDeck(this.state.title));

            this.setState({title: '', status: 'regular', icon:''});
        }else{
            this.setState((prevState) => {
                prevState.status = 'error';
                prevState.icon = 'close-circle';
                return prevState;
            });
        }

    }

    render() {

        return (
            <Container>
                <AppHeader header_title={"New Deck"} go_back={this.props.navigation.goBack}/>
                <Content>

                    <Grid style={centerGrid}>
                        <Row style={emptyRow}></Row>
                        <Row><Text style={headerText}>What is the title of your new deck?</Text></Row>
                        <Row style={emptyRow}></Row>
                        <View style={inputStyle(Dimensions.get('window'))}>
                        <Item regular={this.state.status === 'regular' ? true : false}
                                   success={this.state.status === 'success' ? true : false}
                                    error={this.state.status === 'error' ? true: false}>
                            <Input placeholder='Enter title here...'
                                   value={this.state.title}
                                   onChangeText={text => this.setState((prevState) => {
                                       prevState.title = text;
                                       return prevState;
                                   })}/>

                            {this.state.icon ? <Icon name={this.state.icon}/> : <Text></Text>}
                        </Item>
                        </View>
                        <Row>
                            <Button danger>
                                <TouchableOpacity onPress={e => this.handleOnPress(e)}>
                                    <Text>SUBMIT</Text>
                                </TouchableOpacity>
                            </Button>
                        </Row>
                    </Grid>


                </Content>

            </Container>
        );
    }
}

const styles = StyleSheet.create({

    center: {
        justifyContent: "center",
        alignItems: "center"

    },




});


export default connect(

)(NewDeck)
