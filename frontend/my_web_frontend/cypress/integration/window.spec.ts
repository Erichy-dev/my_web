// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
  });
  context("Window", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    describe("tests the window", () => {
      it("gets the global window object", () => {
        cy.window().should("have.property", "top");
      });

      it("gets the document object", () => {
        cy.document().should("have.property", "charset").and("eq", "UTF-8");
      });

      it("gets the title", () => {
        cy.title().should("eq", "DEVRIKI");
      });
    });
  });
});
