import Hero from './components/Hero'
import Demo from './components/Demo'
import './App.css'

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>
      
      <div className='app'>
        <Hero />
        <Demo />
        <div className="footer__copyright">
        <small>&copy; AISHWARy YADAV. All right reserved.</small>
      </div>
      </div>
    </main>
  )
}

export default App