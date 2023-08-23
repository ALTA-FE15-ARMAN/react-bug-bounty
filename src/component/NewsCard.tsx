import  { Component } from 'react'

interface NewsCardProps {
    id: string,
    title: string,
    Nilai: number,
    posterPath: string;
    Popularity: string,
}
const getPosterURL = (posterPath: string): string => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterPath}`;
};

 class Newscard extends Component <NewsCardProps > {
  render() {


    
    // const { id, title, description, image, author } = this.props
    const { id, title, posterPath, Nilai, Popularity } = this.props
    return (



        
        <div id={id} className='w-full h-full rounded-md shadow-md'>
        <div className='grid grid-cols-1 gap-y-5 text-alta-blue-dark'>
        <img src={getPosterURL(posterPath)} width={200} height={200} alt="Movie Poster" />
        <p className='font-bold	 text-center'>{title}</p>
            <p className='font-medium mx-3 '>Film Rate : {Nilai}</p>
            <p className='font-medium mx-3 '>Rilis Date : {Popularity}</p>
        </div>
    </div>
    )
  }
}

export default Newscard