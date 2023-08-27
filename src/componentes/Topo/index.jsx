import './style.css';
import {useState} from 'react';
import Logo from '../../assets/logo.png';
import Dia from '../../assets/sun.png';
import Noite from '../../assets/moon.png';

export default function Topo(props){
    const [nome, setNome]=useState(Dia)
    const alternarCor=()=>{
        
        if (props.tema==='claro'){
            props.setState('escuro');
            setNome(Noite)
            
        }else{
            props.setState('claro');
            setNome(Dia)
        }
    }
    return(

            <div className='Topo'>
                <img src={Logo} alt="logotipo" />
                <button className='botao' onClick={alternarCor} ></button>
            </div>
        );
        
}

