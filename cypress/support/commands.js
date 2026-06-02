// Criamos um comando chamado 'loginAdm'
Cypress.Commands.add('loginAdm', () => {
  
  // O cy.session guarda o estado do login. Damos o nome de 'sessao-adm' para ela.
  cy.session('sessao-adm', () => {
    
    // Intercepta todas as requisições (*) e injeta o Header para que seja possível realizar o login
    cy.intercept('**/api/auth', (req) => {
      req.headers['origin'] = 'https://adm.autoavaliar.com.br/';

    });
    
    // Todo o nosso código de login validado entra aqui dentro!
    cy.visit('https://adm-new.autoavaliar.com.br/login');
    
    cy.env(['usuarioAdm', 'senhaAdm']).then(({ usuarioAdm, senhaAdm }) => {
      cy.get('input[id="normal_login_email"]').type(usuarioAdm);
      cy.get('input[id="normal_login_password"]').type(senhaAdm, { log: false });
      cy.get(':nth-child(3) > .adm-row > .adm-col > .adm-form-item-control-input > .adm-form-item-control-input-content > .adm-btn')
        .click();
    });

    // Asserção fundamental: o Cypress precisa ter certeza de que o login terminou 
    // ANTES de salvar a sessão. Olhando sua print, a URL vai para /painel/dashboard
    cy.url().should('include', '/painel/dashboard');

  });

});