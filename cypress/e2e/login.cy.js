describe('Acesso ao Sistema ADM NEW - Auto Avaliar', () => {

  it('Deve carregar a tela de login corretamente', () => {
    cy.visit('https://adm-new.autoavaliar.com.br/login');
    cy.get('input[id="normal_login_email"]').should('be.visible');
    cy.get('input[id="normal_login_password"]').should('be.visible');
    cy.get(':nth-child(3) > .adm-row > .adm-col > .adm-form-item-control-input > .adm-form-item-control-input-content > .adm-btn').should('be.visible');
  });

  // Nosso teste de sucesso agora fica extremamente limpo e sem duplicar código!
  it('Deve realizar login com sucesso usando credenciais válidas', () => {
    cy.loginAdm();
  });

});