
import { Register } from "./register";
import { screen, render } from "@testing-library/react";

// Title Test

test('Title Test', ()=>{

    render(<Register/>);

    let title = screen.getByTestId("title");

    expect(title).toHaveTextContent("Customer Register");

});

// Link Test

test('Existing User Link Test', ()=>{

     render(<Register />);

     let link = screen.getByText(/Existing User/);
     expect(link).toBeInTheDocument();
     expect(link).toHaveAttribute("href", "/login");

});