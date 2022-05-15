export interface Person {
  readonly id: number,
  alias: string,
  title: string,
  descr: string,
  img: string,
  lvl: number,
  info: [PersonInfo]
}

export interface PersonInfo extends Person {
  title: string,
  value: string,
}
