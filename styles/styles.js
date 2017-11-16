import { StyleSheet } from 'react-native';

export const landingStyles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#B7C4AA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  create: {
    height: 45,
    backgroundColor: 'black',
    marginBottom: 15,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 250
  },
  buttonText: {
    textAlign: 'center',
    color: '#fafafa',
    fontWeight: '300',
    fontSize: 16
  },
  stretch: {
    width: 250,
    height: 200,
    marginBottom: 20
  }
});

export const signupStyles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  imageStyle: {
    height: '15%',
    width: '24%',
    marginTop: '2%',
    marginBottom: '5%'
  },
  buttonStyle: {
    height: '7%',
    backgroundColor: '#b24f60',
    // backgroundColor: '#4b5320', - should we need to revert to former colour
    marginTop: '9%',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 250
  },
  Icon: {
    padding: 10,
  },
  linkStyle: {
    color: '#670A0A',
    fontWeight: 'bold'
  },
  divider: {
    color: 'lightgray',
    marginTop: '3%',
    marginBottom: '3%'
  },
  labelStyle: {
    fontWeight: 'bold',
    fontSize: 13
  }
});

export const textfieldStyles = StyleSheet.create({
  inputStyle: {
    height: '5%',
    borderColor: 'lightgray',
    width: '90%',
    backgroundColor: 'white',
    borderWidth: 0.5,
    minHeight: 23
  },
  input: {
    minHeight: 23,
    fontSize: 10
  }
});
