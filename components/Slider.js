import React, { Component } from "react";
import {
  Alert,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  Linking,
  View
} from "react-native";

import SwipeCards from "react-native-swipe-cards";
import cards from "../conf/cards";

facebookUrl = "https://www.facebook.com/sammy.tellier";

const goOnFacebook = () => {
  Linking.canOpenURL(facebookUrl).then(supported => {
    if (supported) {
      Linking.openURL(facebookUrl);
    } else {
      console.log("Don't know how to open URI: " + facebookUrl);
    }
  });
};

const fullWidth = Dimensions.get("window").width;

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground style={styles.thumbnail} source={this.props.image}>
        <Text style={styles.text}>
          {this.props.name}, 27
          {"  "}
        </Text>
      </ImageBackground>
    );
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    );
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards
    };
  }

  handleYup(card) {
    console.log(`Yup for ${card.text}`);
    Alert.alert("It's a match !", "Contact Sammy on facebook", [
      {
        text: "Montre le moi ",
        onPress: goOnFacebook
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]);
  }
  handleNope(card) {
    console.log(`Nope for ${card.text}`);
  }
  handleMaybe(card) {
    console.log(`Maybe for ${card.text}`);
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={cardData => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        loop
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    borderRadius: 5,
    overflow: "hidden",
    borderColor: "grey",
    backgroundColor: "white",
    borderWidth: 1,
    elevation: 1,
    height: "90%",
    width: fullWidth * 0.95
  },
  thumbnail: {
    height: "90%",
    width: fullWidth * 0.95,
    display: "flex",
    justifyContent: "flex-end",
    borderRadius: 5,
    overflow: "hidden",
    borderColor: "grey",
    backgroundColor: "white"
  },
  text: {
    fontSize: 20,
    padding: 10,
    color: "white",
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  noMoreCards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
