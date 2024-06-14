import { IoCloseCircle } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import './Colaborador.css'

const Colaborador = ({id, nome, cargo, imagem, corDeFundo, favorito, aoDeletar, aoFavoritar}) => {

    function favoritar(){
        aoFavoritar(id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return(
        <div className='colaborador'>
            <IoCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(id)}
            />
            <div className='cabecalho' 
                style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className="favoritar">
                    {favorito 
                    ? <FaHeart {...propsFavorito}  color='#ff0000'/> 
                    : <CiHeart {...propsFavorito }/>}
                </div>
            </div>
        </div>
    )
}

export default Colaborador