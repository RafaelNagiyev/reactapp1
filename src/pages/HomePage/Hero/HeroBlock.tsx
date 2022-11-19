import './HeroBlock.scss'


export const HeroBlock = () => { 
    return (
        //hero block 
        <div className="hero-block">
        <div className="hero-texts">
            <h1 className="hero-name"> Denis <br /> Novik</h1>
            <p className="hero-age">UX | UI designer <br /> 24 years old, Minsk</p>
            <div className="eng-ru desktop-only">
                <button type="button" className="lang-btn">RU</button>
                <button type="button" className="lang-btn right-btn">ENG</button>
            </div>


          
        </div>
        <div className="avatar desktop-only">
            <img src={require('../../../assets/images/heropic.png')} alt="guy with hat" />
        </div>
        <div className="avatarPhone">
            <img src={require('../../../assets/images/heroAvatar.png')} alt="guy with hat" />
        </div>
    </div>
    )
}   