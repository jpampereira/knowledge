module.exports = {
  categoryWithChildren: `
    WITH RECURSIVE subcategories (id) AS (
      SELECT id FROM categories WHERE id = ?
      UNION ALL
      SELECT c.id FROM subcategories, categories c
        WHERE "parentId" = subcategories.id
    )
    SELECT id FROM subcategories
  `,
};

/* - O recurso de recursividade do PostgreSQL nos permite construir uma árvore de registros.
 *
 * - No exemplo da aplicação, ele é utilizado para capturar todas as categorias que estão abaixo da
 * informada na requisição da API.
 * 
 * - Ele cria uma tabela temporária e vai utilizando desta para realizar consultas recursivas. 
 * Ao final, basta dar um SELECT em cima da tabela temporária que armazena todos os registros 
 * obtidos dessas consultas.
 * 
 * - A query antes do UNION ALL é o passo inicial da recursão e a posterior são os passos
 * seguintes. Os valores obtidos são armazenados na tabela temporária e uma nova query é
 * realizada para cada um deles.
 */
