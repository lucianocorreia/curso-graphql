const perfis = [
  { id: 1, nome: 'comum' },
  { id: 2, nome: 'administrador' }
]

const usuarios = [{
  id: 1,
  nome: 'João Silva',
  email: 'jsilva@zemail.com',
  idade: 29,
  perfil_id: 1
}, {
  id: 2,
  nome: 'Luciano Correia',
  email: 'lcorreia@zemail.com',
  idade: 40,
  perfil_id: 2
}, {
  id: 3,
  nome: 'Erika Carrarine',
  email: 'ecarrarine@zemail.com',
  idade: 42,
  perfil_id: 1
},
];

module.exports = { usuarios, perfis }