/**
 * Vídeo #1:ScrollView - Módulo 11 - React Native Intermediário - B7Web
 * Link para a documentação oficial: https://facebook.github.io/react-native/docs/scrollview
 */

import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';

/*
    A desvantagem do ScrollView é que ele carrega todos os elementos na memória (não reaproveita os cartões).
 */
export default class ScrollViewExemplo extends Component{

    render(){
      return(
          <View style={styles.body}>
              <View style={styles.header}>
                <Text style={styles.textoHeader}>Cabeçalho</Text>
              </View>
              <ScrollView>
                  <View style={styles.quadrado1}>
                      <Text style={styles.textoCard}>Cartão 1</Text>
                  </View>
                  <View style={styles.quadrado2}>
                      <Text style={styles.textoCard}>Cartão 2</Text>
                  </View>
                  <View style={styles.quadrado1}>
                      <Text style={styles.textoCard}>Cartão 3</Text>
                  </View>
                  <View style={styles.quadrado2}>
                      <Text style={styles.textoCard}>Cartão 4</Text>
                  </View>
                  <View style={styles.quadrado1}>
                      <Text style={styles.textoCard}>Cartão 5</Text>
                  </View>
                  <View style={styles.quadrado2}>
                      <Text style={styles.textoCard}>Cartão 6</Text>
                  </View>
                  <View style={styles.quadrado1}>
                      <Text style={styles.textoCard}>Cartão 7</Text>
                  </View>
                  <View style={styles.quadrado2}>
                      <Text style={styles.textoCard}>Cartão 8</Text>
                  </View>
              </ScrollView>
              <View style={styles.footer}>
                  <Text style={styles.textoHeader}>Rodapé</Text>
              </View>
          </View>
      );
    }
}//fim classe

const styles = StyleSheet.create({
    body:{
        //paddingTop:20 //para IOs
        flex:1
    },
    footer:{
        backgroundColor:'#0000FF',
        height:100,
        justifyContent:'center'
    },
    header:{
        backgroundColor:'#0000FF',
        height:100,
        justifyContent:'center'
    },
    quadrado1:{
        backgroundColor:'#FF0000',
        height:200,
        justifyContent:'center'
    },
    quadrado2:{
        backgroundColor:'#00FF00',
        height:200,
        justifyContent:'center'
    },
    textoHeader:{
        fontSize:25,
        color:'#FFFFFF',
        textAlign:'center'
    },
    textoCard:{
        fontSize:25,
        color:'#FFFFFF',
        textAlign:'center'
    }
});
