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
    ({ item }: ListRenderItemInfo<TrackedRate>) => {
      return <TrackedRateItem rateName={item.name} />
    },
    [],
  )

  return (
    <List
      data={rates}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      itemHeight={TRACKED_RATE_ITEM_H}
      ListEmptyComponent={
        <EmptyContent text='Здесь ничего нет' Image={EmptyList} />
      }
    />
  )
}
