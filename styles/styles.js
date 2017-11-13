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
    backgroundColor: '#B7C4AA',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageStyle: {
    height: '15%',
    width: '24%',
    marginTop: '2%',
    marginBottom: '5%'
  },
  buttonStyle: {
    height: '7%',
    backgroundColor: '#4b5320',
    marginTop: '9%',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 250
  }
});

export const textfieldStyles = StyleSheet.create({
  inputStyle: {
    height: '7%',
    borderColor: 'gray',
    borderWidth: 2,
    width: '95%',
    backgroundColor: 'white',
    padding: 10,
    marginTop: '4%',
    fontSize: 14,
    borderRadius: 5,
  }
});
