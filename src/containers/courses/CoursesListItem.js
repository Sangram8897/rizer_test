import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'

export default function CoursesListItem({ course, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ViewCourse',{ course: course,})}
      style={{ flex: 1, padding: 10, flexDirection: 'row' }}>

      <Image
        resizeMode='cover'
        source={{ uri: `${course.detail.thumbnail_url}` }}
        style={{

          width: 70,
          height: 70,
        }}
      />
      <View style={{ flex: 1, paddingHorizontal: 15, justifyContent: 'space-evenly' }}>

        <Text style={styles.titleText} numberOfLines={1}>{course.name}</Text>
        <Text style={styles.creatorNameText}>{course.detail.creater.profile.first_name} {course.detail.creater.profile.last_name}</Text>
       
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{'\u20B9'}</Text>
          <Text style={styles.amountText}>{course.detail.price_with_tax}</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Raleway-Bold',
    fontSize: 16,
    color: 'black'
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