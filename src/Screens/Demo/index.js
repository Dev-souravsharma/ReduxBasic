import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import countChange from '../../Redux/actions/counterAction';
// function DemoScreen(props) {
//   let count = props.count.count;
//   function increment() {
//     count++;
//     props.dispatch(countChange(count));
//   }
//   function decrement() {
//     if (count > 0) {
//       count--;
//       props.dispatch(countChange(count));
//     }
//   }
//   return (
//     <SafeAreaView style={styles.container}>
//       <Button title="+" onPress={increment} />
//       <Text>{`${props.count.count}`}</Text>
//       <Button title="-" onPress={decrement} />
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//   },
// });
// const mapStateToProps = state => ({
//   count: state.counterReducer,
// });
// export default connect(mapStateToProps, null)(DemoScreen);
function DemoScreen(props) {
  let count = useSelector(state => state.counterReducer.count);
  const dispatch = useDispatch();
  console.log(dispatch);
  function increment() {
    count++;
    dispatch(countChange(count));
  }
  function decrement() {
    count--;
    dispatch(countChange(count));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="+" onPress={increment} />
      <Text>{count}</Text>
      <Button title="-" onPress={decrement} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default DemoScreen;
