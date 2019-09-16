import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {startTimer} from '../../Actions/timerAction';

class CronometerA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDisable: false,
    };
  }

  componentDidMount() {
    const {id} = this.props.data;
    const {isRunning} = this.props.timer.cronometer[id - 1];

    // clearInterval(this.state.timer);
    if (!isRunning)
      this.props.startTimer({
        id,
      });
  }

  onButtonStop = () => {
    //clearInterval(this.state.timer);
    // this.setState({
    //   startDisable: false,
    // });
  };

  onButtonClear = () => {
    // this.setState({
    //   timer: null,
    //   minutesCounter: '00',
    //   secondsCounter: '00',
    // });
  };

  render() {
    const {id, title} = this.props.data;

    const {minutes, seconds} = this.props.timer.cronometer[id - 1];

    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text style={styles.counterText}>
          {minutes} : {seconds}
        </Text>
        <TouchableOpacity
          onPress={this.onButtonStop}
          activeOpacity={0.6}
          style={[
            styles.button,
            {
              backgroundColor: '#FF6F00',
            },
          ]}>
          <Text style={styles.buttonText}> STOP </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onButtonClear}
          activeOpacity={0.6}
          style={[
            styles.button,
            {
              backgroundColor: this.state.startDisable ? '#B0BEC5' : '#FF6F00',
            },
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
  bindActionCreators(
    {
      startTimer,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CronometerA);
