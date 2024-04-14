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
git clone  <https://github.com/Neelimapotter/tax-calculator.git>

3. Open the project folder in your preferred text editor or IDE.

4. Open the `index.html` file in a web browser to view the tax calculator.

## Usage

1. Select the age group from the dropdown menu (<40, ≥ 40 & < 60, ≥ 60).
2. Enter the gross annual income, extra income, and deductions in the respective input fields.
3. Click the "Calculate Tax" button to see the tax calculation result.
4. If there are any input validation errors, error icons will be displayed next to the respective input fields with tooltips explaining the errors.
5. Once valid input is provided, the tax calculation result will be displayed in a modal window.


##### Text calculator

![tax-calculators](https://github.com/Neelimapotter/tax-calculator/assets/130246444/4034e1e1-e9da-4592-a17c-8cf141d4a064)

##### Test case

 ![test-case](https://github.com/Neelimapotter/tax-calculator/assets/130246444/bfd21058-8e28-4547-a354-244d1653f5df)

##### Tooltip

![tooltip](https://github.com/Neelimapotter/tax-calculator/assets/130246444/8253deb3-7432-46b0-9436-06262ff1b30d)

##### Error-icon
 
 ![error-icons](https://github.com/Neelimapotter/tax-calculator/assets/130246444/ec82d52d-c60a-4734-ba0a-7b183d259580)
   
## Code Explanation
HTML (`index.html`): Contains the structure of the tax calculator interface, including form fields for user input and a modal for displaying the tax calculation result.
CSS (`styles.css`): Provides styles for the tax calculator interface, including error icon placement and tooltip display.
JavaScript (`Calculator.js`): Implements the logic for tax calculation, input validation, error handling, and modal display. It utilizes jQuery for DOM manipulation and Bootstrap for styling the modal component.


## Contributing 

Contributions are welcome! If you find any bugs or want to suggest enhancements, please create an issue or submit a pull request.
