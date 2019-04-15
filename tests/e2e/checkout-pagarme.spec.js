context('Checkout Pagarme', () => {
  describe('when create a purchase with checkout pagar.me as payment method', () => {
    before(() => {
      cy.loginAsAdmin()
      cy.enableCheckoutPagarme()
      cy.addToCart()
      cy.goToCheckoutPage()
      cy.fillCheckoutForm()
      cy.selectCreditCard()
      cy.wait(2000)
      cy.placeOrder()

      cy.fillPagarMeCheckoutCreditCardForm(1)
    })

    it('should be at order received page', () => {
      cy.url({ timeout: 60000 }).should('include', '/finalizar-compra/order-received/')
      cy.contains('Pedido recebido')
    })

    it('should contains payment informations', () => {
      cy.contains('Pagamento realizado utilizando cartão de crédito Visa em 1x.')
    })
  })
})
