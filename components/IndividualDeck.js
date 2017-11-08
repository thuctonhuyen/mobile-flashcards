import React from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {
    Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
    , Card, CardItem
} from 'native-base';

import {Col, Row, Grid} from 'react-native-easy-grid';
import AppHeader from './AppHeader'

export default class ListOfDecks extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Decks List'
    };

    render() {

        const {card, deck_title} = this.props.navigation.state.params;
        let {height, width} = Dimensions.get('window');


        return (

            <Container>
                <AppHeader header_title={card.title} go_back={this.props.navigation.goBack}/>
                <Content>
                    <Grid>
                        <Row style={{height: height - 200}}>
                            <Grid>
                                <Row style={styles.center}>
                                    <Text>{card.title}</Text>
                                </Row>
                                <Row style={styles.center}>
                                    <Text>{card.questions.length} cards </Text>
                                </Row>
                            </Grid>
                        </Row>

                        <Row style={{height: 150}}>
                            <Grid>
                                <Row style={styles.center}>
                                    <Button light onPress={() =>
                                        this.props.navigation.navigate('NewCard', {deck_title})}>
                                        <Text>Add Card</Text>
                                    </Button>
                                </Row>
                                <Row style={styles.center}>

                                    <Button dark onPress={() =>
                                        this.props.navigation.navigate('Quiz', {"list_of_quizzes": card.questions})}>
                                        <Text>Start Quiz</Text>
                                    </Button>

                                </Row>

                            </Grid>
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
