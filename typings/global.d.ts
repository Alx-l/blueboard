// HACK: to handle hmr
declare const module: any

declare module '*.scss' {
  interface ClassNames {
    [className: string]: string
  }
  const classNames: ClassNames
  export = classNames
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
