import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <React.Fragment>
      <h1>Actors Page</h1>
      {
        actors.map(
          actor => (<div>{actor.name}
          <ul>
            {
              actor.movies.map(
                movie => (<li>{movie}</li>)
              )
            }
          </ul>
          </div>)
        )
      }
    </React.Fragment>
  );
};

export default Actors;
