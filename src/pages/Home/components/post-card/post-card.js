import imgexample from '../../../../assets/images/unnamed.webp';
import likes from '../../../../assets/icons/header-favs-icon.png';
import comments from '../../../../assets/icons/comments.png';
import messages from '../../../../assets/icons/header-messages-icon.png';
import save from '../../../../assets/icons/save.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import './post-card.css';


const PostCard = () => {
    return (
        <article className="postCard">

            <div className="postCard-top">

                <div className="postCard-top-left">
                    <div className="postCard-top-left-innerLeft">
                        <figure className="postCard-top-left-innerLeft-figure">
                            <img src={imgexample} alt="Profile"></img>
                        </figure>

                        <div className="postCard-top-left-innerRight">
                            <span>
                                Valentina_Segura
                            </span>
                        </div>
                    </div>
                </div>

                <div className="postCard-top-right">
                    <button>
                        <FontAwesomeIcon icon={faEllipsis} className="postCard-top-right-button" />
                    </button>

                </div>
            </div>

            <div className="postCard-middle">
                <div className="postCard-middle-topContainer">
                    <figure className="postCard-middle-topContainer-figure">
                        <img src='https://www.arabiaweddings.com/sites/default/files/articles/2019/08/italy.jpg' className="postCard-middle-topContainer-figure-img" alt='Post'></img>
                    </figure>
                </div>
                <div className="postCard-middle-bottomContainer">

                    <div className="postCard-middle-bottomContainer-innerLeft">
                        <button><img src={likes} alt="likes"></img></button>
                        <button><img src={comments} alt="comments"></img></button>
                        <button><img src={messages} alt="messages"></img></button>
                    </div>

                    <div className="postCard-middle-bottomContainer-innerRight">
                        <img src={save} alt="save"></img>
                    </div>
                </div>

            </div>

            <div className="postCard-bottom">

                <div className="postCard-bottom-container">
                    <section className="postCard-bottom-container-likes">
                        <span>327 Me gusta</span>
                    </section>
                    <section className="postCard-bottom-container-description">
                        <span className="postCard-bottom-container-description-user">Valentina_Segura<span className="postCard-bottom-container-description-description"> Rural Side of Italy</span></span>
                        <div className="postCard-bottom-container-description-comments">
                            <span className="postCard-bottom-container-description-user">Samuel.Jack<span className="postCard-bottom-container-description-description"> Great place!!!</span></span>
                            <button><img src={likes} alt="likes"></img></button>
                        </div>
                        <span className="postCard-bottom-container-description-time">HACE 6 HORAS</span>


                    </section>
                </div>

            </div>
        </article>
    )
}

export default PostCard