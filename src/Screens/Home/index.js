import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sendIdTimerAction} from '../../Actions/timerAction';

const Home = props => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Cronometer A"
          onPress={() =>
            props.navigation.navigate(
              'Cronometer',
              props.sendIdTimerAction({
                id: 1,
                title: 'Cronometer A',
              }),
            )
          }
        />
        <Button
          title="Cronometer B"
          onPress={() =>
            props.navigation.navigate(
              'Cronometer',
              props.sendIdTimerAction({
                id: 2,
                title: 'Cronometer B',
              }),
            )
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonContainer: {
    height: '12%',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = state => ({});
const mapDispatchToProps = dispach =>
  bindActionCreators({sendIdTimerAction}, dispach);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
