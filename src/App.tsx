import React from "react";
import {Home} from "./Pages";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./Components/Layout";

function App() {
	return (
		<div
			className="container-fluid d-flex flex-column back-beige"
			style={{ minHeight: "100vh" }}>
			<Header />
			<div className="pt-4">
				<Routes>
					<Route path="/" element={<Home />}></Route>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
