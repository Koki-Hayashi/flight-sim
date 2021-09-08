export type ViewModelType<T> = Partial<_ViewModelType<T>>

type _ViewModelType<T> = {
  [key in keyof T]: T[key]
}
