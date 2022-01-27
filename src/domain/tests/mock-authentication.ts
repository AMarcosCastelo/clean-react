import faker from 'faker'

import { AuthenticationParams } from '../usecases/authentication'

export const mockAuthenticationParams = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
