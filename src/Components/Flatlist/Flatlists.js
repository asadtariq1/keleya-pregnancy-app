import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import { appColors } from '../../Constants/Colors';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { allImages, allIcons } from '../../Constants/Images';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Entypo from 'react-native-vector-icons/Entypo'
import { appFont } from '../../Constants/Fonts';
import FastImage from 'react-native-fast-image'

export const Flatlists = props => {
    const {
        title,
        data
    } = props;

    const Item = ({ item }) => (
        <TouchableOpacity style={styles.cardContainer}>
            <FastImage
                style={styles.image}
                source={{
                    uri: item.image ,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles.typeContainer}>
                <View style={styles.typeInnerContainer}>
                    {item.type === 'PODCAST' ? (
                        <Fontisto name='podcast' size={12} color={appColors.BUBBLE_GUM} />
                    ) : (null)}
                    {item.type === 'VIDEO' ? (
                        <Foundation name='play-video' size={12} color={appColors.BUBBLE_GUM} />
                    ) : (null)}
                    {item.type === 'COURSE' ? (
                        <Foundation name='book' size={12} color={appColors.BUBBLE_GUM} />
                    ) : (null)}
                    <Text style={styles.typeText}>{item.type}</Text>
                </View>
            </View>
            <Text style={styles.itemTitle} numberOfLines={2}>{item.title}</Text>
            <View style={styles.cardLowerContainer}>
                <Text style={styles.instructorText}>{item.instructor}</Text>
                <View style={styles.cardLowerContainer}>
                    <Entypo name='dot-single' size={20} color={appColors.WARM_GREY} />
                    <Text style={styles.durationText}>{item.duration}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            <Text style={styles.titleText}>{title}</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontFamily: appFont.mediumFont,
        fontSize: responsiveFontSize(2.8),
        marginLeft: responsiveWidth(3),
        marginBottom: responsiveHeight(2)
    },
    cardContainer: {
        marginLeft: responsiveWidth(4),
        width: responsiveWidth(70),
    },
    image: {
        width: responsiveWidth(70),
        height: responsiveHeight(22),
        borderRadius: 10,
    },
    typeContainer: {
        position: 'absolute',
        backgroundColor: appColors.WHITE,
        top: responsiveHeight(2),
        marginLeft: responsiveWidth(3),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        borderRadius: 50,
    },
    typeInnerContainer: {
        marginVertical: responsiveHeight(1),
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: responsiveWidth(2),
    },
    typeText: {
        marginLeft: responsiveWidth(1),
        fontSize: responsiveFontSize(1.2),
        color: appColors.BUBBLE_GUM,
    },
    itemTitle: {
        fontFamily: appFont.boldFont,
        fontSize: responsiveFontSize(2),
        marginVertical: responsiveHeight(1)
    },
    cardLowerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    instructorText: {
        fontFamily: appFont.mediumFont,
        fontSize: responsiveFontSize(1.7),
        color: appColors.WARM_GREY
    },
    durationText: {
        fontFamily: appFont.mediumFont,
        fontSize: responsiveFontSize(1.7),
        color: appColors.WARM_GREY
    },
})