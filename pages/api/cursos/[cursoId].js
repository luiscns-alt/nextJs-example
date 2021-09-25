
const MeusCursos =[
    {
        id: '1',
        nome: 'React'
    },
    {
        id: '2',
        nome: 'NextJs'
    },
]

export default function Cursos(request, response){
    // request.query.cursoId;
    const id =request.query.cursoId,
        curso = MeusCursos.find(MeusCurso => MeusCurso.id === id);
    if(curso){
         response.status(200).json(curso);
    }else{
        response.status(404).json({
            mensagem: 'Curso não encontrado',
        })
    }
}