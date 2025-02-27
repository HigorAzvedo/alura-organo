import { useState } from 'react';
import Botao from '../Botao/Botao';
import Campo from '../Campo/Campo';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {

    const[nome, setNome] = useState('')
    const[cargo, setCargo] = useState('')
    const[imagem, setImagem] = useState('')
    const[time, setTime] = useState('')
    const[nomeTime, setNomeTime] = useState('')
    const[corTime, setCorTime] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, 
            cargo,
            imagem,
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario' >
            <form onSubmit={aoSalvar}>
                <h2>Preencha seus dados para criar o card do colaborador</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da sua imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Time' 
                    itens={props.nomeDosTimes}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({nome: nomeTime, cor: corTime})
            }}>
                <h2>Preencha seus dados para criar um novo time</h2>
                <Campo 
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio
                    type='color' 
                    label="Cor" 
                    placeholder="Digite a cor do time" 
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar Novo Time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;