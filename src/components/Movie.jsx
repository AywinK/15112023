

export default function Movie({ title, img, director, actorsArr, year, genre }) {


    return (
      <div key={title} style={{ border: "0.2rem solid red", borderRadius: "32px", marginTop: "10px", maxWidth: "1000px", padding: "20px" }}>
        <h2>{title}</h2>
        <img src={`./${img}.png`} alt={img} width={400} height={500} style={{borderRadius: "24px"}} />
        <p>Director: {director}</p>
        <p>Actors: {actorsArr.join(", ")}</p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
      </div>
    )
}