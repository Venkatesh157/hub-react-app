import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const selectedType = "Option 2";
  const onChange = jest.fn();

  it("renders the dropdown with options correctly", () => {
    render(
      <Dropdown
        options={options}
        selectedType={selectedType}
        onChange={onChange}
      />
    );

    expect(
      screen.getByText("Select by Collection Company:")
    ).toBeInTheDocument();

    options.forEach((option) => {
      expect(screen.getByTestId(`typeFilter-${option}`)).toBeInTheDocument();
    });
  });

  it("displays the correct selected option", () => {
    render(
      <Dropdown
        options={options}
        selectedType={selectedType}
        onChange={onChange}
      />
    );

    const selectElement = screen.getByTestId(
      "typeFilter-select"
    ) as HTMLSelectElement;
    expect(selectElement.value).toBe(selectedType);
  });
});
