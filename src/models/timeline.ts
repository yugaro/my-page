export type TimelineContent = {
  name: string
  year: string
  status: string
  place: string
  contents: {
    content: string
  }[]
  specs: {
    spec: string
  }[]
}
