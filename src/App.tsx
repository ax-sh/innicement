import { Suspense } from "react";
import { useRoutes } from "react-router";
import routes from "~react-pages";
import  Home  from "./pages";

function App() {
	console.log(routes);
	return <Home/>
	// return (
	// 	<Suspense fallback={<p>Loading...</p>}>
	// 		{useRoutes(routes)}
	// 	</Suspense>
	// )
}

export default App;
