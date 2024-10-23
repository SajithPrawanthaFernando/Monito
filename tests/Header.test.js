import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../src/components/common/Header";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  test("search input is functional", async () => {
    const searchInput = screen.getByPlaceholderText(/search something here!/i);

    // Simulate typing in the search input
    fireEvent.change(searchInput, { target: { value: "dogs" } });
    expect(searchInput.value).toBe("dogs");
  });

  test("checks if currency selector is present", () => {
    const currencySelector = screen.getByRole("combobox");

    // Check if the currency selector is present
    expect(currencySelector).toBeInTheDocument();
    expect(currencySelector).toHaveValue("VND");
  });
});
