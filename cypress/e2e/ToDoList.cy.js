describe('Todo List E2E testing', function() {
    let todos;

    beforeEach(function() {
        // Load the todos fixture
        cy.fixture('todos').then((data) => {
            todos = data;
        });

        // Visit the Todo List page
        cy.visit('/todo-list');
    });

    it('adds and deletes a task successfully', function() {
        // Example: Adding a task from fixture data
        cy.get('input[name="time"]').type(todos[0].time);
        cy.get('input[name="note"]').type(todos[0].note);
        cy.get('button').contains('Submit').click();

        // Example: Asserting task details from fixture data
        cy.get('.todo-table').contains(todos[0].time).should('be.visible');
        cy.get('.todo-table').contains(todos[0].note).should('be.visible');

        // Example: Deleting a task
        cy.get('.delete-button').last().click();
        cy.get('.todo-table').contains(todos[0].time).should('not.exist');
        cy.get('.todo-table').contains(todos[0].note).should('not.exist');
    });
});