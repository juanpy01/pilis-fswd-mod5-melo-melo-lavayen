import { StatusBar, StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    marginTop: StatusBar.currentHeight,
    borderRadius: 20,
    backgroundColor: "#F9F9F9",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: "underline",
    marginBottom: 16,
    textAlign: 'center',
    marginTop: 30
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10
  },
  errorText: {
    color: 'red',
    marginBottom: 8
  },
  buttonReset: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 8,
    alignItems: 'center'
  },
  buttonSave: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  titleGoogle:{
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: "underline",
    marginBottom: 16,
    textAlign: 'center',
    marginTop: 70
  },
  containerButtonGoogle: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginTop:10,
    borderRadius:10,
    padding:10
  },
  textButtonGoole: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
