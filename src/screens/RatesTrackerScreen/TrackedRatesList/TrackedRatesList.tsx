import { selectRates } from '@selectors'
import { useSelector } from 'react-redux'
import React, { useCallback } from 'react'
import { ListRenderItemInfo } from 'react-native'
import EmptyList from '@assets/empty_rates_list.svg'
import { EmptyContent, List, ListItemWrapper } from '@components'
import { TrackedRateItem, TRACKED_RATE_ITEM_H } from './TrackedRateItem'

export const TrackedRatesList = () => {
  const rates = useSelector(selectRates)

  const keyExtractor = useCallback(
    (rate: TrackedRate) => rate.id.toString(),
    [],
  )

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<TrackedRate>) => {
      return (
        <ListItemWrapper>
          <TrackedRateItem rateName={item.name} />
        </ListItemWrapper>
      )
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
