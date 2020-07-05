import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Text, Image,TouchableOpacity } from 'react-native'
import Container from 'components/Container'

import { get_all_institude_courses } from 'store/actions/CoursesActions'
import { sign_out_rizer } from 'store/actions/AuthActions'

import CoursesList from './CoursesList';

export default function Courses(props) {
    const dispatch = useDispatch();

    const [_loading, set_loading] = React.useState(false);

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={async () => {
                        dispatch(sign_out_rizer(() => props.navigation.replace('SignIn')));
                    }}
                    style={{ height: 50, width: 50, marginRight: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        resizeMode='cover'
                        source={require('../../assets/images/logout.png')}
                        style={{
                            width: 22,
                            height: 22,
                            tintColor: 'white',
                        }}
                    />
                    <Text
                        style={{ color: 'white', fontSize: 10, fontFamily: 'Poppins-Regular' }}>Logout
                        </Text>
                </TouchableOpacity>
            ),
        });
    }, [props.navigation]);



 
    useEffect(() => {
        dispatch(get_all_institude_courses());
    }, [])

    const courses_loading_state = useSelector(state => state.CoursesReducer.loading);
    useEffect(() => {
        set_loading(courses_loading_state);
    }, [courses_loading_state]);

    return (
        <Container loading={_loading}>
            <CoursesList navigation={props.navigation}></CoursesList>
        </Container>
    )
}
