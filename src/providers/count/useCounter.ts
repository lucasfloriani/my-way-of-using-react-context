import { createContext, useContext, useCallback } from 'react'

import createReducer from '../../helpers/createReducer'
import {
  InitialStateProps,
  ReducerActionProps,
  CounterContextType
} from './types'
import { useImmerReducer } from 'use-immer'

const initialState: InitialStateProps = {
  total: 0,
}

// TODO: Verificar se precisa mesmo passar um valor default assim pro actions
export const CounterContext = createContext<CounterContextType>({
  state: initialState,
  actions: {
    increase: () => null,
    decrease: () => null,
  }
})

const useCounterContext = () => useContext(CounterContext)

const reducer = createReducer<InitialStateProps, ReducerActionProps, ReducerActionProps['type']>({
  INCREASE: (state) => { state.total++ },
  DECREASE: (state) => { state.total-- },
})

export const useCounter = () => {
  const [state, dispatch] = useImmerReducer(reducer, initialState)

  const increase = useCallback(() => dispatch({ type: 'INCREASE' }), [dispatch])
  const decrease = useCallback(() => dispatch({ type: 'DECREASE', payload: 'test' }), [dispatch])

  return {
    state,
    actions: {
      increase,
      decrease,
    }
  }
}

export default useCounterContext
