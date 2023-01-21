import React from 'react'
import { Appbar as PaperAppbar } from 'react-native-paper'

type Props = {
  title: string
}

export const Appbar = ({ title }: Props) => {
  return (
    <PaperAppbar.Header>
      <PaperAppbar.Content title={title} />
    </PaperAppbar.Header>
  )
}
