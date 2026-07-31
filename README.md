# 🎓 Portal do Aluno UFPI 2026 - Planejador de Grade

Um sistema interativo, iniciado com fins de aprendizado, desenvolvido para auxiliar os alunos da Universidade Federal do Piauí (UFPI) a organizarem suas grades horárias de forma visual, rápida e intuitiva.

---

## ✨ Funcionalidades

- **Dashboard Inteligente:** Acesso rápido a grade horária e links institucionais (SIGAA, RU, Calendário).
- **Busca em Tempo Real:** Filtro avançado de matérias com normalização de caracteres (ignora acentos e cedilhas).
- **Grade Horária Dinâmica:** Visualização em tempo real das matérias selecionadas.
- **Sincronização de Estado:** Sistema de seleção dual (via busca ou via lista de períodos).
- **Multicursos:** Suporte para diferentes fluxogramas acadêmicos.

## 🛠️ Tecnologias Utilizadas

- **HTML5 & CSS3:** Estrutura modular e estilização moderna com foco em UX.
- **JavaScript (Vanilla):** Lógica de filtragem, manipulação dinâmica do DOM e gerenciamento de estado global.
- **Render:** Hospedagem e deploy contínuo.

## 🧠 Desafios Técnicos Superados

Durante o desenvolvimento, foquei em resolver problemas reais de arquitetura frontend e de lógica sistêmica:

1. **Gerenciamento de Estado:** Implementação de um `Set` global para IDs e um `Array` de objetos para garantir que a grade reflita exatamente o que está selecionado, independente de onde o usuário clique.
2. **Desempenho de Busca:** Otimização da filtragem para evitar renderizações desnecessárias e tratamento de strings vazias para manter a interface limpa.
3. **UI Responsiva:** Criação de uma tabela de horários compacta que mantém a legibilidade em diferentes resoluções.
4. **Tratamento de Dados:** Tradução do padrão de horários acadêmicos para coordenadas dentro da grade, possibilitando exibição precisa.

## 📌 Próximos Passos (Roadmap)

- [ ] Implementar exportação da grade em PDF/Imagem.
- [ ] Completar o banco de dados da UFPI com os cursos e materias pendentes.
- [ ] Adicionar tela de seleção de campus do aluno e construção de seus banco de dados.
- [ ] Adição de diferentes temas possiveis para seleção (Dark Mode, Daltônico).

## 📁 Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone [https://github.com/SEU_USUARIO/NOME_DO_REPO.git](https://github.com/SEU_USUARIO/portalUfpi_v2.git)
   ```
2. Instale a extensão **Live Server** ou equivalente:
   Por segurança, navegadores modernos bloqueiam funcionalidades como o **fetch** usado nesse projeto ao abrir o index como file. Para seu desempenho esperado, é necessária uma ferramenta que simule uma hospedagem desse.
