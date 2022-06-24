import likesicon from '../../../../assets/icons/header-favs-icon.png';
import comments from '../../../../assets/icons/comments.png';
import messages from '../../../../assets/icons/header-messages-icon.png';
import save from '../../../../assets/icons/save.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import './post-card.css';
import array from '../../../../api/IGJSON.json';


const PostCard = () => {
    let apiJson = array.posts;
    return (
    apiJson.map(({avatarUrl,user,imgUrl,likes,description,fisrtComment,userFirstComment})=>{
        return (
            <article className="postCard">
    
                <div className="postCard-top"> 
                    <div className="postCard-top-left">
                        <div className="postCard-top-left-innerLeft">
                            <figure className="postCard-top-left-innerLeft-figure">
                                <img src={avatarUrl} alt="Profile"/>
                            </figure>
    
                            <div className="postCard-top-left-innerRight">
                                <span>
                                    {user}
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
                            <img src={imgUrl} className="postCard-middle-topContainer-figure-img" alt='Post'/>
                        </figure>
                    </div>
                    <div className="postCard-middle-bottomContainer">
    
                        <div className="postCard-middle-bottomContainer-innerLeft">
                            <button><img src={likesicon} alt="likes"/></button>
                            <button><img src={comments} alt="comments"/></button>
                            <button><img src={messages} alt="messages"/></button>
                        </div>
    
                        <div className="postCard-middle-bottomContainer-innerRight">
                            <img src={save} alt="save"/>
                        </div>
                    </div>
    
                </div>
    
                <div className="postCard-bottom">
    
                    <div className="postCard-bottom-container">
                        <section className="postCard-bottom-container-likes">
                            <span>{likes} Me gusta</span>
                        </section>
                        <section className="postCard-bottom-container-description">
                            <span className="postCard-bottom-container-description-user">{user}<span className="postCard-bottom-container-description-description">{description}</span></span>
                            <div className="postCard-bottom-container-description-comments">
                                <span className="postCard-bottom-container-description-user">{userFirstComment}<span className="postCard-bottom-container-description-description">{fisrtComment}</span></span>
                                <button><img src={likesicon} alt="likes"/></button>
                            </div>
                            <span className="postCard-bottom-container-description-time">HACE 6 HORAS</span>
    
    
                        </section>
                    </div>
    
                </div>
            </article>
        );

    })
)
}

export default PostCard