import React, { Component } from "react";
import { Alert, TextInput, View, StyleSheet, Text } from "react-native";

interface AppProps {
  username: string;
  password: string;
}

interface AppState {
    username: string;
    password: string;
  }
export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  onLogin() {
    const { username, password } = this.state;

    Alert.alert("Credentials", `${username} + ${password}`);
  }

  render() {
    return (
      <View >
        <Text style={styles.textTitle}>Email:</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={"example@email.com"}
          keyboardType={"email-address"}
          enterKeyHint="next"
          style={styles.input}
          maxLength={40}
          
        />
        
        <Text style={styles.textTitle}>Password:</Text>
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={"Password"}
          enterKeyHint="done"
          secureTextEntry={true}
          style={styles.input}
          maxLength={20}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textTitle: {
    color: "#000",
    fontSize: 13,
    textAlign: "left",
    padding: 5,
    marginLeft: 10, 
  },  
  input: {
    width: 326,
    height: 48,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});