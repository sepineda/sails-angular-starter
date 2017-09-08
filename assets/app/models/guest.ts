export interface Guest {
  first_name: string,

  last_name: string,

  email: string,

  phone?: string,

  confirmed?: boolean,

  active: boolean,

  _wedding: string
}
