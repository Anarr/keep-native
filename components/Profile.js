import React from 'react';
import { Text, View} from 'react-native';

export default class Profile extends React.Component{
   static navigationOptions =
   {
      title: 'Profile',
   };

   render() {
       return(
           <View>
               <Text>
                   Hi
                   {this.props.navigation.state.params.firstname}
                   {this.props.navigation.state.params.lastname}                   
               </Text>
           </View>
       );
   }
}