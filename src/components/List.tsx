import React, { useCallback } from 'react'
import { ListItemWrapper } from '@components'
import {
  FlatList,
  Dimensions,
  FlatListProps,
  ListRenderItem,
  ListRenderItemInfo,
} from 'react-native'

const windowHeight = Dimensions.get('window').height

type Props<T> = {
  data: ReadonlyArray<T>
  itemHeight: number
  renderItem: ListRenderItem<T>
  keyExtractor: (item: T, index: number) => string
  onItemPress?: (item: T, index: number) => void
} & Omit<FlatListProps<T>, 'data' | 'renderItem' | 'keyExtractor'>

export const List = <T,>({
  itemHeight,
  renderItem,
  onItemPress,
  ...props
}: Props<T>) => {
  const initialNumToRender = Math.ceil(windowHeight / itemHeight)
  const windowSize = 2 * initialNumToRender + 1

  const getItemLayout = (data: T[] | null | undefined, index: number) => ({
    index,
    length: itemHeight,
    offset: itemHeight * index,
  })

  const renderWrappedItem = useCallback(
    (itemInfo: ListRenderItemInfo<T>) => {
      const handlePress = onItemPress
        ? () => {
            onItemPress(itemInfo.item, itemInfo.index)
          }
        : undefined

      return (
        <ListItemWrapper onPress={handlePress}>
          {renderItem(itemInfo)}
        </ListItemWrapper>
      )
    },
    [renderItem, onItemPress],
  )

  return (
    <FlatList
      windowSize={windowSize}
      initialNumToRender={initialNumToRender}
      getItemLayout={getItemLayout}
      {...props}
      renderItem={renderWrappedItem}
    />
  )
}
