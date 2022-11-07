interface IError {
  code: string
  field: string
  message: string
}

export interface IMeta {
  status?: number
  message?: string
  currentPage?: number
  from?: number
  lastPage?: number
  perPage?: number
  to?: number
  total?: number
}

export interface IBaseResponse<T> {
  success?: boolean
  result: {
    data?: T
    meta?: IMeta
  }
  errors?: null
  error_message?: null
  error?: {
    errors: IError[]
  }
}
