/* globals cy */

describe('calculator', () => {
  it('can visit the app', () => {
    cy
      .visit('/')
      .findByText(/^1$/)
      .click()
      .findByText(/^\+$/)
      .click()
      .findByText(/^2$/)
      .click()
      .findByText(/^=$/)
      .click()
      .findByTestId('number-display')
  })
})
