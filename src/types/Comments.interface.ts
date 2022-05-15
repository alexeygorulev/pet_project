export interface CommentsUpdate {
  id: string,
  title: string,
  name: string,
  marker: boolean,
}

export interface Notes {
  title: string,
  name: string,
  time?: string,
  readonly id: number,
}

export interface Form {
  readonly id: string,
  name: string,
  value: string,
}
