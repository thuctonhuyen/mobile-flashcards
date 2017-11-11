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
import {centerGrid, emptyRow, inputStyle, headerText} from "../helpers/commonStyle";

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

            if(prevState.flip)
                prevState.flip = false;

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

        if (list_of_quizzes.length == 0) {
            return (
                <Container>
                    <AppHeader header_title={"Quiz"} go_back={this.props.navigation.goBack}/>

                    <View style={styles.middleGrid}>
                        <View style={styles.item}><Text>No cards yet.</Text></View>
                        <View><Button dark onPress={() => this.props.navigation.goBack()}>
                            <Text>Back To Deck </Text>
                        </Button></View>
                    </View>

                </Container>
            )
        }
        if (!question) {
            return (
                <Container>
                    <AppHeader header_title={"Quiz"} go_back={this.props.navigation.goBack}/>

                    <View style={styles.middleGrid}>
                        <View style={styles.item}><Text>Total Correct: {totalCorrect}</Text></View>
                        <View style={styles.item}><Text>Total Incorrect: {totalIncorrect}</Text></View>
                        <View style={styles.item}><Button danger onPress={() => this.startQuizAgain()}>
                            <Text>Start Quiz Again</Text>
                        </Button></View>
                        <View style={styles.item}><Button dark onPress={() => this.props.navigation.goBack()}>
                            <Text>Back To Deck </Text>
                        </Button></View>
                    </View>

                </Container>
            )
        } else {
            return (
                <Container>
                    <AppHeader header_title={"Quiz"} go_back={this.props.navigation.goBack}/>
                    <Content>
                        <View>
                            <Grid style={centerGrid}>
                                <Row style={emptyRow}/>
                                <Row><Text>{this.state.currentQuiz + 1}/{list_of_quizzes.length}</Text>
                                </Row>


                                <Row style={[inputStyle(Dimensions.get('window')), styles.cardStyle]}>
                                    <FlipCard style={styles.flipCardStyle} flip={flip} clickable={false}
                                              perspective={1000}>
                                        {/* Face Side */}
                                        <View>

                                            <Text style={headerText}>{question.question}</Text>
                                            <TouchableOpacity onPress={() => this.handleFlip()}>
                                                <Text style={styles.minorText}>Show Answer</Text></TouchableOpacity>

                                        </View>
                                        {/* Back Side */}
                                        <View>

                                            <Text style={headerText}>{question.answer}</Text>
                                            <TouchableOpacity onPress={() => this.handleFlip()}>
                                                <Text style={styles.minorText}>Hide Answer</Text></TouchableOpacity>

                                        </View>
                                    </FlipCard>
                                </Row>
                                <Row><Button success onPress={() => this.handleOnPress(1)}>
                                    <Text>Correct</Text>
                                </Button></Row>
                                <Row style={emptyRow}/>
                                <Row><Button danger onPress={() => this.handleOnPress(0)}>
                                    <Text>Incorrect</Text>
                                </Button></Row>


                            </Grid>
                        </View>


                    </Content>

                </Container>
            )
        }
    }
}

const styles = StyleSheet.create({

    minorText: {
        fontSize: 10,
        color: 'red',
        textAlign: 'center',

    },
    cardStyle: {
        backgroundColor: 'transparent',
    },

    flipCardStyle: {
        padding: 50,
        borderColor: 'transparent',
    },

    middleGrid: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },

    item: {
        paddingBottom: 20
    }


});

export default connect()(Quiz);



