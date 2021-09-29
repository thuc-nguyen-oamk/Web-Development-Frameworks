import React from 'react';
import styles from './SmallNews.module.css';
import cx from 'classnames';

export default function SmallNews(props) {
    const { topic, text, image, isPaid, category, time, isBookmarkable, theme } = props;

    return (
        <div className={ cx(styles.smallNews, styles[theme]) }>
            <div className={ styles.flex }>
                <div>
                    <span className={ cx(styles.topic, styles[theme]) }>{ topic ? topic : null }</span>
                    <span className={ cx(styles.text, styles[theme]) }>{ text ? text : null }</span>
                </div>
                { image ? <img src={image} alt="Normal news' featured" /> : null }
            </div>
            <div className={ styles.bottomContainer }>
                <div className={ styles.bottomTags }>
                    { isPaid ? <img src="diamond.jpg" alt="Paid News" /> : null }
                    <div>{ category ? category : null }</div>
                    <div>{ time ? time : null }</div>
                </div>
                <div>
                    { isBookmarkable ? <img className={ styles.bookmark } src="bookmark.jpg" alt="Bookmark this news" /> : null }
                </div>
            </div>
        </div>
        
    )
}
