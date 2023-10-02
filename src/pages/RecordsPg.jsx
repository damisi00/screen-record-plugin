import Header from "../components/Header"
import Search from "../components/Search"
import VideoCard from "../components/VideoCard"
import '../App.css'

const RecordsPg = () => {
  return (
    <>
      {/* <div className="container"> */}
        <Header />
        <section className='div-one'>
          <div className="container">
              <div className='welcome-note'>
                <h2>Hello, John Mark</h2>
                <p>Here are your recorded videos</p>
              </div>
             <Search />
          </div>
          
        </section>
        <section className="recent-files">
          <div className="container">
            <h5>Recent files</h5>
            <div className='video-gallery'>
              <VideoCard />
              <VideoCard />
            </div>
          </div>
          
          
        </section>
      {/* </div> */}
     
    </>
    )
}
export default RecordsPg