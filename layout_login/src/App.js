import './App.css';
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Page from './Page/Page'
import Main from './Main/Main'

function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  )
}

// 이벤트 핸들러를 컴포넌트 안에 정의하고 전달하는 경우
function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`)
  }

  return (
    <Button onClick={handlePlayClick}>
      Play "{movieName}"
    </Button>
  )

}

// 이벤트 핸들러를 화살표함수로 전달하는 경우
function UploadButton() {
  return (
    <Button onClick={() => alert('Uploading!')}>
      Upload Image
    </Button>
  )
}

// prop과 함께 경고를 표시하는 버튼
function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!')
    }}>
      <button onClick={() => {
        alert('playing!')
      }}>
        Play Movie!
      </button>
      <button onClick={() => {
        alert('Uploading!')
      }}>
        Upload Image
      </button>

    </div>
  )
}

export const pageList = ['Page-A', 'Page-B', 'Page-C']

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className='main'>
        <Main pages={pageList} />
      </section>
    </div>
  );
}

export default App;
