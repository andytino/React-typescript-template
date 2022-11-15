export interface ILoginNavigateOptionsState {
  temporaryToken: string
  from?: {
    hash: string
    key: string
    pathname: string
    search: string
  }
}
