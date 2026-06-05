import { LINKS } from "../../src/lib/content";

// Happy-path UI test for the code.ridvay.com landing page, run against the
// real static export (out/) served on :3300. Repo rule: web features ship a
// Cypress UI test of the happy path.

describe("Ridvay Code landing page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("shows the hero with the local-first pitch", () => {
    cy.contains("h1", /senior ai developer/i).should("be.visible");
    cy.contains("h1", /fully local/i).should("be.visible");
    cy.contains(/frontier-level coding/i).should("be.visible");
  });

  it("links every install CTA to the marketplace", () => {
    cy.get('a[href*="marketplace.visualstudio.com"]').should(
      "have.length.at.least",
      3,
    );
    cy.contains("a", "Add to VS Code").should(
      "have.attr",
      "href",
      LINKS.marketplace,
    );
  });

  it("presents the three local-first integrations", () => {
    cy.get("#integrations").within(() => {
      cy.contains("h3", "Ollama").should("be.visible");
      cy.contains("h3", "LM Studio").should("be.visible");
      cy.contains("h3", "Claude Code").should("be.visible");
    });
  });

  it("renders the feature and privacy sections", () => {
    cy.get("#features").find("h3").should("have.length", 6);
    cy.get("#privacy").contains(/no telemetry/i).should("exist");
  });

  it("jumps to a section from the header nav", () => {
    cy.contains("nav a", "Integrations").click();
    cy.url().should("include", "#integrations");
    cy.get("#integrations").should("be.visible");
  });

  it("exposes outbound GitHub and footer links", () => {
    cy.contains("a", "View on GitHub")
      .should("have.attr", "href", LINKS.github)
      .and("have.attr", "target", "_blank");
    cy.get("footer").within(() => {
      cy.contains("a", "Marketplace").should(
        "have.attr",
        "href",
        LINKS.marketplace,
      );
      cy.contains("a", "GitHub").should("have.attr", "href", LINKS.github);
    });
  });
});
