import React from 'react';
import classes from './Article.css';

const Article5 = () => {
    return (
        <div>

            <div className={classes.Background5}></div>
            <p className={classes.Header}> Na naszych oczach dzieje się historia.
                Za kołem polarnym tak upalnie nie
                było jeszcze nigdy</p>
            <p className={classes.Paragraph}>Niespotykana nigdy wcześniej fala upałów nawiedziła północną Skandynawię. W wielu miejscowościach, położonych za kołem </p>
            <button className={classes.More}>ZOBACZ WIĘCEJ >></button>

        </div>
    )
}

export default Article5;