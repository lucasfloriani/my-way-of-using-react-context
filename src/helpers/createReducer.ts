interface ActionsFormat<T> {
  type: T
}

type ActionExtraction<Payload, Type> = Extract<Payload, { type: Type }>

type ActionsMapper<State, ActionsPayload extends ActionsFormat<Options>, Options extends string> = {
  [key in ActionsPayload['type']]: (
    state: State,
    action: ActionExtraction<ActionsPayload, key>
  ) => void
}

const createReducer = <State, ActionsPayload extends ActionsFormat<Options>, Options extends string>(
  actionMapper: ActionsMapper<State, ActionsPayload, Options>
) => (state: State, action: ActionsPayload) => {
  const actionFunc = actionMapper?.[action.type]
  if (actionFunc) {
    actionFunc(state, action as ActionExtraction<ActionsPayload, typeof action.type>)
  }
}

export default createReducer
