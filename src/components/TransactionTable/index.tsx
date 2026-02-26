import { Container } from "./style";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de jogos</td>
            <td className="deposit">R$ 2.150,00</td>
            <td>Desenvolvimento</td>
            <td>26/02/2026</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$ 2.150,00</td>
            <td>Desenvolvimento</td>
            <td>26/02/2026</td>
          </tr>
          <tr>
            <td>Desenvolvimento de jogos</td>
            <td>R$ 2.150,00</td>
            <td>Desenvolvimento</td>
            <td>26/02/2026</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
