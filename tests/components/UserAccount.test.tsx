import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount';
describe("UserAccount", () => {
    it("should render user name", () => {
        const user = { id: 1, name: "Bram", isAdmin: true };
        render(<UserAccount user={user} />);

        // Why getByText? Because the element is a div.
        expect(screen.getByText(user.name)).toBeInTheDocument();
    });

    it("should render edit button if user is admin", () => {
        const user = { id: 1, name: "Bram", isAdmin: true };
        render(<UserAccount user={user} />);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/edit/i);
    });

    it("should not render edit button if user is not admin", () => {
        const user = { id: 1, name: "Bram", isAdmin: false };
        render(<UserAccount user={user} />);

        const button = screen.queryByRole('button');
        expect(button).not.toBeInTheDocument();
    });
});