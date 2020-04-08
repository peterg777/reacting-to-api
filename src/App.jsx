import React from 'react';
import FilmCard from './components/FilmCard';
import PeopleCard from './components/PeopleCard';

class App extends React.Component {
    state = {
        films: [],
        people: [],
        isFilms: false,
        isPeople: false,
    };
    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((res) => res.json())
            .then((films) => this.setState({ films }));
        fetch('https://ghibliapi.herokuapp.com/people')
            .then((res) => res.json())
            .then((people) => this.setState({ people }));
    }
    handlePeople = () => this.setState({ isFilms: false, isPeople: true });
    handleFilms = () => this.setState({ isFilms: true, isPeople: false });
    handleHomePage = () => this.setState({ isFilms: false, isPeople: false });

    render() {
        if (this.state.isFilms || this.state.isPeople) {
            return (
                <main className="container">
                    <header className="d-flex">
                        <button type="button" onClick={this.handleHomePage} className="btn btn-danger shadow my-3 mx-auto">Home</button>
                    </header>
                    <section className="row my-2 justify-content-center">
                        {this.state.films.map(film => <FilmCard key={film.id} film={film} />)}
                    </section>
                </main>
            );
        } else if (this.state.isPeople || this.state.isFilms) {
			return (
				<main className="container">
					<header className="d-flex">
						<button type="button" onClick={this.handleHomePage} className="btn btn-succcess shadow my-3 mx-auto">Home</button>
					</header>
					<section className="row my-2 justify-content-center">
						{this.state.people.map(person => <PeopleCard key={person.id} person={person} />)}
					</section>
				</main>
			);
		} else {
			return (
				<main className="container">
					<section className="row my-3 flex-column align-items-center">
						<img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli Logo" />
						<div className="d-flex">
							<button type="button" onClick={this.handleFilms} className="btn btn-warning shadow m-3">Films</button>
							<button type="button" onClick={this.handlePeople} className="btn btn-warning shadow m-3">People</button>
						</div>
					</section>
				</main>
			);
		}
	}
}


        export default App;