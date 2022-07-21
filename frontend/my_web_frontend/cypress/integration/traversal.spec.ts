context("traversal", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("get children DOM elements", () => {
    cy.get("#HomeView")
      .children("#HomeViewBody")
      .should("contain", "Eric Nyaga");
  })

  it("gets closest ancestor element", () => {
    cy.get("#VueJs")
      .closest("#HomeViewProjects")
      .should("have.class", "space-y-7");
  })

  it("get a DOM element at a specific index", () => {
    cy.get("#react-projects").should("contain", "React Projects");
  });
});
