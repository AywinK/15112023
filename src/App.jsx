
import './App.css';
// import people from "./assets/people.json";
// import movies from "./assets/movies.json"
// import Movie from './components/Movie';
import MyComponent from './ClassComponents/MyComponent';
import NewClassComponent from './ClassComponents/NewClassComponent';
import Counter from "./ClassComponents/Counter";

function App() {

  // const arr = [2, 17, 4, 8, 10, 3, 5, 6, 7];

  // const imgNamesArr = ["sw1", "sw2", "sw3", "sw4", "sw5", "sw6"];

  // const keys = Object.keys(people);


  return (
    <>
      <header>
        {/* {arr.map(num => (num % 2 === 0) ? num ** 2 : num)} */}
      </header>

      {/* {imgNamesArr.map((imgName, i) => <img key={i} src={`./src/assets/${imgName}.jpg`} width={400} height={500} />)} */}

      {/* {keys.map(personKey => {

        const {firstName, lastName, email, city} = people[personKey];

        return (
          <div key={personKey} style={{ border: "0.2rem solid red", borderRadius: "32px", marginTop: "10px", maxWidth: "350px" }}>
            <p>{firstName} {lastName}</p>
            <p>E-mail: {email}</p>
            <p>City: {city}</p>
          </div>
        )
      })} */}

      {/* {Object.keys(movies).map(movieKey => {

        const { title, img, director, actorsArr, year, genre } = movies[movieKey];

        return (
          <Movie key={title} title={title} img={img} director={director} actorsArr={actorsArr} year={year} genre={genre} />
        )
      })} */}

      <MyComponent />
      <NewClassComponent />
      <Counter/>

    </>
  )
}

export default App
