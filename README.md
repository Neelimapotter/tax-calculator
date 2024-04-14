## Tax Calculator

This is a simple web-based tax calculator that calculates tax based on user input. The calculator follows specific tax calculation rules outlined in the requirements.

## Features 

- Calculates tax based on the provided formula.
- Validates user input for age, income, extra income, and deductions.
- Displays error icons and tooltips for input validation errors.
- Utilizes Bootstrap for styling and jQuery for DOM manipulation and event handling.
- Displays tax calculation result in a modal window.
- Responsive design for usability across different devices.

## Requirements

To run this application locally, you need:
- Web browser (Chrome, Firefox, Safari, etc.)
- Text editor or IDE to view and edit the code (e.g.,Visual Studio Code)

## Getting Started

1. Clone this repository to your local machine:
git clone <https://github.com/Neelimapotter/tax-calculator.git>

2. Open the project folder in your preferred text editor or IDE.

3. Open the `index.html` file in a web browser to view the tax calculator.

## Usage

1. Select the age group from the dropdown menu (<40, ≥ 40 & < 60, ≥ 60).
2. Enter the gross annual income, extra income, and deductions in the respective input fields.
3. Click the "Calculate Tax" button to see the tax calculation result.
4. If there are any input validation errors, error icons will be displayed next to the respective input fields with tooltips explaining the errors.
5. Once valid input is provided, the tax calculation result will be displayed in a modal window.


##### Text calculator

![tax-calculators](https://github.com/Neelimapotter/tax-calculator/assets/130246444/348e219d-8e79-4b28-8191-531a28420f2b)

##### Test case

 ![test-case](https://github.com/Neelimapotter/tax-calculator/assets/130246444/ec9f2000-25bb-4e8b-a7fe-7b41484012b4)

##### Tooltip

![tooltip](https://github.com/Neelimapotter/tax-calculator/assets/130246444/f635f12f-284d-4893-b06d-5fa48aa03566)

##### Error-icon
 
 ![error-icons](https://github.com/Neelimapotter/tax-calculator/assets/130246444/86dd89c0-9adb-4a4c-9f1b-7dc421d9b968)
   
## Code Explanation
HTML (`index.html`): Contains the structure of the tax calculator interface, including form fields for user input and a modal for displaying the tax calculation result.
CSS (`styles.css`): Provides styles for the tax calculator interface, including error icon placement and tooltip display.
JavaScript (`Calculator.js`): Implements the logic for tax calculation, input validation, error handling, and modal display. It utilizes jQuery for DOM manipulation and Bootstrap for styling the modal component.


## Contributing 

Contributions are welcome! If you find any bugs or want to suggest enhancements, please create an issue or submit a pull request.
