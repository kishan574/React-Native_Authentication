import React, { /*Component*/ } from 'react';
import {
  //AppRegistry,
 //StyleSheet,
  Text,
  View
} from 'react-native';


const Header = (prop) => {
const { HeaderView, Headertext } = styles;

return (
<View style={HeaderView}>
  <Text style={Headertext}>
    {prop.getHeader}
   </Text>
</View>
);
};

const styles = {
  Headertext: {
    fontSize: 23,
    color: '#FFF',
    textAlign: 'center',
    elevation: 8
  },
  HeaderView: {
    height: 55,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    elevation: 13
  }

};


export { Header };
