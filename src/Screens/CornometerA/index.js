import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, AppState} from 'react-native';

class CronometerA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: '',
      timer: null,
      hoursCounter: '00',
      minutesCounter: '00',
      secondsCounter: '00',
      startDisable: false,
    };
  }

  componentDidMount() {
    const {
      params: {id, title},
    } = this.props.navigation.state;

    this.setState({id, title});
    clearInterval(this.state.timer);

    this.onStartCronometer();
  }

  onStartCronometer = () => {
    let timer = setInterval(() => {
      let num = (Number(this.state.secondsCounter) + 1).toString(),
        count = this.state.minutesCounter;
      if (Number(this.state.secondsCounter) == 59) {
        count = (Number(this.state.minutesCounter) + 1).toString();
        num = '00';
      }

      this.setState({
        minutesCounter: count.length == 1 ? '0' + count : count,
        secondsCounter: num.length == 1 ? '0' + num : num,
      });
    }, 1000);

    this.setState({timer, startDisable: true});
  };

  onButtonStop = () => {
    clearInterval(this.state.timer);
    this.setState({startDisable: false});
  };

  onButtonClear = () => {
    this.setState({
      timer: null,
      minutesCounter: '00',
      secondsCounter: '00',
    });
  };

  render() {
    const {title} = this.state;
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text style={styles.counterText}>
          {this.state.minutesCounter} : {this.state.secondsCounter}
        </Text>

        <TouchableOpacity
          onPress={this.onButtonStop}
          activeOpacity={0.6}
          style={[styles.button, {backgroundColor: '#FF6F00'}]}>
          <Text style={styles.buttonText}>STOP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onButtonClear}
          activeOpacity={0.6}
          style={[
            styles.button,
            {backgroundColor: this.state.startDisable ? '#B0BEC5' : '#FF6F00'},
          ]}
          disabled={this.state.startDisable}>
          <Text style={styles.buttonText}> CLEAR </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  counterText: {
    fontSize: 28,
    color: '#000',
  },
  button: {
    width: '80%',
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 7,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default CronometerA;