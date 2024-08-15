import book from '../images/book.png'
import edit from '../images/edit.png'
import aiimage from '../images/aiimage.png'
import review from '../images/review.png'
import Features from './Features'

const Fourth = () => {

  return (
    <div id='works' className=' rounded-lg  bg-opacity-50 bg-slate-700 backdrop-blur-lg justify-center mt-[6rem] h-fit sm:m-8 p-4 lg:h-[60%] sm:mt-[12rem]'>
       <h1 className='text-center mb-4 text-white text-[2rem] font-bold'>How it Works</h1>
       <div className='grid sm:grid-cols-2   lg:grid-cols-4 '>
       <Features
        imgs={book}
        title="Choose Your Genre"
        para="Select from a wide range of genres or create a custom blend."
      />
      <Features
        imgs={edit}
        title="Provide Key Details"
        para="Input main characters, plot points, or themes to guide the AI."
      />
      <Features
        imgs={aiimage}
        title="AI Generation"
        para="Our advanced AI creates your book based on your inputs."
      />
      <Features
        imgs={review}
        title="Review and Download"
        para="Review your generated book and download in your preferred format."
      />
       </div>
    </div>
  )
}

export default Fourth
