
import { Component } from 'react'
import { withRouter } from '../../WithRoute'
import axios from 'axios'
import Newscard from '../../component/NewsCard'



interface NewsState {
    value: string,
    data: any
}
 class News extends Component <NewsState> {

    state = {
        data: []
    }

    getMovies() {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=dd1e7ae613025ae670d4ce6b33b5026f&language=en-US&page=1`)
            .then((response) => {
                this.setState({ data: response.data.results })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount(): void {
        this.getMovies()
    }

  render() {
    const {  data } = this.state
    return (
      <div className='m-5 grid grid-cols-6 gap-x-5 gap-y-5'>
        {
                        data &&
                        data?.map((item : any, index) => {
                            return (
                                <Newscard
                                    key={index}
                                    id='news'
                                    title={item?.title}
                                    posterPath={item?.poster_path}
                                    Nilai={item?.vote_average}
                                    Popularity={item?.release_date}
                                />
                            )
                        })
                    }
        </div>

    )
  }
}

export default withRouter(News) 