import imgexample from '../../../../assets/images/unnamed.webp';
import likes from '../../../../assets/icons/header-favs-icon.png';
import comments from '../../../../assets/icons/comments.PNG';
import messages from '../../../../assets/icons/header-messages-icon.png';
import save from '../../../../assets/icons/save.PNG';
import './post-card.css';

const PostCard = () => {
    return (
        <article class="postCard">

            <div class="postCard-top">

                <div class="postCard-top-left">
                    <div class="postCard-top-left-innerLeft">
                        <figure class="postCard-top-left-innerLeft-figure">
                            <img src={imgexample} alt="Profile"></img>
                        </figure>

                        <div class="postCard-top-left-innerRight">
                            <span>
                                Valentina_Segura
                            </span>
                        </div>
                    </div>
                </div>

                <div class="postCard-top-right">
                    <button>
                        <i class="fa-solid fa-ellipsis"></i>
                    </button>

                </div>
            </div>

            <div class="postCard-middle">
                <div class="postCard-middle-topContainer">
                    <figure class="postCard-middle-topContainer-figure">
                        <img src='https://www.arabiaweddings.com/sites/default/files/articles/2019/08/italy.jpg' class="postCard-middle-topContainer-figure-img" alt='Post'></img>
                    </figure>
                </div>
                <div class="postCard-middle-bottomContainer">

                    <div class="postCard-middle-bottomContainer-innerLeft">
                        <button><img src={likes} alt="likes"></img></button>
                        <button><img src={comments} alt="comments"></img></button>
                        <button><img src={messages} alt="messages"></img></button>
                    </div>

                    <div class="postCard-middle-bottomContainer-innerRight">
                        <img src={save} alt="save"></img>
                    </div>
                </div>

            </div>

            <div class="postCard-bottom">

                <div class="postCard-bottom-container">
                    <section class="postCard-bottom-container-likes">
                        <span>327 Me gusta</span>
                    </section>
                    <section class="postCard-bottom-container-description">
                        <span class="postCard-bottom-container-description-user">Valentina_Segura<span class="postCard-bottom-container-description-description"> Rural Side of Italy</span></span>
                        <div class="postCard-bottom-container-description-comments">
                            <span class="postCard-bottom-container-description-user">Samuel.Jack<span class="postCard-bottom-container-description-description"> Great place!!!</span></span>
                            <button><img src={likes} alt="likes"></img></button>
                        </div>
                        <span class="postCard-bottom-container-description-time">HACE 6 HORAS</span>


                    </section>
                </div>

            </div>
        </article>
    )
}

export default PostCard