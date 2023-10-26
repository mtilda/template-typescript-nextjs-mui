import { ReactElement } from 'react';
import { NextPage } from 'next';


type GetLayout = (page: ReactElement) => ReactElement

export type PageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: GetLayout
}
