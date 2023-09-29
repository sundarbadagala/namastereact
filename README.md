hello

* Whenever State Changes React re render the component

* React uses Reconcialation algorigthm aka React Fibre (React 16)
* Virtual dom is representation of Actual DOM -> virtual dom noting but object

* Diff algorithm helps to find the difference between two virtual doms (two objects) i.e updated vDOM and pre vDOM
* Once its find the difference then its update the actual DOM
* Note : Finding out difference between two HTML elements (actual DOM) is tougher than objects (Virtual DOM)
* That's why React is fast

* Why react is fast
* React is doing efficient DOM manipulation because of virtual DOM

# Exploring the World

1. Monolithic vs Microservices
2. There two approaches to display data in page
    1. loads -> call api -> render page
        * initially page loads and call api when data came then have to display data in page
    2. loads -> render without data -> call api -> render with data
        * initially page loads and display page without data when data came, then we have to display data in page
    * NOTE : React follows second approach, means initially render page without data afte api call then data will be displayed i.e initially html part will be render then only data display will be displayed
    * This is better approach why because first approach we have to wait till data come then only we can display page, but in second approach no need to wait, before coming data we can display html part
    * but in the first approach have single render and second approach having two renders (before coming data and after coming data) but react is very efficient in rendering so no need to worry about it
3. End of the hooks are nothing but normal javascript functions
4. What are parameters ans arguments
5. What are the parameters of useEffect function
    * There are two parameters in useEffect. One is callback function and second one is dependency array
6. fetch method helps call api, it's provided by browser not by javascript
7. Async Await better than promise then and catch 
8. What is CORS error
    * Browser blocking api's calling one origin to different origin. If origin mismatch browser block that API
9. Use shimmer UI instead of loading for better UI experience
10. Conditional Rendering -> Rendering based on condtion called 