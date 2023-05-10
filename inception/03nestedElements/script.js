/**
 * <div id='container'>
 * 
 *      <div id='header'>
 *          heading
 *      </div>
 * 
 *      <div id='body'>
 *          <main>hello world</main>
 *      </div>
 * 
 *      <div id='footer'>
 *          <main>
 *              <article>
 *                  footer
 *              </article>
 *          </main>
 *      </div>
 * 
 * </div>
 */

const root = ReactDOM.createRoot(document.getElementById('root'))

const header = React.createElement(
    'div',
    { id: 'header' },
    'heading'
)
const body = React.createElement(
    'div',
    { id: 'body' },
    React.createElement(
        'main',
        {},
        'hello world'
    )
)
const footer = React.createElement(
    'div',
    { id: 'footer' },
    React.createElement(
        'main',
        {},
        React.createElement(
            'article',
            {},
            'footing'
        )
    )
)

const app = React.createElement(
    'div',
    { id: 'container' },
    [header, body, footer]
)

root.render(app)