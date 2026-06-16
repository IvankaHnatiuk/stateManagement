export default function Card({ data }) {
  return (
    <div className="card">
      <h2>Dati inseriti:</h2>
      <p>Nome: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
}