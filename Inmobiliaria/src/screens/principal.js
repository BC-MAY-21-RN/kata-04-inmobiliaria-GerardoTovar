/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';
import propiedades from '../data/propiedades.json';
import CustomIcon from '../components/atoms/CustomIcon';
import CustomButtom from '../components/atoms/CustomButtom';

const prop = propiedades;
const text = {
  fontSize: 14,
  color: 'grey',
};
const textBold = {
  fontSize: 18,
  fontWeight: 'bold',
  marginLeft: 5,
  color: 'black',
};
const textBold2 = {
  fontSize: 14,
  fontWeight: 'bold',
  color: 'black',
};
const Principal = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {prop.map((item, key) => (
          <View style={styles.cardCotainer} key={key}>
            <View style={img.Cotainer}>
              <Image style={img.image} source={{uri: item.img}} />
              <View style={img.Card}>
                <CustomIcon name="star" size={15} color="#eeba00" text="4.7" styleText={textBold2}/>
              </View>
            </View>
            <View style={styles.viewCotainerColumn}>
              <Text style={styles.text}>{item.name}</Text>
              <CustomIcon name="map-marker-outline" size={25} color="grey" text={item.location.address} styleText={text}/>
              <View style={styles.viewCotainerRow}>
                <CustomIcon name="bed-king-outline" size={25} color="grey" text={item.space.rooms} styleText={textBold}/>
                <CustomIcon name="shower" size={25} color="grey" text={item.space.bathroom} styleText={textBold}/>
                <CustomIcon name="move-resize" size={25} color="grey" text={"230 ft"} styleText={textBold}/>
              </View>
              <View style={styles.viewCotainerRow}>
                <Text style={styles.text}>${item.cost}/m</Text>
                <CustomButtom name="heart-circle" size={35} color="#00b074"/>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft:5,
    color: 'black',
  },
  cardCotainer: {
    padding: 15,
    flexDirection: 'row',
    margin: 10,
    marginBottom:0,
    backgroundColor:'#f5fdff',
    borderRadius: 10,
  },
  viewCotainerColumn: {
    marginLeft: 15,
    flexDirection: 'column',
    flex:1,
    justifyContent:'space-between',
  },
  viewCotainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const img = StyleSheet.create({
  image: {
    width: 115,
    height: 120,
    borderRadius: 10,
  },
  Cotainer: {
    alignItems: 'center',
  },
  Card: {
    backgroundColor: '#fbedb7',
    borderRadius: 12,
    height: 30,
    position:'absolute',
    width: 60,
    alignItems: 'center',
    paddingTop: 4,
    top:85,
  },
});
export default Principal;
