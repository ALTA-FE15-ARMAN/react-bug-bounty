import  { Component } from 'react'

interface CardProps {
    id: string,
    title: string,
    poster_path: string,
    vote_average: string,
}

class Cardmovie extends Component<CardProps> {
    render() {

        const { id, title, poster_path, vote_average} = this.props

        return (
            <div className=' my-5'>
                <div id={id} className=' w-60 h-full rounded-md shadow-md  bg-gray-200 '>
                <div className='m-3 grid grid-cols-1 gap-y-3'>
                    <div className='my-5 '>
                        <img
                            src={poster_path ? `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}` : ''}
                            />
                    </div>
                    <div className='grid grid-cols-1 gap-y-3 mb-5 '>
                        <h2 className={`font-semibold`}>{title}</h2>
                        <p className='text-justify'> {vote_average}</p>
                    </div>
                    <div className='mb-5 '>
                        <button className= 'bg-gray-500 text-white focus:outline-none hover:bg-gray-700'>Play Now</button>
                    </div>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Cardmovie