- [ ] Why would you use class component over function components (removing hooks from the question)?
The only reason I could see to use class over functional is because of the lifecycle events you can use with class.  You would only need to use class components if you are not using hooks.
- [ ] Name three lifecycle methods and their purposes.
Constructor - anything that we need to use in the component later on during rendering can be set up in the constructor function. 
Render- This tells react to return a piece of the DOM when it is called. The render method tells your RETURN what its going to be returning on the screen.
componentDidMount is will be called immediately after render. It will only run once and any async functions should be inside of this function. Use to set state. This method has depreciated and most of what it was used for in the past is put into the constructor function.

- [ ] What is the purpose of a custom hook?
Building your own Hooks lets you extract component logic into reusable functions. ALSO, it allows you to write dryer reusable code. There are also custom Hooks that have been written by others that are avaibale for use. 
- [ ] Why is it important to test our apps?
it is import to test the apps to make sure the viewer is getting the response that you expect them to get, every time. It also makes for less debugging in the future and prevents others from struggling to debug your code. 