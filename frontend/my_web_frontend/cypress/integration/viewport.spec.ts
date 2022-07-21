/* eslint-disable cypress/no-unnecessary-waiting */
context("viewport", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("set the viewport size and dimension", () => {
    cy.get(".toggleGuide").should("not.be.visible");
    cy.get("#homeGuide").should("be.visible");

    cy.viewport(767, 602);
    cy.get(".toggleGuide").should("be.visible");
    cy.get("#homeGuide").should("not.be.visible");

    // cy.viewport("macbook-15");
    // cy.wait(1000);
    // cy.viewport("macbook-13");
    // cy.wait(1000);
    // cy.viewport("macbook-11");
    // cy.wait(1000);
    // cy.viewport("ipad-2");
    // cy.wait(1000);
    // cy.viewport("ipad-mini");
    // cy.wait(1000);
    // cy.viewport("iphone-6+");
    // cy.wait(1000);
    // cy.viewport("iphone-6");
    // cy.wait(1000);
    // cy.viewport("iphone-5");
    // cy.wait(1000);
    // cy.viewport("iphone-4");
    // cy.wait(1000);
    // cy.viewport("iphone-3");
    // cy.wait(1000);

    // // cy.viewport() accepts an orientation for all presets
    // // the default orientation is 'portrait'
    // cy.viewport("ipad-2", "portrait");
    // cy.wait(1000);
    // cy.viewport("iphone-4", "landscape");
    // cy.wait(1000);
    cy.viewport(1000, 660);

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.json)
  });
});
