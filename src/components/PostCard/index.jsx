import React from 'react';

import styles from './PostCardStyles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const PostCard = () => {
  return (
    <div className="card my-1">
      <div className="card-header">
        <p className="mb-2">
          <span className="author">author</span> - <span className="createTime">createTime</span>
        </p>
        <h5 className="title card-title">Special title treatment</h5>
      </div>
      <div className="card-body">
        <img className="image mb-3" />
        <p
          className={styles.description + ' card-text collapse'}
          id="cardExample"
          aria-expanded="false">
          With supporting text below as a natural lead-in to additional content.With supporting text
          below as a natural lead-in to additional content.With supporting text below as a natural
          lead-in to additional content.With supporting text below as a natural lead-in to
          additional content.With supporting text below as a natural lead-in to additional
          content.With supporting text below as a natural lead-in to additional content.With
          supporting text below as a natural lead-in to additional content.With supporting text
          below as a natural lead-in to additional content.With supporting text below as a natural
          lead-in to additional content. With supporting text below as a natural lead-in to
          additional content.With supporting text below as a natural lead-in to additional
          content.With supporting text below as a natural lead-in to additional content.With
          supporting text below as a natural lead-in to additional content.With supporting text
          below as a natural lead-in to additional content.With supporting text below as a natural
          lead-in to additional content.With supporting text below as a natural lead-in to
          additional content.With supporting text below as a natural lead-in to additional
          content.With supporting text below as a natural lead-in to additional content.With
          supporting text below as a natural lead-in to additional content.
        </p>
        <a
          className={styles.readMore + ' collapsed'}
          data-bs-toggle="collapse"
          href="#cardExample"
          role="button"
          aria-controls="cardExample"></a>
        <p className="tags mt-2">#gfdg</p>
        <p>
          Время чтения: <span className="readingTime">454346</span> мин.
        </p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <p>
          <span className="commentsCount">5</span>&nbsp;
          <FontAwesomeIcon icon={faMessage} />
        </p>
        <p>
          <span className="likes mr-3">5</span>&nbsp;
          <FontAwesomeIcon icon={faHeart} color="red" />
        </p>
      </div>
    </div>
  );
};

export default PostCard;
