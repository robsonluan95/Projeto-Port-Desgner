import Logo from '../../assets/logo.png';
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png';
import Linkedin from '../../assets/linkedin.png';
import Dribble from '../../assets/dribble.png';
import Behance from '../../assets/behance.png'
import GooglePlus from '../../assets/google-plus.png'
import './style.css';

export default function Rodape(){
    return(
        <div className='rodapeFooter limite-area'>
            <img src={Logo}/>
            <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas</p>
            <div className='imaRodape limite-area'>
                <a href='sadsa'><img src={Facebook}/></a>
                <a href=''><img src={Twitter}/></a>
                <a href=''><img src={Linkedin}/></a>
                <a href=''><img src={Dribble}/></a>
                <a href=''><img src={Behance}/></a>
                <a href=''><img src={GooglePlus}/></a>
            </div>
            <p >Copyright 2023 <a className='nome' href=''>Robson Luan</a></p>
        </div>
    );
}