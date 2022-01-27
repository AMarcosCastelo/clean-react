export class UnexpectedError extends Error {
  constructor () {
    super('alto de errado aconteceu. Tente novamente mais tarde')
    this.name = 'UnexpectedError'
  }
}
