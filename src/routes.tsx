import { createBrowserRouter } from 'react-router-dom';
import PricingPage from './pages/PricingPage/PricingPage.tsx';
import AboutPage from './pages/AboutPage/AboutPage.tsx';
import ContactPage from './pages/ContactPage/ContactPage.tsx';
import App from "./App.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <div>404</div>,
		children: [
			{index: true, element: <HomePage />},
			{
				path: 'pricing',
				element: <PricingPage />,
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
			{
				path: '/contact',
				element: <ContactPage />,
			},
		],
	},
]);

export default router;
