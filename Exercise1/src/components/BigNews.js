import React from 'react';
import styles from './BigNews.module.css';

export default function BigNews(props) {
    const { title, image, topic, text, isPaid, category, time } = props;

    return (
        <div className={ styles.bigNews }>
            <div className={ styles.title }>{ title ? title : null }</div>
            <div><img src={ image } alt="News' featured" /></div>
            <div>
                <span className={ styles.topic }>{ topic }</span>
                <span>{ text }</span>
            </div>
            <div className={ styles.bottomContainer }>
                <div className={ styles.bottomTags }>
                    { isPaid ? <img src="diamond.jpg" alt="Paid News" /> : null }
                    <div>{ category ? category : null }</div>
                    <div>{ time ? time : null }</div>
                </div>
                <div><img className={ styles.bookmark } src="bookmark.jpg" alt="Bookmark this news" /></div>
            </div>
        </div>
    )
}
