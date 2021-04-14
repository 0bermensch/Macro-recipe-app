export type MacroInfo = {
  calories: number,
  protein: number,
  fat: number,
  carbs: number,
}

export interface GetMacroinfo {
  type: 'GET_MACROINFO'
  payload: MacroInfo
}