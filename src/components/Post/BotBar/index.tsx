import React from 'react'

import styles from "./style.module.css"
import likeImg from 'img/like.png'
import heartImg from 'img/heart.png'

type Props = {
    likeHandler: () => Promise<void>
    likes: number
    comments: number
}

const BotBar = (props: Props) => {
    return (
        <div className={styles.postBotbar}>
            <div className={styles.postReactionList}>
                <img className={styles.postReactionItem}
                    src={likeImg}
                    onClick={props.likeHandler}
                    alt="Post like reaction" />
                <img className={styles.postReactionItem}
                    src={heartImg}
                    onClick={props.likeHandler}
                    alt="Post heart reaction" />
                <span data-testid="post likes"
                    className={styles.postLikeCounter}>
                    {props.likes} people liked it
                </span>
            </div>
            <div data-testid="post comments"
                className={styles.postComments}>
                <span className={styles.postCommentCounter}>
                    {props.comments} comments
                </span>
            </div>
        </div>
    )
}

export default BotBar