import faker from 'faker'

import { HttpPostClientSpy } from '@/data/test/mock-http-client'
import { mockAuthenticationParams } from '@/domain/tests/mock-authentication'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'
import { HttpStatusCode } from '@/data/protocols/http/http-response-client'

import { RemoteAuthentication } from './remote-authentication'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)

  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('should call HttpPostClient with correct URl', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mockAuthenticationParams())

    expect(httpPostClientSpy.url).toBe(url)
  })

  test('should call HttpPostClient with correct Body', async () => {
    const authenticationParamsMock = mockAuthenticationParams()
    const { sut, httpPostClientSpy } = makeSut()
    await sut.auth(authenticationParamsMock)

    expect(httpPostClientSpy.body).toEqual(authenticationParamsMock)
  })

  test('should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const promise = sut.auth(mockAuthenticationParams())

    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })
})
