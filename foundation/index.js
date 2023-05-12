import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

// React Element
const app = (
    <main id='container'>
        <div>button element</div>
        <button className='btn'>click</button>
    </main>
)

// React Component

function App() {
    const handleClick = () => {
        console.log('clcked');
    }
    return (
        <main id='container'>
            <div>button element</div>
            <button onClick={handleClick} className='btn'>click</button>
        </main>
    )
}

// root.render(app)
root.render(<App />)