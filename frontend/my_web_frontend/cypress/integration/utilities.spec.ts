context("utilities", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("instantiate a bluebird promise", () => {
    let waited = false;
    /**
     * @return Bluebird<string>
     */
    function waitOneSecond() {
      return new Cypress.Promise((resolve, reject) => {
        setTimeout(() => {
          waited = true;
          resolve("foo");
        }, 1000);
      })
    }
    cy.then(() => {
      return waitOneSecond().then((str) => {
        expect(str).to.eq("foo");
        expect(waited).to.be.true;
      });
    });
  })
});
