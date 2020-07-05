import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Container from '../../components/Container'

export default function ViewCourse(props) {
    const { course } = props.route.params;
    return (
        <Container loading={false}>
            <View style={{ flex: 1 }}>
                <Image
                    resizeMode='cover'
                    source={{ uri: `${course.detail.thumbnail_url}` }}
                    style={{
                        width: '100%',
                        height: 250,
                    }}
                />
                <View style={{ flex: 1, paddingHorizontal: 15, }}>

                    <Text style={styles.titleText} numberOfLines={1}>{course.name}</Text>
                    <Text style={styles.creatorNameText}>Online Classes will be conducted 3-5 times a week by India's Best JEE Trainers. This will help you understand every concept thoroughly and ensure that all your doubts are cleared. </Text>

                    <View style={{ flexDirection: 'row',marginTop:10 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Created by : </Text>
                        <Text style={styles.amountText}>{course.detail.creater.profile.first_name} {course.detail.creater.profile.last_name}</Text>
                    </View>

                    <View style={{ flexDirection: 'row',marginTop:10 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Created on : </Text>
                        <Text style={styles.amountText}>{course.created_at}</Text>
                    </View>

                    <View style={{ flexDirection: 'row',marginTop:10 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Amount : </Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{'\u20B9'}</Text>
                        <Text style={styles.amountText}>{course.detail.price_with_tax}</Text>
                    </View>

                </View>
            </View>
        </Container>
    )
}


const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'Raleway-Bold',
        fontSize: 18,
        marginVertical: 15,
        color: 'black'
    },
    subtitleText: {
        fontFamily: 'Raleway-Bold',
        fontSize: 18,
        marginVertical: 15,
        color: 'gray'
    },
    creatorNameText: {
        fontSize: 12,
        color: 'black',
        fontFamily: 'Poppins-Regular',
    },
    amountText: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'Poppins-Regular',
        marginLeft: 10,
    },

});