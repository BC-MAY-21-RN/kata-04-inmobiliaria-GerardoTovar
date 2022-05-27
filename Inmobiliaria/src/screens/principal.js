/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Image} from 'react-native';
import propiedades from '../data/propiedades.json';
import CustomIcon from '../components/atoms/CustomIcon';
import CustomButtom from '../components/atoms/CustomButtom';
import CustomImage from '../components/atoms/CustomImage';
import { CardContainer, CardContent } from '../styles/card';

const prop = propiedades;

const Principal = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {prop.map((item, key) => (
          <CardContainer key={key}>
            <CustomImage name="star" size={15} color="#eeba00" text="4.7" uri={item.img}/>
            <CardContent>
              <Text style={styles.text}>{item.name}</Text>
              <CustomIcon name="map-marker-outline" size={25} color="grey" text={item.location.address} styleText={styles.text2}/>
              <View style={styles.viewCotainerRow}>
                <CustomIcon name="bed-king-outline" size={25} color="grey" text={item.space.rooms} styleText={styles.text}/>
                <CustomIcon name="shower" size={25} color="grey" text={item.space.bathroom} styleText={styles.text}/>
                <CustomIcon name="move-resize" size={25} color="grey" text={"230 ft²"} styleText={styles.text}/>
              </View>
              <View style={styles.viewCotainerRow}>
                <Text style={styles.text}>${item.cost}/m</Text>
                <CustomButtom name="heart-circle" size={35} color="#00b074"/>
              </View>
            </CardContent>
          </CardContainer>
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
  text2: {
    fontSize: 15,
    color: 'grey',
  },
  viewCotainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Principal;
