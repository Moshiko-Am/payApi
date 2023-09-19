import AppHeader from './components/AppHeader/AppHeader.tsx';
import { Outlet } from 'react-router-dom';
import AppFooter from './components/AppFooter/AppFooter.tsx';

function App() {
	return (
		<div className={'app-wrapper'}>
			<AppHeader />
			<div className='main'>
				<Outlet />
			</div>
			<AppFooter />
		</div>
	);
}

export default App;
