export type InitialStateProps = {
  total: number
}

export type ReducerActionProps =
  | { type: 'INCREASE' }
  | { type: 'DECREASE', payload: string }

type DispatchTypes = {
  increase: () => void,
  decrease: () => void,
}

export type CounterContextType = {
  state: InitialStateProps
  actions: DispatchTypes
}
