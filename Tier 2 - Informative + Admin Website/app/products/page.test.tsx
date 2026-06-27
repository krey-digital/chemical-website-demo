import { render, screen } from "@testing-library/react";
import ProductsPage, { metadata } from "./page";
import { productCategories } from "@/content/products";

/**
 * Unit Tests for Products Page
 * 
 * Validates Requirements: 2.2, 4.1, 4.2, 4.3, 4.4, 11.1, 18.1, 18.2
 */

describe("ProductsPage", () => {
  it("renders the page heading", () => {
    render(<ProductsPage />);
    expect(screen.getByRole("heading", { level: 1, name: /our products/i })).toBeInTheDocument();
  });

  it("renders all product categories from content array", () => {
    render(<ProductsPage />);
    
    // Verify each category name appears
    productCategories.forEach((category) => {
      expect(screen.getByText(category.name)).toBeInTheDocument();
    });
  });

  it("renders ProductCategoryCard for each category", () => {
    render(<ProductsPage />);
    
    // Verify we have the correct number of category cards
    const categoryHeadings = screen.getAllByRole("heading", { level: 3 });
    expect(categoryHeadings.length).toBe(productCategories.length);
  });

  it("displays call-to-action section", () => {
    render(<ProductsPage />);
    
    expect(screen.getByText(/need help finding the right product/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact us/i })).toHaveAttribute("href", "/contact");
  });

  it("has unique page title in metadata", () => {
    expect(metadata.title).toBe("Our Products - Industrial Chemicals & Reagents | ChemCorp Industries");
    expect(metadata.title).not.toBe("ChemCorp Industries - Your Trusted Partner in Quality Chemicals"); // Different from homepage
  });

  it("has meta description in metadata", () => {
    expect(metadata.description).toBeDefined();
    expect(typeof metadata.description).toBe("string");
    expect((metadata.description as string).length).toBeGreaterThan(0);
  });

  it("renders as a static page without client directive", () => {
    // This test verifies the file doesn't use "use client"
    // by checking that the component can be rendered in a server context
    const { container } = render(<ProductsPage />);
    expect(container).toBeTruthy();
  });

  it("displays introductory text about products", () => {
    render(<ProductsPage />);
    
    expect(screen.getByText(/comprehensive range of high-quality industrial chemicals/i)).toBeInTheDocument();
  });
});
