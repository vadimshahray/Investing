import React from 'react'
import {
  FlatList,
  Dimensions,
  FlatListProps,
  ListRenderItem,
  StyleSheet,
} from 'react-native'

const windowHeight = Dimensions.get('window').height

type Props<T> = {
  data: ReadonlyArray<T>
  itemHeight: number
  renderItem: ListRenderItem<T>
  keyExtractor: (item: T, index: number) => string
} & Omit<FlatListProps<T>, 'data' | 'renderItem' | 'keyExtractor'>

export const List = <T,>({
  itemHeight,
  numColumns = 1,
  ...props
}: Props<T>) => {
  const initialNumToRender = Math.ceil(windowHeight / itemHeight)
  const windowSize = 2 * initialNumToRender + 1

  const getItemLayout = (_: T[] | null | undefined, index: number) => ({
    index,
    length: itemHeight,
    offset: itemHeight * Math.floor(index / numColumns),
  })

  return (
    <FlatList
      windowSize={windowSize}
      initialNumToRender={initialNumToRender}
      getItemLayout={getItemLayout}
      numColumns={numColumns}
      {...props}
      contentContainerStyle={
        props.data.length ? props.contentContainerStyle : styles.emptyList
      }
    />
  )
}

const styles = StyleSheet.create({
  emptyList: {
    flex: 1,

    alignContent: 'center',
    justifyContent: 'center',
  },
})
