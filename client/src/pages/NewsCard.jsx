import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export function NewsCard() {
  const { news } = useSelector(state => state.news)
  const { id } = useParams()
  const el = news.find(el => el.id == id)
  return (
    <div className="container">
      <h2>{el.title}</h2>
      <div>
        <img src={el.img}  alt="" />
      </div>
      <p> {el.text}</p>
    </div>
  )
}
