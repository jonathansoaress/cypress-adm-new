describe('Fluxo de Cadastro de Novo Veículo', () => {

  // O beforeEach vai garantir que estamos logados e na página certa ANTES de cada teste
  beforeEach(() => {
    // 1. Chama nosso comando mágico. Ele vai ver se já tem sessão salva; se sim, pula a tela de login!
    cy.loginAdm();

    // 2. O cy.session limpa a tela (fica em branco), então precisamos mandar ele visitar o Dashboard
    cy.visit('https://adm-new.autoavaliar.com.br/painel/dashboard');
  });
  

  it('Deve iniciar o cadastro ao clicar em Novo Veículo', () => {
    
    // Olhando para sua print, o botão "+ Novo Veículo" parece ter uma classe específica.
    // Dica: Usamos 'contains' atrelado a um botão ou link para ser mais resiliente.
    cy.get('#nav-bar__add-new-button').should('be.visible').click();

    // Aqui faremos a asserção de que a tela ou o modal de cadastro realmente abriu.
    // Exemplo: cy.contains('h1', 'Cadastrar Veículo').should('be.visible');
    cy.url().should('include', '/painel/novo-anuncio');
    // Verifica se o botão de veículo seminovo já está visivel
    cy.contains('span', 'Seminovo');
    // Seleciona loja
    cy.get('#information__store').click();
    cy.get('#select-option__2-9829').click();
    // Seleciona tipo de veículo Seminovo
    cy.get('#information__type > :nth-child(1)').click();
    // Seleciona veículo de showroom = Sim
    cy.get('#information__showroom > :nth-child(2)').click();
    // Seleciona único dono = Sim
    cy.get('#information__singleOwner > :nth-child(2)').click();
    // Seleciona veículo blindado = Sim
    cy.get('#information__armored > :nth-child(2)').click();
    // Seleciona 4x4 = Sim
    cy.get('#information__fullTraction > :nth-child(2)').click();
    // Seleciona manutenções preventivas = Sim
    cy.get('#information__preventive-maintenance > :nth-child(2)').click(); 

  });

});