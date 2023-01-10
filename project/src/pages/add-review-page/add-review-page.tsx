import React from 'react';
import {Link, Navigate, useParams} from 'react-router-dom';
import Film from '../../types/film';
import СommentSubmissionForm from '../../components/сomment-submission-form/сomment-submission-form';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import {useAppSelector} from '../../hooks';


function AddReviewPage(): JSX.Element {
  const id = Number(useParams().id);
  const films = useAppSelector((state) => state.allFilms);
  const film = films.find((f) => f.id === id);

  return film ? (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.posterImage} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="/#">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name}
            width="218" height="327"
          />
        </div>
      </div>
      <СommentSubmissionForm />
    </section>)
    : <Navigate to={'/*'}/>;
}

export default AddReviewPage;
