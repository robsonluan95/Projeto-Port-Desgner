import './style.css';

export default function Card(){
    return(
        <div className='backColor'>
            <section className="secaoCard ">
                <div className='card'>
                    <p> JUNHO 2012 - 2016</p>
                    <h3>Web Designer</h3>
                    <p>Pied Piper StartUp.</p>
                    <p>Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otmizados para buscadores</p>
                    
                </div>
                <div className='card'>
                    <p> Agosto 2016 - 2019</p>
                    <h3>Product Designer</h3>
                    <p>E Corp.</p>
                    <p>Criaçao de modelos estrategicos de conversão identificando o cliente e mapeando toda sua jornada de compra</p>
                    
                </div>
                <div className='card'>
                    <p> Fevereiro 2019 - 2021</p>
                    <h3>Digital Consulting</h3>
                    <p>Arasaka Inc.</p>
                    <p>Consultoria em estrategias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução</p>
                </div>
            </section>
        </div>
        
    )
}