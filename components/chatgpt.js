import { useState } from "react";

export default function ChatGPT()
{
    const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-screen flex ${isOpen ? 'fixed' : 'relative'}`}>
      <div
        className={`bg-gray-900 text-white w-64 flex-shrink-0 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        <nav className="p-4">
          <ul>
            <li className="mb-2">
              <a href="/">Home</a>
            </li>
            <li className="mb-2">
              <a href="/about">About</a>
            </li>
            <li className="mb-2">
              <a href="/services">Services</a>
            </li>
            <li className="mb-2">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-grow p-4">
        <button
          className="bg-gray-900 text-white p-2 rounded-md"
          onClick={toggleDrawer}
        >
          {isOpen ? 'Close' : 'Open'} Drawer
        </button>
        <h1>Main Content</h1>
        {/* Your main content goes here */}
      </div>
    </div>
  );
}