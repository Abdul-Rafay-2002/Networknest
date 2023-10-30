import { Routes, Route } from 'react-router-dom';
import { Home } from './_root/pages';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import './global.css';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

const App = () => {
	return (
		<main className='flex h-screen'>
			<Routes>
				{/* public Routes */}
				<Route element={<AuthLayout />}>
					<Route path='/sign-in' element={<SigninForm />} />
					<Route path='/sign-up' element={<SignupForm />} />
				</Route>

				{/* private Routes */}
				<Route element={<RootLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</main>
	);
};

export default App;
