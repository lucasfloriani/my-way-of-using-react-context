import { useCounter, CounterContext } from './useCounter'

type CounterProviderProps = {
  children?: React.ReactNode
}

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const counterInfo = useCounter()

  return <CounterContext.Provider value={counterInfo}>{children}</CounterContext.Provider>
}

export default CounterProvider
