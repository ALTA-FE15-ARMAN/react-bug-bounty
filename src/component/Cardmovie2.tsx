import  { Component } from 'react'

interface CardProps {
    id: string,
    image: string,
    title: string,

}

class Cardmovie2 extends Component<CardProps> {
    render() {

        const { id, image, title,} = this.props

        return (
            <div className=' my-5'>
                <div id={id} className=' w-60 h-full rounded-md shadow-md  bg-gray-200 '>
                <div className='m-3 grid grid-cols-1 gap-y-3'>
                    <div className='my-5 '>
                        <img
                            className='rounded-md w-full'
                            src={image} />
                    </div>
                    <div className='grid grid-cols-1 gap-y-3 mb-5 '>
                        <h2 className={`font-semibold`}>{title}</h2>

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

export default Cardmovie2