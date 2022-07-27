import React from 'react'
import {
    Text, View, TextInput, Pressable, StyleSheet,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { useLoginMutation } from '@/services/auth-service'
import { LoginStackParams } from '@/navigation/main'

type LoginParams = StackNavigationProp<LoginStackParams, 'LoginScreen'>

const Login: React.FC<{}> = (): JSX.Element => {
    const { navigate } = useNavigation<LoginParams>()

    const [login, { error, isSuccess }] = useLoginMutation()

    const [mail, setMail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    React.useEffect(() => {
        if (isSuccess) {
            navigate('HomeScreen')
        }
    }, [isSuccess])

    return (
        <View style={style.container}>
            <Text>{JSON.stringify(error)}</Text>
            <TextInput
                placeholder="Username"
                onChangeText={setMail}
                style={style.input}
            />
            <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Password"
                onChangeText={setPassword}
                style={style.input}
            />
            <Pressable
                style={style.button}
                onPress={() => login({ username: mail, password })}
            >
                <Text>Login</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        width: '80%',
        height: 40,
        marginVertical: 10,
    },
    button: {
        backgroundColor: 'cyan',
    },
})

Login.defaultProps = {}

export default Login
