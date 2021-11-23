import 'cypress-file-upload';
require('@4tw/cypress-drag-drop');

Cypress.Commands.add('login', (email, password) => {
    cy.get('input[type="email"]').type(email)
      cy.get('input[type="password"]').type(password)
cy.get('input.login__button').click()
})

// Cypress.Commands.add('uploadFile', { prevSubject: true }, (subject, fixturePath, mimeType) => {
//     cy.fixture(fixturePath, 'base64').then(content => {
//       Cypress.Blob.base64StringToBlob(content, mimeType).then((blob) => {
//         const testfile = new File([blob], fixturePath, { type: mimeType });
//         const dataTransfer = new DataTransfer();
//         const fileInput = subject[0];
  
//         dataTransfer.items.add(testfile);
//         fileInput.files = dataTransfer.files;
  
//         cy.wrap(subject).trigger('change', { force: true });


       
   