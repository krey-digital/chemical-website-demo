import { render, screen } from "@testing-library/react";
import AboutPage from "./page";
import { companyInfo } from "@/content/company";

/**
 * Unit tests for About Page
 * 
 * Validates that the about page correctly displays company information
 * including founding story, year established, facility overview, and values.
 */

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe("AboutPage", () => {
  it("renders page heading with company name", () => {
    render(<AboutPage />);
    
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(`About ${companyInfo.name}`);
  });

  it("displays company tagline", () => {
    render(<AboutPage />);
    
    expect(screen.getByText(companyInfo.tagline)).toBeInTheDocument();
  });

  it("displays founding year", () => {
    render(<AboutPage />);
    
    expect(screen.getByText(`Est. ${companyInfo.foundedYear}`)).toBeInTheDocument();
  });

  it("displays company story", () => {
    render(<AboutPage />);
    
    expect(screen.getByText(companyInfo.about.story)).toBeInTheDocument();
  });

  it("displays mission statement", () => {
    render(<AboutPage />);
    
    expect(screen.getByText(companyInfo.about.mission)).toBeInTheDocument();
  });

  it("displays facility description", () => {
    render(<AboutPage />);
    
    expect(screen.getByText(companyInfo.facility.description)).toBeInTheDocument();
  });

  it("renders facility image with correct alt text", () => {
    render(<AboutPage />);
    
    const image = screen.getByAltText("ChemCorp Industries facility");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", companyInfo.facility.imageUrl);
  });

  it("displays all company values", () => {
    render(<AboutPage />);
    
    companyInfo.about.values.forEach((value) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  it("displays correct number of value cards", () => {
    render(<AboutPage />);
    
    const valueCards = screen.getAllByRole("heading", { level: 3 });
    expect(valueCards).toHaveLength(companyInfo.about.values.length);
  });

  it("includes contact CTA button", () => {
    render(<AboutPage />);
    
    const ctaButtons = screen.getAllByRole("link", { name: /contact us/i });
    expect(ctaButtons.length).toBeGreaterThan(0);
    expect(ctaButtons[0]).toHaveAttribute("href", "/contact");
  });

  it("renders Our Story section heading", () => {
    render(<AboutPage />);
    
    expect(screen.getByRole("heading", { name: /our story/i })).toBeInTheDocument();
  });

  it("renders Our Mission section heading", () => {
    render(<AboutPage />);
    
    expect(screen.getByRole("heading", { name: /our mission/i })).toBeInTheDocument();
  });

  it("renders Our Facility section heading", () => {
    render(<AboutPage />);
    
    expect(screen.getByRole("heading", { name: /our facility/i })).toBeInTheDocument();
  });

  it("renders Our Core Values section heading", () => {
    render(<AboutPage />);
    
    expect(screen.getByRole("heading", { name: /our core values/i })).toBeInTheDocument();
  });
});
