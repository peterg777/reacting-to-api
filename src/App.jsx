import React from 'react';
import FilmCard from './components/FilmCard';
import PeopleCard from './components/PeopleCard';


class App extends React.Component {
    state = {
        films: [],
        people: [],
        loadFilms: false,
        loadPeople: false,
    };
    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((res) => res.json())
            .then((films) => this.setState({ films }));
        fetch('https://ghibliapi.herokuapp.com/people')
            .then((res) => res.json())
            .then((people) => this.setState({ people }));
    }
    handlePeople = () => this.setState({ loadFilms: false, loadPeople: true });
    handleFilms = () => this.setState({ loadFilms: true, loadPeople: false });
    handleHomePage = () => this.setState({ loadFilms: false, loadPeople: false });

    render() {
        if (this.state.loadFilms || this.state.loadPeople) {
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
        } else if (this.state.loadPeople || this.state.loadFilms) {
            return (
                <main className="container">
                    <header className="d-flex">
                        <button type="button" onClick={this.handleHomePage} className="btn btn-succcess shadow my-3 mx-auto">Home</button>
                    </header>
                    <section className="row my-2 justify-content-center">
                        {this.state.people.map(people => <PeopleCard key={people.id} people={people} />)}
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