import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AboutPage from "./pages/AboutPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import client from "./services/client.ts";
import RepoByIdPage from "./pages/RepoByIdPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import App from "./App.tsx";
import RepoForm from "./pages/RepoForm.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
				/* 				loader: async () => {
					const result = await client.get("/repos");
					return result;
				}, */
			},
			{
				path: "/repos/newrepos",
				element: <RepoForm />,
			},
			{
				path: "/about",
				element: <AboutPage />,
			},
			{
				path: "/repos/:id",
				element: <RepoByIdPage />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
