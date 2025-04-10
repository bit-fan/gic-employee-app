# Employee Management Application

## Overview
This application is designed to manage employee records, allowing users to view, add, edit, and delete employees. It provides a user-friendly interface with validation, error handling, and routing for seamless navigation. The application is built using modern web technologies and adheres to the provided user stories and acceptance criteria.

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
Clone the repository:

```
git clone https://github.com/bit-fan/gic-employee-app.git
cd employee-management-app
```

### Install dependencies:


```
npm install
or
yarn install
```


### Running the Application
Start the development server:
```
npm run dev
or
yarn run dev
```
Open the application in your browser at http://localhost:5173.

---

### Testing
Running Tests
```
npm test
or
yarn test
```
---
### Libraries Used
- React: For building the user interface.
- React Router: For routing and navigation.
- Redux Toolkit: For state management.
- React Hook Form: For form handling and validation.
- @testing-library/react: For unit testing components.
- Vitest: For running tests.
- Tailwind CSS: For styling the application.

### Validation Rules:
- First Name and Last Name: Must be between 6-10 characters.
- Email: Must follow a valid email format.
- Phone Number: Must be a valid Singapore phone number.
- Joined Date: Must be after Date of Birth.

### Error Handling:
- API failures are simulated with mock responses.
- Error messages are displayed in a user-friendly manner.

### Routing:
- The application uses react-router-dom for navigation.
- URL parameters are used for editing employee details.
---
### Areas for Improvement
- Enhanced Error Handling:
- Implement retry logic for failed API calls.
- Add logging for debugging API errors.

### UI/UX Improvements:
- Add pagination or infinite scrolling for the employee list.
- Improve the design of validation error messages.

