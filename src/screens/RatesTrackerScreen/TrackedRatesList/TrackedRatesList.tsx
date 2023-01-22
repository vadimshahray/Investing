import { twoParts } from '@utils'
import { selectRates } from '@selectors'
import { useSelector } from 'react-redux'
import React, { useCallback } from 'react'
import { EmptyContent, List } from '@components'
import { ListRenderItemInfo } from 'react-native'
import EmptyList from '@assets/empty_rates_list.svg'
import { TrackedRateItem, TRACKED_RATE_ITEM_H } from './TrackedRateItem'

export const TrackedRatesList = () => {
  const rates = useSelector(selectRates)

  const keyExtractor = useCallback(
    (rate: TrackedRate) => rate.id.toString(),
    [],
  )

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<TrackedRate>) => {
      const style = index % 2 ? twoParts.right : twoParts.left

      return <TrackedRateItem rateName={item.name} style={style} />
    },
    [],
  )

  return (
    <List
      data={rates}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      itemHeight={TRACKED_RATE_ITEM_H}
      numColumns={2}
      ListEmptyComponent={
        <EmptyContent text='Здесь ничего нет' Image={EmptyList} />
      }
    />
  )
}
