import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00008b',
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
  },
  Text1: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  Text2: {
    fontSize: 18,
    fontWeight: '300',
    color: 'black',
  },
  PhoneText1: {
    color: 'grey',
  },
  PhoneText2: {
    color: 'black',
    fontWeight: '600',
  },
  Xbutton: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 50,
    justifyContent: 'center',
    color: 'white',
    marginTop: '50%',
    marginLeft: '44%',
  },
  XText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  modalblur: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    marginTop: 250,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 100,
    opacity: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  HelloText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;
