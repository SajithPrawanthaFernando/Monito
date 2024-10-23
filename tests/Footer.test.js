import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../src/components/common/Footer";
import "@testing-library/jest-dom";

describe("Footer Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  });

  test("renders subscription input and button", () => {
    // Check if the input and button are rendered
    const inputElement = screen.getByPlaceholderText(/Enter your Email/i);
    const buttonElement = screen.getByRole("button", {
      name: /Subscribe Now/i,
    });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("validates email input", async () => {
    const inputElement = screen.getByPlaceholderText(/Enter your Email/i);
    const buttonElement = screen.getByRole("button", {
      name: /Subscribe Now/i,
    });

    // Initially, the input should be empty
    expect(inputElement.value).toBe("");

    // Try to submit without entering an email
    fireEvent.click(buttonElement);

    // Check that the required validation triggers
    expect(inputElement).toHaveAttribute("required");

    // Now enter a valid email
    fireEvent.change(inputElement, { target: { value: "test@example.com" } });
    expect(inputElement.value).toBe("test@example.com");

    // Simulate clicking the subscribe button
    fireEvent.click(buttonElement);
  });

  test("displays a message when email is invalid", async () => {
    const inputElement = screen.getByPlaceholderText(/Enter your Email/i);
    const buttonElement = screen.getByRole("button", {
      name: /Subscribe Now/i,
    });

    // Enter an invalid email
    fireEvent.change(inputElement, { target: { value: "invalid-email" } });
    fireEvent.click(buttonElement);

    // Expect to find some validation feedback (this will depend on your implementation)
    await waitFor(() => {
      expect(
        screen.getByText(/please enter a valid email/i)
      ).toBeInTheDocument();
    });
  });
});
