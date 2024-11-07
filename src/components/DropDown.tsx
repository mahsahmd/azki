import { useClickOutside } from "@/hooks/useClickOutside";
import React, { useState } from "react";

type DropdownProperties = {
  options?: Array<{ id: number; title: string }>;
  value: string;
  onChange: (key: string, value: { id: number; title: string }) => void;
  placeholder: string;
  name: string;
};
const Dropdown = ({
  options,
  value,
  onChange,
  placeholder,
  name,
}: DropdownProperties) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const { reference } = useClickOutside<HTMLButtonElement>(() =>
    setIsOpen(false)
  );
  return (
    <>
      <button
        ref={reference}
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-full relative  h-11 rounded-md border border-inputBorder bg-white px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-mainGreen focus:ring-offset-1 focus:ring-offset-mainGreen"
      >
        {value || placeholder}
        <svg
          className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 7l5 5 5-5"
          />
        </svg>
        {isOpen && (
          <div className="absolute right-0 top-10  z-10 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {Array.isArray(options) &&
                options?.map((item) => (
                  <p
                    onClick={() =>
                      onChange(name, {
                        id: item.id,
                        title: item.title,
                      })
                    }
                    key={item.id}
                    className="block text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item.title}
                  </p>
                ))}
            </div>
          </div>
        )}
      </button>
    </>
  );
};

export default Dropdown;
