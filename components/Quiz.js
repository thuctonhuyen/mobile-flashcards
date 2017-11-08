import React from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {
    Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
    , Card, CardItem
} from 'native-base';

import {Col, Row, Grid} from 'react-native-easy-grid';
import AppHeader from './AppHeader'

import {connect} from 'react-redux'
import FlipCard from 'react-native-flip-card'

class Quiz extends React.Component {
    state = {
        currentQuiz: 0,
        totalCorrect: 0,
        totalIncorrect: 0,
        flip: false
    }

    handleOnPress = (answer) => {
        this.setState(prevState => {
            ++prevState.currentQuiz;
            answer === 1 ? ++prevState.totalCorrect : ++prevState.totalIncorrect;
            return prevState;
        });

    }

    handleFlip = () => {
        this.setState(prevState => {
            prevState.flip = !prevState.flip;
            return prevState;
        });
    }

    startQuizAgain = () => {
        this.setState(prevState => {
            return {
                currentQuiz: 0,
                totalCorrect: 0,
                totalIncorrect: 0,
                flip: false
            }
        });
    }


    render() {

        const {list_of_quizzes} = this.props.navigation.state.params;
        const {currentQuiz, totalCorrect, totalIncorrect, flip} = this.state;
        let question = null;
        if (currentQuiz < list_of_quizzes.length) {
            question = list_of_quizzes[currentQuiz];
        }
        //TODO: when list of quizzes is nothing

        if (list_of_quizzes.length == 0) {
            return (
                <Container>
                    <AppHeader header_title={"Quiz"} go_back={this.props.navigation.goBack}/>
                    <Content>
                        <Text>No cards yet.</Text>
                        <Button primary onPress={() => this.props.navigation.goBack()}>
                            <Text>Back To Deck </Text>
                        </Button>
                    </Content>
                </Container>
            )
        }
        if (!question) {
            return (
                <Container>
                    <AppHeader header_title={"Quiz"} go_back={this.props.navigation.goBack}/>
                    <Content>
                        <Text>Total Correct: {totalCorrect}</Text>
                        <Text>Total Incorrect: {totalIncorrect}</Text>
                        <Button dark onPress={() => this.startQuizAgain()}>
                            <Text>Start Quiz Again</Text>
                        </Button>
                        <Button primary onPress={() => this.props.navigation.goBack()}>
                            <Text>Back To Deck </Text>
                        </Button>
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
                                    <FlipCard flip={flip} clickable={false} perspective={1000}>
                                        {/* Face Side */}
                                        <View>
                                            <Row><Text>{question.question}</Text></Row>
                                            <Row><TouchableOpacity onPress={() => this.handleFlip()}>
                                                <Text>Show Answer</Text></TouchableOpacity></Row>
                                        </View>
                                        {/* Back Side */}
                                        <View>
                                            <Row><Text>{question.answer}</Text></Row>
                                            <Row><TouchableOpacity onPress={() => this.handleFlip()}>
                                                <Text>Hide Answer</Text></TouchableOpacity></Row>
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



