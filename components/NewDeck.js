import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {
    Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
    , Card, CardItem, Item, Input
} from 'native-base';

import {Col, Row, Grid} from 'react-native-easy-grid';
import AppHeader from './AppHeader'
import {saveDeck} from "../actions/index";
import {connect} from 'react-redux'
import {headerText, inputStyle, centerGrid, emptyRow} from "../helpers/commonStyle";

//TODO: Pressing the button correctly creates the deck and routes the user
// to the Individual Deck view for the new deck.

const initState= {
    title: '',
    status: 'regular',
    icon: ''
}
class NewDeck extends React.Component {

    state = {}

    componentWillMount(){
        this.setState(initState);
    }


    handleOnPress = async (e) => {

        let {title} = this.state;

        if (title && title.trim()) {
            const {dispatch, navigation} = this.props;
            try {
                await dispatch(saveDeck(title));

                //if success:

                //reset state:
                this.setState(initState);

                //then navigate to individual deck view:
                navigation.navigate('Deck', {
                    card: this.props.decks[title],
                    deck_title: this.props.decks.title
                });

            }catch(e){
                this.setState((prevState) => {
                    prevState.status = 'error';
                    prevState.icon = 'close-circle';
                    return prevState;
                });
            }

        } else {
            this.setState((prevState) => {
                prevState.status = 'error';
                prevState.icon = 'close-circle';
                return prevState;
            });
        }

    };

    handleOnChangeText = (text) => {

        if (text && text.trim()) {

            if (this.state.status !== 'success') {
                this.setState((prevState) => {
                    prevState.title = text;
                    prevState.status = 'success';
                    prevState.icon = 'checkmark-circle';
                    return prevState;
                })
            }else{
                this.setState((prevState) => {
                    prevState.title = text;
                    return prevState;
                })
            }
        } else {
            this.setState((prevState) => {
                prevState.title = text;
                prevState.status = 'regular';
                prevState.icon = '';
                return prevState;
            })

        }

    };

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
                                  error={this.state.status === 'error' ? true : false}>
                                <Input placeholder='Enter title here...'
                                       value={this.state.title}
                                       onChangeText={(text) => this.handleOnChangeText(text)}/>

                                {this.state.icon ? <Icon name={this.state.icon}/> : <Text></Text>}
                            </Item>
                        </View>
                        <Row>
                            <Button danger onPress={e => this.handleOnPress(e)}>
                                <Text>SUBMIT</Text>
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

function mapStateToProps(decks){
    return {decks};
}


export default connect(
mapStateToProps
)(NewDeck)
