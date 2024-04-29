
import torta from 'src/assets/img/torta.png';


const Home = ()=>{
    return(
        <div className="ContHome">
            <div className="bienv">Bienvenido a <strong>Happy Cake</strong></div>
            <div className="llamado">El lugar de los pasteles felices</div>
            <img className="imagen" src={torta} alt="Torta" />
        </div>
    );
};

export default Home