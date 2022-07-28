import React from 'react'
import {
    FlatList, ViewStyle, StyleProp, ListRenderItem, ViewToken,
} from 'react-native'

type CarouselProps<T> = {
    style?: StyleProp<ViewStyle>
    data: Array<T>
    width: number
    flatlistRef?: React.RefObject<FlatList<any>>
    onItemChanged?: (itemIndex: number) => void
    renderItem: ListRenderItem<T>
}

const Carousel = <T extends unknown>({
    style,
    width,
    data,
    flatlistRef,
    onItemChanged,
    renderItem,
}: CarouselProps<T>): JSX.Element => {
    const onViewChanged = React.useCallback(({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
        if (viewableItems.length === 1 && viewableItems[0].index !== null && onItemChanged !== undefined) {
            onItemChanged(viewableItems[0].index)
        }
    }, [])

    return (
        <FlatList
            ref={flatlistRef}
            data={data}
            renderItem={renderItem}
            style={[style, {
                width,
            }]}
            horizontal
            pagingEnabled
            onViewableItemsChanged={onViewChanged}
            viewabilityConfig={{
                viewAreaCoveragePercentThreshold: 51,
            }}
        />
    )
}

Carousel.defaultProps = {
    style: undefined,
    flatlistRef: undefined,
    onItemChanged: undefined,
}

export default Carousel
