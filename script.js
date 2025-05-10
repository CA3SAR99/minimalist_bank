document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const loginMessage = document.getElementById('loginMessage');

  // Login functionality
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = loginForm.username.value.trim();
      const password = loginForm.password.value.trim();
      
      // Redirect to banking.html for specific credentials
      if (username === "test" && password === "test") {
        window.location.href = "banking.html";
      } 
      // Simple demo validation
      else if (username === "user" && password === "password") {
        loginMessage.style.color = "#388e3c";
        loginMessage.textContent = "Login successful! (Demo only)";
      } else {
        loginMessage.style.color = "#d32f2f";
        loginMessage.textContent = "Invalid username or password.";
      }
    });
  }

  // Add Funds functionality
  const addFundsButtons = document.querySelectorAll('.add-funds-btn');
  
  addFundsButtons.forEach((button) => {
    button.addEventListener('click', function() {
      // Get the parent account card and its elements
      const accountCard = this.closest('.account-card');
      const balanceElement = accountCard.querySelector('.balance-value');
      const inputElement = accountCard.querySelector('.funds-input');
      
      // Get input value and convert to number
      const inputValue = parseFloat(inputElement.value);
      
      if (!isNaN(inputValue) && inputValue > 0) {
        // Get current balance (remove $ and convert to number)
        const currentBalance = parseFloat(balanceElement.textContent.replace('$', ''));
        
        // Calculate new balance
        const newBalance = currentBalance + inputValue;
        
        // Update the display
        balanceElement.textContent = `$${newBalance.toFixed(2)}`;
        
        // Clear input field
        inputElement.value = '';
      } else {
        alert('Please enter a valid amount');
      }
    });
  });
});