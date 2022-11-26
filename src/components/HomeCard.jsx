

const HomeCard = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <img src={props.img} alt="Anime"/>
    </div>
  )
}

export default HomeCard; 