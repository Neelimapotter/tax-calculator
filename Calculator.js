$(document).ready(function() {
    $('#taxForm').submit(function(event) {
      event.preventDefault();
  
      // Reset error styles
      $('.error-icon').hide();
      $('.form-control').removeClass('is-invalid');
  
      // Validate input fields
      var age = $('#age').val();
      var income = parseFloat($('#income').val());
      var extraIncome = parseFloat($('#extraIncome').val());
      var deductions = parseFloat($('#deductions').val());
  
      var isValid = true;
  
      if (!age) {
        $('#age').addClass('is-invalid');
        $('#ageErrorIcon').show();
        isValid = false;
      }
  
      if (isNaN(income)) {
        $('#income').addClass('is-invalid');
        $('#incomeErrorIcon').show();
        isValid = false;
      }
  
      if (isNaN(extraIncome)) {
        $('#extraIncome').addClass('is-invalid');
        $('#extraIncomeErrorIcon').show();
        isValid = false;
      }
  
      if (isNaN(deductions)) {
        $('#deductions').addClass('is-invalid');
        $('#deductionsErrorIcon').show();
        isValid = false;
      }
  
      if (isValid) {
        var tax = calculateTax(age, income, extraIncome, deductions);
        $('#taxOutput').html('<div class="alert alert-success">Tax to be paid: ' + tax.toFixed(2) + ' Lakhs</div>');
      }
    });
  });
  
  function calculateTax(age, income, extraIncome, deductions) {
    var taxableIncome = income + extraIncome - deductions;
    if (taxableIncome <= 8) {
      return 0;
    } else {
      var taxRate;
      if (age == '<40') {
        taxRate = 0.3;
      } else if (age == '>=40&<60') {
        taxRate = 0.4;
      } else {
        taxRate = 0.1;
      }
      return taxRate * (taxableIncome - 8);
    }
  }