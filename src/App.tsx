import './App.css'

function App() {

  return (
    <>

    <div id='home' className='container1'>
      <div className='box1'>
        <p className='heading'>Instant Security Scans for Modern Apps</p>
        <div className='subheading'>
          <p>Scan your GitHub repo or live site for secrets, vulnerabilities, and risks in seconds.</p>
          <p className='subHighlight'>no login required.</p>
        </div>
      </div>
      <div className='box2'>
        <a href='#tools' className='scanBtn'>Start Free Scan</a>
      </div>
    </div>

    <div id='tools' className='container2'>
      <div className='contentBox'>
        <p className='contentBoxHeading'>Paste your public GitHub repository or deployed app link to get your security report.</p>
        <div style={{display:'flex', justifyContent:'center'}}>
          <input className='gitORsite' placeholder='Enter github repo link or live app URL' />
        </div>
        
        <p style={{color: '#959595', textAlign:'center',marginTop: '2.6rem', fontSize:'1.5rem'}}>OR</p>

        <div className='gitANDsite'>
          <input placeholder='Enter github repo link' />
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#959595" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          <input placeholder='Enter live app URL' />
        </div>
        <div className='btns'>
          <div className='quickScan'>Quick scan</div>
          <div className='fullScan'>Deep scan</div>
        </div>
      </div>
    </div>

    <div id='why' className='container3'>

    </div>

    </>

  )
}

export default App
