# Azki Test

This project is a test application for Azki Insurance Company. The purpose of this app is to simulate a form-based user flow where users select various options regarding insurance types, vehicle models, and discounts. The app uses modern React technologies with state management, form validation, and API data fetching.

## Table of Contents

- [Technologies](#technologies)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Technologies

This project uses the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for building fast, server-rendered applications.
- **React Query**: A data fetching and state management library for React.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Hook Form**: A library for managing form state and validation.
- **TypeScript**: A strongly-typed superset of JavaScript.

## Features

The app includes the following key features:

1. **Sign Up Page with Full Validation**:
   - The user can fill out a sign-up form that includes validation for all fields using **React Hook Form**.
   - Validation includes required fields, correct format for certain inputs, and conditional field checks.
2. **Insurance Type Selection**:

   - The user selects the type of insurance they want (Third Party, Comprehensive, etc.)

3. **Vehicle Type and Model Selection**:
   - After selecting the insurance type, the user selects their vehicle type and model from dynamically loaded options based on the selected insurance type.
4. **Insurance Company Selection**:

   - The user selects their previous insurance company .

5. **Discount Selection**:
   - The user selects discount percentages for both third-party insurance and driver accident coverage.
   - After completing the selections, a **modal** displays a summary of all selected fields (insurance type, vehicle model, insurance company, and discounts).

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/azki-insurance-test.git
cd azki-insurance-test
```

### 2. Install dependencies:

```bash
npm install
# or if you're using yarn
yarn install
```

### 3. Run the development server:

```bash
npm run dev
# or with yarn
yarn dev
```

### Folder Structure

Here’s an overview of the project’s folder structure:

```bash
/azki-test
├── /components              # Reusable UI components (Dropdown, Button, Modal)
├── /assets                  # Fonts
├── /hooks                   # Custom hooks (useInsuranceSummary, etc.)
├── /pages                   # Page components for each step (SignUp, SelectDiscount, etc.)
├── /queries                 # API calls with React Query
├── /styles                  # Global styles and Tailwind configurations
├── /public                  # Public assets like images
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies and scripts
```
