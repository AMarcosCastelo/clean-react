import faker from 'faker'

import { AccountModel } from '../models/account-models'
import { AuthenticationParams } from '../usecases/authentication'

export const mockAuthenticationParams = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid()
})
