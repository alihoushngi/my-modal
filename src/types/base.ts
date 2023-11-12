import { PropsWithChildren } from "react";

export interface ReactComponent<T> extends React.FC<PropsWithChildren<T>> {}
