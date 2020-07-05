import React, { useReducer, useCallback, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, FlatList } from 'react-native'
import CoursesListItem from './CoursesListItem'


export default function CoursesList(props) {

    const dispatch = useDispatch();
    const [_courses, set_courses] = useState([]);

    const courses_data = useSelector(state => state.CoursesReducer.courses);
    useEffect(() => {
        if (courses_data == null) {
            return;
        }
        set_courses(courses_data);
    }, [courses_data]);

    return (
        <View>
            <FlatList
                style={{ marginTop: 8 }}
                data={_courses}
                renderItem={({ item }) =>
                    <CoursesListItem navigation={props.navigation} course={item}></CoursesListItem>
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}
