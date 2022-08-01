import React from 'react'
import {
    Dimensions,
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import Swiper from '@/screens/onboarding/swiper'

const slider = [
    {
        title: 'Bienvenue sur l’appli',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu justo, faucibus ut netus elementum.',
    },
    {
        title: 'test',
        description: 'world',
    },
]

const Onboarding: React.FC<{}> = (): JSX.Element => {
    const sliderRef = React.useRef<FlatList>(null)

    const [index, setIndex] = React.useState<number>(0)

    const { width } = Dimensions.get('screen')

    return (
        <View style={{ height: '100%' }}>
            <Text
                style={{
                    alignSelf: 'flex-end',
                    marginRight: 21,
                    marginTop: 28,
                }}
            >
                Passer
            </Text>
            <Swiper
                data={slider}
                flatlistRef={sliderRef}
                index={index}
                onItemChanged={(itemIndex: number) => setIndex(itemIndex)}
            />
            <Pressable
                onPress={() => {
                    sliderRef.current?.scrollToIndex({ index: index + 1 })
                    setIndex(index + 1)
                }}
                style={{
                    backgroundColor: 'purple',
                    width: 71,
                    height: 71,
                    alignSelf: 'center',
                    marginBottom: 70,
                    borderRadius: 100,
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({})

export default Onboarding
