import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions } from 'react-native';

const {height,width} = Dimensions.get('window');
// Creating NumberButton class
class NumberButton extends React.Component{
  constructor(props)
  {
    super(props);
  }

  render(){
    const {details, title}=this.props;
    const {backgroundColor,color,onPress,height,width}=details;
    return(
      <TouchableOpacity onPress={()=>{onPress(title)}} style={[styles.container,{backgroundColor: backgroundColor,height:height,width:width}]}>
        <Text style={[styles.text,{color: color}]}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    width:width/4,
    height:height/8,
    borderWidth:1,
    justifyContent:"center",
    alignItems:"center",
  },
  text:{
    fontSize:40,
  },
})


export default NumberButton;
