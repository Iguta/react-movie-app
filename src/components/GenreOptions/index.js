import React from 'react';
import { GenreContainer, GenreOption } from './GenreOptions.styles';

const GenreOptions = ({ genres, genreSelected, setGenreSelected }) => {
  console.log(`GENRE SELECTED IS: ${genreSelected}`)
  return (
    <GenreContainer id='color-red'>
      {
        genres.map(item => (
          <GenreOption itemId={item.id} genreSelected={genreSelected} key={item.id} onClick={() => setGenreSelected(item.id)}>{item.name}</GenreOption>
        ))
      }
    </GenreContainer>

  )
};

export default GenreOptions;
