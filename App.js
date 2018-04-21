import React from 'react';
import { StyleSheet, Text, View,Image, TextInput, Alert ,Button} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Toast } from 'native-base';
import { StackNavigator } from 'react-navigation';
import Profile from './components/Profile';
// import { setInterval } from 'core-js/library/web/timers';
// import CountryList from './components/List';

class App extends React.Component {

  static navigationOptions =
  {
     title: 'App'
  };

  state = {
    user_info:{
      "firstname":"",
      "lastname":""
    },
    email:"",
    pass:""
  }

  getUserInfo = () => {
    let apiUrl = "http://api.onbranch.com/v2/user/241";
    return fetch(apiUrl)
    .then((response) => response.json())
    .then((responseJson) => {
      [a,b] = [responseJson.data.firstname,responseJson.data.lastname];
      this.setState({user_info:{firstname:a,lastname:b}});
      this.OpenSecondActivityFunction(this.state.user_info);
      return JSON.stringify(responseJson.status);
    })
    .catch((error) => {
      console.error(error);
    });
  }


  OpenSecondActivityFunction = (data) =>
  {
     this.props.navigation.navigate('Second',data);
  }

  render() {    
    // this.getUserinfo();
    const firstname = this.state.user_info.firstname, lastname = this.state.user_info.lastname;
    let email,pass;

    return (
      <Container>
      <Header />
      <Content>
        <Form>
          <Item stackedLabel>
            <Label>Username</Label>
            <Input onChangeText={(email) => this.setState({email:email})} />
          </Item>
          <Item stackedLabel last>
            <Label>Password</Label>
            <Input onChangeText={(pass) => this.setState({pass:pass})}/>
          </Item>

          <Button title="Sign in" color="#e91e63" onPress={()=>{this.getUserInfo()}} />
        <Text>
          Hello, {firstname} {lastname}
        </Text>
        <Text>{this.state.email} {this.state.pass}</Text>
        </Form>
      </Content>
    </Container>
    );
  }
}

export default ActivityProject = StackNavigator(
  {
    First: { screen: App },
    
    Second: { screen: Profile }
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  author:{
    color:'purple',
  },
});
