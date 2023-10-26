import { ReactChildren, ReactElement } from 'react';


export default interface WrapperProps {
  children: ReactChildren | ReactChildren[] | ReactElement | ReactElement[]
}
