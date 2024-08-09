import { render, screen } from '@testing-library/react'
import Greet from "../../src/components/Greet";
describe("Greet", () => {
    it("should render a button when name is not provided", () => {
        render(<Greet name="Bram" />);

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/bram/i);

        screen.debug();
    });
});