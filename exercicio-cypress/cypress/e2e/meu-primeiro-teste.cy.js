describe('Testes da aplicação Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('Deve incluir um novo contato', () => {
    const novoContato = {
      nome: 'Cypress Teste',
      email: 'cypress@teste.com',
      telefone: '1234567890',
    };

    cy.get('[placeholder="Nome"]').type(novoContato.nome);
    cy.get('[placeholder="E-mail"]').type(novoContato.email);
    cy.get('[placeholder="Telefone"]').type(novoContato.telefone);
    cy.get('.adicionar').click();

    cy.screenshot('tela-inscricao')
  });

  it('Deve alterar um contato existente', () => {
    const contatoAlterado = {
      nome: 'Nome Alterado',
      email: 'emailalterado@teste.com',
      telefone: '9876543210',
    };

    // Clica no botão de editar
    cy.get('.edit').first().click()

    // Preenche os campos com os novos dados
    cy.get('[placeholder="Nome"]').clear().type(contatoAlterado.nome);
    cy.get('[placeholder="E-mail"]').clear().type(contatoAlterado.email);
    cy.get('[placeholder="Telefone"]').clear().type(contatoAlterado.telefone);
    cy.get('.alterar').click()

    cy.screenshot('tela-inscricao')
  });

  it('Deve remover um contato existente', () => {
    // Clica no botão de excluir
    cy.get('.delete').first().click()

    cy.screenshot('tela-inscricao')
  });
});