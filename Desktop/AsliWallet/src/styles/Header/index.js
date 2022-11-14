import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#00008b',
  },
  Pcontainer: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#483d8b',
  },
  P: {
    color: 'white',
    fontSize: 40,
  },
  TextContainer: {
    margin: 10,
  },
  WelcomeText: {
    color: 'grey',
    fontSize: 15,
  },
  NameText: {
    color: 'white',
    fontSize: 15,
  },
});

export default styles;
