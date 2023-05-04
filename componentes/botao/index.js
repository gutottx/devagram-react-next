export default function Botao({
    tipo = 'button',
    texto,
    cor = 'primaria',
    desabilitado = false,
    manipularClique

}) {
    return (
        <button
            tipo={tipo}
            className={`btn ${cor}`}     
            disabled={desabilitado}
            onClick={manipularClique}
         >
            {texto} 
         </button> 
    );
}