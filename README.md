# Multistep Form React App

## Overview
This is a simple React application that implements a multistep form using the `useMultistepForm` custom hook. The form collects user information, address details, and account information across multiple steps.

### Components

1. **App Component**
    - The main component that renders the multistep form.
    - Manages the state for form data, handles form submission, and utilizes the `useMultistepForm` hook for managing form steps.

    **State**
    - `data`: State variable to store form data.
    - `INITIAL_DATA`: Initial form data.

    **Methods**
    - `updateInputsHandler`: Updates the form data based on user input in each step.
    - `submitData`: Sends form data to a specified endpoint upon completion of all steps.
    - `onSubmit`: Handles form submission, either advancing to the next step or submitting the data.

2. **useMultistepForm Custom Hook**
    - Manages the multistep form functionality.
    - Provides methods and state variables for navigating between steps, checking if it's the first or last step, and accessing the current step.

3. **UserForm, Address, and AccountForm Components**
    - Individual components representing each step of the multistep form.
    - Receive form data and an update method as props and render input fields for their respective sections.

### Usage
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application with `npm start`.

### Form Navigation
- Use the "Next" button to advance to the next step.
- Use the "Back" button to go back to the previous step.

### Form Submission
- Upon reaching the last step, the form can be submitted, and the data is sent to the specified endpoint.
- Successful submissions trigger an alert, while any errors are logged to the console.

### Styling
- The form is styled with a clean and simple design.
- Utilizes flexbox for layout and has a responsive design.

### Dependencies
- React
- TypeScript
- Firebase (Note: Firebase is used in the project. Ensure Firebase configuration is set up.)

