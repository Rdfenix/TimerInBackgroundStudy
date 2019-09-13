import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {startTimer} from '../../Actions/timerAction';

class CronometerA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      title: '',
      timer: null,
      hoursCounter: '00',
      minutesCounter: '00',
      secondsCounter: '00',
      startDisable: false,
    };
  }

  componentDidMount() {
    const {seconds, minutes, hours} = this.props.timer;
    const {id} = this.props.data;

    clearInterval(this.state.timer);

    if (seconds.length >= 1)
      this.props.startTimer({id, seconds, minutes, hours});
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
    let minutesTimer = '00',
      secondsTimer = '00',
      titleTimer = '';

    if (this.props.timer.id === this.props.data.id) {
      const {id, hours, minutes, seconds} = this.props.timer;
      const {title} = this.props.data;
      minutesTimer = minutes;
      secondsTimer = seconds;
      titleTimer = title;
    }

    return (
      <View style={styles.container}>
        <Text>{titleTimer}</Text>
        <Text style={styles.counterText}>
          {minutesTimer} : {secondsTimer}
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

const mapStateToProps = state => ({
  timer: state.timer,
  data: state.timerData,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({startTimer}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CronometerA);
