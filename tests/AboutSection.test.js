import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import PetList from "../src/components/sections/AboutSection";
import "@testing-library/jest-dom";

describe("PetList Component", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: "MO231",
              breed: "Pomeranian White",
              gender: "Male",
              age: "02 months",
              price: "6,900,000 VND",
              image:
                "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/image%202.png?alt=media&token=3166cfab-f787-4d8f-a27c-2687071ada57",
            },
          ]),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mock history
  });

  test("displays a message when no pets are found", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    render(<PetList />);

    // Wait for the message to be displayed
    await waitFor(() => {
      expect(screen.getByText(/no pets found/i)).toBeInTheDocument();
    });
  });
});
