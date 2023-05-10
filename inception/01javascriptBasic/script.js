const root = document.getElementById('root')

const heading = document.createElement('h1')
heading.innerHTML = 'hello world'
heading.setAttribute('id', 'head')
heading.setAttribute('class', 'head')

root.appendChild(heading)