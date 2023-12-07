import { NewsCard } from '../Cards/NewsCard'

export function News () {
  return (
    <section className="news">
      <div className="container">
        <h1>News</h1>
        <div className="news__grid">
          <NewsCard />
        </div>
        <a href="#">Read More</a>
      </div>
    </section>
  )
}
