import React from 'react'

const FilmCard = ({ film }) => {
	return (
		<article className="col-6">
			<div className="card my-2 shadow">
				<div className="card-body justify-content-center">
					<h4 className="card-title">{film.title}</h4>
					<p className="card-text">{film.text}</p>
				</div>
			</div>
		</article>
	);
}

export default FilmCard;