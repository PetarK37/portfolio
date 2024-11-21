import Navbar from "./components/layout/Navbar"

function App() {
  return (
    <div className="flex w-full h-full gap-5 align-middle justify-center">
      {/* Temp div until i create sections */}
      <div className="ml-auto flex align-middle justify-center flex-col">
        <h1>Coming <span className='soon'>soon</span></h1>
        <a href='https://www.linkedin.com/in/petar-komordzic/' className="read-the-docs">In the meantime check out my Linkedin here</a>
      </div>
      <Navbar />
    </div>
  )
}

export default App
