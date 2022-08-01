import React from 'react'
import {
    ColorValue,
    StyleProp,
    StyleSheet,
    View,
    ViewStyle,
} from 'react-native'

type SliderIndexProps = {
    style?: StyleProp<ViewStyle>
    vertical?: boolean
    currentIndex: number
    indexAmount: number
    size: string | number
    spacing: string | number
    color: ColorValue
}

const SliderIndex: React.FC<SliderIndexProps> = ({
    currentIndex,
    indexAmount,
    size,
    spacing,
    color,
    style,
    vertical,
}): JSX.Element => {
    const renderIndex = (): Array<JSX.Element> => {
        const indexGroup: Array<JSX.Element> = []

        for (let i = 0; i < indexAmount; i++) {
            indexGroup.push(
                <View
                    key={`slide-index-${i}`}
                    style={[
                        i !== currentIndex && Style.selected,
                        Style.index,
                        // eslint-disable-next-line react-native/no-inline-styles
                        {
                            marginHorizontal: vertical ? 0 : spacing,
                            marginVertical: vertical ? spacing : 0,
                            backgroundColor: color,
                            height: size,
                            width: size,
                        },
                    ]}
                />,
            )
        }
        return indexGroup
    }

    return (
        <View style={[style, vertical ? Style.vertical : Style.horizontal]}>
            {renderIndex()}
        </View>
    )
}

const Style = StyleSheet.create({
    selected: {
        opacity: 0.3,
    },
    index: {
        borderRadius: 100,
    },
    vertical: {
        flexDirection: 'column',
    },
    horizontal: {
        flexDirection: 'row',
    },
})

SliderIndex.defaultProps = {
    vertical: false,
    style: undefined,
}

export default SliderIndex
