import React from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {
    Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
    , Card, CardItem
} from 'native-base';

import {Col, Row, Grid} from 'react-native-easy-grid';
import AppHeader from './AppHeader'
import {headerText} from "../helpers/commonStyle";
import NewCard from "./NewCard";
import {connect} from 'react-redux'

class IndividualDeck extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Decks List'
    };

    render() {

        const {deck_title} = this.props.navigation.state.params;
        let {height, width} = Dimensions.get('window');
        const {decks} = this.props;
        const card = decks[deck_title];


        return (

            <Container>
                <AppHeader header_title={card.title} go_back={this.props.navigation.goBack}/>
                <Content>
                    <Grid>
                        <Row style={{height: height - 200}}>
                            <Grid>
                                <Row style={styles.center}>
                                    <Text style={headerText}>{card.title}</Text>
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

                                    <Button danger onPress={() =>
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


function mapStateToProps(decks) {
    return {decks};
}

const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center"

    },


});

export default connect(mapStateToProps)(IndividualDeck);
