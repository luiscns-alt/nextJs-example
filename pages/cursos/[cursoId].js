export async function getServerSideProps(context) {
  const id = context.query.cursoId;
  const response = await fetch("http://localhost:3000/api/cursos/" + id);
  const data = await response.json();
  return {
    props: {
      curso: data,
    },
  };
}

export default function Cursos(props) {
  const curso = props.curso;

  return (
    <div>
      Meu curso: {curso.nome} - {curso.id} -- {props.teste}
    </div>
  );
}
