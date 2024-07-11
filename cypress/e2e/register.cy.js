describe('register page E2E testing', function() {
    beforeEach(function() {
      cy.fixture('user').then((user) => {
        this.userData = user;
      });
    });
  
    it('testing register page fun', function() {
      cy.visit('/register');
      cy.get('h1').should('contain', 'Register');
      cy.get('input[name="Name"]').type(this.userData.Name);
      cy.get('input[name="Age"]').type(this.userData.Age);
      cy.get('input[name="Username"]').type(this.userData.Username);
      cy.get('input[name="Password"]').type(this.userData.Password);
      
      // Click the "Sign Up" button
      cy.get('button').contains('Sign Up').click();
  
      // Add debugging steps to check the page state
      cy.url().then((url) => {
        cy.log('Current URL:', url);
      });
  
      cy.get('body').then(($body) => {
        if ($body.text().includes('user registered successfully!')) {
          cy.log('Success message found');
        } else {
          cy.log('Success message not found');
        }
      });
  
      // Adjust the assertion for the success message
      cy.contains('user registered successfully!').should('exist');
      cy.log('register functionality is working!');
    });
  });
  