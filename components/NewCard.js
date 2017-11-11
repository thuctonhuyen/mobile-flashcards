import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {
    Container, Title, Content, Button, Body, Icon, Text
    , Card, CardItem, Item, Input
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import AppHeader from './AppHeader'
import {saveCard} from "../actions/index";
import {connect} from 'react-redux';
import {inputStyle, centerGrid, emptyRow} from "../helpers/commonStyle";

const initState = {
    question: '',
    answer: '',
    questionStatus: 'regular',
    answerStatus: 'regular',
    questionIcon: '',
    answerIcon: ''

};

class NewCard extends React.Component {

    state = {};

    componentWillMount() {
        this.setState(initState);
    }

    //type: 0 for question; 1 for answer
    handleOnTextChange = (text, type) => {
        let inputText = type === 0 ? 'question' : 'answer';
        let status = type === 0 ? 'questionStatus' : 'answerStatus';
        let icon = type === 0 ? 'questionIcon' : 'answerIcon';

        if (!text || !text.trim()) {
            this.setState(prevState => {
                prevState[status] = 'error';
                prevState[icon] = 'close-circle';
                prevState[inputText] = text;
                return prevState;
            })
        } else {

            this.setState(prevState => {
                prevState[status] = 'success';
                prevState[icon] = 'checkmark-circle';
                prevState[inputText] = text;
                return prevState;
            })

        }
    };

    handleOnPress = async (e) => {
        let {question, answer} = this.state;

        if (question && answer && question.trim() && answer.trim()) {
            const {dispatch, navigation} = this.props;
            const {deck_title} = navigation.state.params;
            await dispatch(saveCard(deck_title,
                {question, answer}));

            //update state after successfully save card:
            this.setState(initState);
        }
    };


    render() {

        const {questionStatus, questionIcon, answerStatus, answerIcon, question, answer} = this.state;

        return (
            <Container>
                <AppHeader header_title={"New Card"} go_back={this.props.navigation.goBack}/>
                <Content>
                    <Grid style={centerGrid}>
                        <Row style={emptyRow}></Row>
                        <View style={inputStyle(Dimensions.get('window'))}>
                            <Item regular={questionStatus === 'regular' ? true : false}
                                  success={questionStatus === 'success' ? true : false}
                                  error={questionStatus === 'error' ? true : false}>
                                <Input placeholder='Type your question here...'
                                       value={question}
                                       onChangeText={text => this.handleOnTextChange(text, 0)}/>
                                {questionIcon ? <Icon name={questionIcon}/> : <Text></Text>}
                            </Item>
                        </View>

                        <View style={inputStyle(Dimensions.get('window'))}>
                            <Item regular={answerStatus === 'regular' ? true : false}
                                  success={answerStatus === 'success' ? true : false}
                                  error={answerStatus === 'error' ? true : false}>
                                <Input placeholder='Type your answer here...'
                                       value={answer}
                                       onChangeText={text => this.handleOnTextChange(text, 1)}/>
                                {answerIcon ? <Icon name={answerIcon}/> : <View></View>}
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


export default connect()(NewCard)

