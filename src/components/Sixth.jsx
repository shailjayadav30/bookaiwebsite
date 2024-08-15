import book from '../images/book.png'
import edit from '../images/edit.png'
import aiimage from '../images/aiimage.png'
import review from '../images/review.png'
import Features from './Features'

const Fourth = () => {

  return (
    <div id='roadmap' className=' rounded-lg  bg-opacity-50 bg-slate-700 backdrop-blur-lg justify-center mt-[6rem] h-fit sm:m-8 p-4 lg:h-[60%] sm:mt-[12rem]'>
       <h1 className='text-center mb-4 text-white text-[2rem] font-bold'>Roadmap</h1>
       <div className='grid sm:grid-cols-2   lg:grid-cols-4 '>
       <Features
        imgs={book}
        title="Advanced Character Development"
        para="AI-powered tool for creating deep, complex characters."
      />
      <Features
        imgs={edit}
        title="Collaborative Writing"
        para="Co-create stories with other authors or AI assistants."
      />
      <Features
        imgs={aiimage}
        title="E-book Platform Integration"
        para="Seamless publishing to popular e-book platforms."
      />
      <Features
        imgs={review}
        title="AI Cover Art Generation"
        para="Create stunning book covers with AI-generated art."
      />
       </div>
    </div>
  )
}

export default Fourth
