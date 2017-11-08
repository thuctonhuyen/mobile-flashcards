import React from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {
    Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
    , Card, CardItem, H1, H2, H3
} from 'native-base';

import {Col, Row, Grid} from 'react-native-easy-grid';
import AppHeader from './AppHeader'

import {connect} from 'react-redux'
import FlipCard from 'react-native-flip-card'

class Quiz extends React.Component {
    state = {
        currentQuiz: 0,
        totalCorrect: 0,
        totalIncorrect: 0
    }

    handleOnPress = (answer) => {
        this.setState(prevState => {
            ++prevState.currentQuiz;
            answer === 1 ? ++prevState.totalCorrect : ++prevState.totalIncorrect;
            return prevState;
        });

    }

    render() {

        const {list_of_quizzes} = this.props.navigation.state.params;
        const {currentQuiz, totalCorrect, totalIncorrect} = this.state;
        let question = null;
        if (currentQuiz < list_of_quizzes.length) {
            question = list_of_quizzes[currentQuiz];
        }

        if (!question) {
            return (
                <Container>
                    <AppHeader header_title={"Quiz"} go_back={this.props.navigation.goBack}/>
                    <Content>
                        <Text>Total Correct: {totalCorrect}</Text>
                        <Text>Total Incorrect: {totalIncorrect}</Text>
                    </Content>
                </Container>
            )
        } else {
            return (
                <Container>
                    <AppHeader header_title={"Quiz"} go_back={this.props.navigation.goBack}/>
                    <Content>
                        <View>
                            <Text>{this.state.currentQuiz}/{list_of_quizzes.length}</Text>

                            <View>
                                <Grid>

                                    <FlipCard>
                                        {/* Face Side */}
                                        <View>
                                            <Row><Text>{question.question}</Text></Row>
                                        </View>
                                        {/* Back Side */}
                                        <View>
                                            <Row><Text>{question.answer}</Text></Row>
                                        </View>
                                    </FlipCard>
                                    <Row><Button success onPress={() => this.handleOnPress(1)}>
                                        <Text>Correct</Text>
                                    </Button></Row>
                                    <Row><Button danger onPress={() => this.handleOnPress(0)}>
                                        <Text>Incorrect</Text>
                                    </Button></Row>
                                </Grid>
                            </View>
                        </View>


                    </Content>

                </Container>
            )
        }
    }
}

export default connect()(Quiz);



