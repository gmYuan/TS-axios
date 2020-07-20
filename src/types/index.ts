export type Method = "get" | "GET"
  | "head" | "HEAD"
  | "post" | "POST"
  | "put"  | "PUT"
  | "delete" | "DELETE"
  | "options" | "OPTIONS"
  | "patch" | "PATCH"


export interface AxiosRequestConfig {
  url: string,
  methods?: Method,
  data?: any,
  params: any
}