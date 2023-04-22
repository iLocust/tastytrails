import { Navbar, Button } from "flowbite-react";
import React from "react";

const Navigation = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
          />
        </svg>
        <p className="text-3xl font-bold text-orange-500">TastyTrails</p>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="mr-2 rounded-full border border-orange-500 text-white px-4 py-2 bg-orange-500 hover:bg-orange-600">
          Sign Up
        </Button>
        <Button className="rounded-full border border-orange-500 text-white px-4 py-2 bg-orange-500 hover:bg-orange-600">
          Login
        </Button>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" >
          Home
        </Navbar.Link>
        <Navbar.Link href="/discover">Discover</Navbar.Link>
        <Navbar.Link href="/navbars">Tips</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
