import './Skills.scss'

export const Skills = () => {
    return (
        <div className="skills">
            <div className="skl-txt">
                <p className="txt_1">Skills</p>
                <p className="txt_2">I work in such programs as</p>
            </div>
            <div className="icons">
                <div className="skpic">
                    <img src={require('../../../assets/images/PS.png')} alt="skills-img" />
                    <p>Adobe<br />After Effects</p>
                    <div className="stars">
                        <img src={require('../../../assets/images/BlackStar.png')} alt="" />
                        <img src={require('../../../assets/images/BlackStar.png')} alt="" />
                        <img src={require('../../../assets/images/BlackStar.png')} alt="" />
                        <img src={require('../../../assets/images/BlackStar.png')} alt="" />
                        <img src={require('../../../assets/images/BlackStar.png')} alt="" />
                    </div>
                </div>
                <div className="skpic">
                    <img src={require('../../../assets/images/AI.png')} alt="skills-img" />
                    <p>Adobe<br />Illustrator</p>
                    <div className="stars">
                    <img src={require('../../../assets/images/BlackStar.png')} alt="" />
                    <img src={require('../../../assets/images/BlackStar.png')} alt="" />
                    <img src={require('../../../assets/images/BlackStar.png')} alt="" />
                    <img src={require('../../../assets/images/WhiteStar.png')} alt="" />
                    <img src={require('../../../assets/images/WhiteStar.png')} alt="" />
                        
                    </div>
                </div>
                <div className="skpic">
                    <img src={require('../../../assets/images/AE.png')} alt="skills-img" />
                    <p>Adobe<br />After Effects</p>
                    <div className="stars">
                    <img src={require('../../../assets/images/BlackStar.png')} alt="" />
                    <img src={require('../../../assets/images/BlackStar.png')} alt="" />
                    <img src={require('../../../assets/images/BlackStar.png')} alt="" />
                    <img src={require('../../../assets/images/BlackStar.png')} alt="" />
                    <img src={require('../../../assets/images/WhiteStar.png')} alt="" />
                    </div>
                </div>
                <div className="skpic">
                    <img src={require('../../../assets/images/FIGMA.png')} alt="skills-img" />
                    <p>Figma</p> <br />
                    <div className="stars">
                    <img src={require('../../../assets/images/BlackStar.png')} alt="" />
                    <img src={require('../../../assets/images/BlackStar.png')} alt="" />
                    <img src={require('../../../assets/images/BlackStar.png')} alt="" />
                    <img src={require('../../../assets/images/BlackStar.png')} alt="" />
                    <img src={require('../../../assets/images/WhiteStar.png')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}