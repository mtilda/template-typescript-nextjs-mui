import { FunctionComponent, PropsWithChildren } from 'react';

export default interface FunctionComponentWithChildren<P = {}> extends FunctionComponent<P & PropsWithChildren> { }
