import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";

export default function Cursos() {
  const router = useRouter(),
    id = router.query.cursoId,
    [curso, setCurso] = useState({});
  useEffect(() => {
    if (id) {
      fetch("http://localhost:3000/api/cursos/" + id)
        .then((reponse) => reponse.json())
        .then((data) => setCurso(data));
    }
  }, [id]);

  if (curso.id){
      return <div>Meu curso: {curso.nome}</div>;
  }
  return <div>Curso não encontrado</div>;
}
