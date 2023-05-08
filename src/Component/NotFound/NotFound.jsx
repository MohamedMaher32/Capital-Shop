import error from '../../image/error.svg'
export default function NotFound() {
  return (
    <div className="py-5">
        <div className='d-flex justify-content-center align-item-center mt-5'>
        <img src={error} alt="notfound" className='w-50 mt-5'/>
    </div></div>
  )
}