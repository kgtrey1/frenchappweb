import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useAppDispatch } from '@/Store'
import { disconnect } from '@/Store/AuthSlice'

const Home: React.FC<{}> = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation()

    const onDisconnect = (): void => {
        dispatch(disconnect())
        navigation.navigate('LoginScreen')
    }

    return (
        <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>You are connected</Text>
            <Pressable onPress={onDisconnect}>
                <Text>Press here to disconnect</Text>
            </Pressable>
        </View>
    )
}

Home.defaultProps = {}

export default Home
