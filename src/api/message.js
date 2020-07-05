import {Alert} from 'react-native';
import {errorMessages} from './ErrorMessages';


export const errorHandler = response => {
  if (response.status) {
    // let _message = errorMessages[response.status].title;
    let _message = errorMessages[response.status].message;
    Alert.alert(
      'Error!',
      _message,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }
};

