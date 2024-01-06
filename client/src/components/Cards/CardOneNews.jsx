export function CardOneNews(props) {
  return (
    <div className="container">
      <h2>{props.title}</h2>
      <div>
        <img src={import.meta.env.VITE_REACT_APP_API_URL + props.img} alt="" />
      </div>
      <p>{props.text}</p>
    </div>
  )
}
