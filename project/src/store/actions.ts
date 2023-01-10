import {createAction} from '@reduxjs/toolkit';
import Film from '../types/film';
import User from '../types/user';

const Action = {
  SET_GENRE: 'SET_GENRE',
  SET_FILMS_LOAD_STATUS: 'SET_FILMS_LOAD_STATUS',
  SET_FILMS: 'SET_FILMS',
  SET_USER: 'SET_USER',
  SET_AUTHORIZATION_STATUS: 'SET_AUTHORIZATIONSTATUS', 
  SET_ERROR: 'SET_ERROR',
  SET_PROMO_MOVIE: 'SET_PROMO_MOVIE', 
  SET_FAVORITE_FILMS: 'SET_FAVORITE_FILMS'
};

export const setGenre = createAction(Action.SET_GENRE, (genre: string) => ({payload: genre}));
export const setFilmsLoadStatus = createAction(Action.SET_FILMS_LOAD_STATUS, (status: boolean) => ({payload: status}));
export const setFilms = createAction(Action.SET_FILMS, (films: Film[]) => ({payload: films}));
export const setUser = createAction(Action.SET_USER, (user: User | null) => ({payload: user}));
export const setAuthorizationStatus = createAction(Action.SET_AUTHORIZATION_STATUS, (status: string) => ({payload: status}));
export const setError = createAction(Action.SET_ERROR, (error: string | null) => ({payload: error}));
export const setPromoMovie = createAction(Action.SET_PROMO_MOVIE, (movie: Film | null) => ({payload: movie}));
export const setFavoriteFilms = createAction(Action.SET_FAVORITE_FILMS, (films: Film[]) => ({payload: films}));
