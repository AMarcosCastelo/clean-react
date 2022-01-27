import { AccountModel } from '../models/account-models'

export interface AuthenticationParams {
  email: string
  password: string
}

export interface Authentication {
  auth (params: AuthenticationParams): Promise<AccountModel>
}
