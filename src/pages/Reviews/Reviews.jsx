import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as  moviesApi from '../../api/Api';
import { ReviewsGallery, ReviewsItem, ReviewsTitle, ReviewsSpan, ReviewsText} from "./Reviews.styled";
import Header from '../../components/Header/Header';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const {movieId} = useParams();

  useEffect(() => {
    moviesApi.getReviews(movieId)
      .then(response => setReviews(response.results));
  }, [movieId]);

  return (
    <>
      {reviews.length > 0
      ? (<ReviewsGallery>
          {reviews.map(({id, author, content}) => (
            <ReviewsItem key={id}>
                <ReviewsTitle>
                  Author : <ReviewsSpan>{author}</ReviewsSpan>
                </ReviewsTitle>
                <ReviewsText>{content}</ReviewsText>
            </ReviewsItem>
          ))}
          </ReviewsGallery>
      ) : (
        <ReviewsTitle>
          <Header text='We don’t have any reviews for this movie'  />
        </ReviewsTitle>

      )
      }
    </>
  )
}