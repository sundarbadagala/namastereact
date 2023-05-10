const root = ReactDOM.createRoot(document.getElementById('root'))

const headging = React.createElement(
    'h1',
    { id: 'head', class: 'head' },
    'hello world'
)
//note : heading is not node element, it is an object 
root.render(headging) //helps to convert heading object into element and add it into dom


