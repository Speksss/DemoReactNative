import React from 'react';
import { Text, View, Button } from 'react-native';

export default class Compteur extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      cpt : 0
    }
  }

  _increment(){
    this.setState({
      cpt : this.state.cpt + 1
    })
  }

  _decrement(){
    if (this.state.cpt > 0) {
      this.setState({
        cpt : this.state.cpt - 1
      })
    }
  }

  _reset(){
      this.setState({
        cpt : 0
      })
  }

  _belowZeroAlert(){
    if (this.state.cpt < 1){
      return <Text style={{ color: "red" }}>Can't go below 0</Text>;
    }
  }

  render () {
    const cpt = this.state.cpt;
    return (
      <View>
        <Text style={{fontSize : 20}}>Counter : {cpt}</Text>
        <Button
            title="+"
            //on lie (bind) le contexte this de la classe à increment
            onPress={this._increment.bind(this)}
          />
        <Button
            title="-"
            onPress={this._decrement.bind(this)}
          />
        <Button
            title="Reset"
            onPress={this._reset.bind(this)}
          />
        {this._belowZeroAlert()}
      </View>
    );
  }
}