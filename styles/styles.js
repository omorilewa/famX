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
  },
  imageStyle: {
    height: '15%',
    width: '24%',
    marginBottom: '5%'
  },
  buttonStyle: {
    height: '7%',
    backgroundColor: '#b24f60',
    marginTop: '5%',
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
    fontSize: 13,
    marginTop: 0
  },
  socialMediaSectionStyles: {
    flexDirection: 'row'
  },
  iconStyle: {
    marginTop: 6
  }
});

export const createFamilyStyles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerInput: {
    flex: 1
  },
  inlineView: {
    flexDirection: 'row'
  },
  containerStyle: {
    height: '6%',
    borderColor: 'lightgray',
    backgroundColor: 'white',
    minHeight: 26,
    marginLeft: 0,
    marginRight: 0,
    marginTop: '5%'
  },
  inputStyle: {
    minHeight: 23,
    fontSize: 15,
    width: '60%',
    marginLeft: 0,
    paddingLeft: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  picker: {
    width: 70
  },
  iconStyle: {
    borderWidth: 0,
    borderBottomWidth: 0
  },
  inputStyleFam: {
    minHeight: 23,
    fontSize: 10,
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: '#696969',
    marginTop: '4%',
  },
  smallButtonStyle: {
    marginTop: '9%',
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
  viewStyle: {
    width: '90%',
  },
  containerStyle: {
    height: '6%',
    borderColor: 'lightgray',
    backgroundColor: 'white',
    borderWidth: 0.5,
    minHeight: 26,
    marginLeft: 0,
    marginRight: 0,
    paddingBottom: 0,
    paddingTop: 0,
    marginBottom: 0,
    marginTop: 0
  },
  inputStyle: {
    minHeight: 23,
    fontSize: 10,
    width: '100%'
  },
  errorStyle: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    fontWeight: '600',
  },
  errorView: {
    justifyContent: 'flex-end',
    display: 'flex',
    flexDirection: 'row'
  },
  labelStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 13,
    marginTop: 3
  }
});
