import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

describe("Search Component", () => {
  const value = "Initial Value";
  const onChange = jest.fn();

  it("renders the search component correctly", () => {
    render(<Search value={value} onChange={onChange} />);

    expect(screen.getByText("Display Name:")).toBeInTheDocument();

    const inputElement = screen.getByTestId(
      "displayNameFilter-input"
    ) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(value);
  });

  it("calls onChange when typing in the input", () => {
    render(<Search value={value} onChange={onChange} />);

    const inputValue = "New Value";
    const inputElement = screen.getByTestId(
      "displayNameFilter-input"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
