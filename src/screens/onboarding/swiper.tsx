import React from 'react'
import { View, Text, Dimensions, Image } from 'react-native'

import {Images} from '@/theme'
import Carousel from '@/components/carousel'
import SliderIndex from '@/components/slider-index'

type SwiperProps = {
    flatlistRef: any
    data: Array<any>
    index: number
    onItemChanged: (itemIndex: number) => void
}

const Swiper: React.FC<SwiperProps> = ({
    flatlistRef,
    data,
    index,
    onItemChanged,
}): JSX.Element => {
    const { width } = Dimensions.get('screen')

    return (
        <View
            style={{
                flex: 1,
                paddingBottom: 70,
            }}
        >
            <Carousel
                flatlistRef={flatlistRef}
                data={data}
                renderItem={({ item }) => (
                    <View
                        style={{
                            width,
                            backgroundColor: 'blue',
                            paddingHorizontal: 20,
                            justifyContent: 'flex-end',
                        }}
                    >

                        <View>
                        <Image style={{alignSelf: 'center'}} source={Images.Illustrations.onboarding_1} />
                        <Text style={{ fontSize: 24, textAlign: 'center', paddingTop: 40 }}>{item.title}</Text>
                        <Text style={{fontSize: 16, textAlign: 'center', paddingVertical: 20}}>{item.description}</Text>
                        </View>
                    </View>
                )}
                width={width}
                onItemChanged={onItemChanged}
            />
            <SliderIndex
                color="black"
                currentIndex={index}
                indexAmount={data.length}
                size={9}
                spacing={6}
                style={{
                    alignSelf: 'center',
                    position: 'absolute',
                    bottom: 50,
                }}
            />
        </View>
    )
}

Swiper.defaultProps = {}

export default Swiper
