import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { SignupValidation } from '@/lib/validation';
import Loader from '@/components/ui/shared/Loader';
import { Link } from 'react-router-dom';
import { createUserAccount } from '@/lib/appwrite/api';

const SignupForm = () => {
	const isLoading = false;

	// 1. Define your form.
	const form = useForm<z.infer<typeof SignupValidation>>({
		resolver: zodResolver(SignupValidation),
		defaultValues: {
			name: '',
			username: '',
			email: '',
			password: '',
		},
	});
	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof SignupValidation>) {
		const newUser = await createUserAccount(values);
			console.log(newUser)
	
	}

	return (
		<Form {...form}>
			<div className=' flex-center flex-col  px-3 mt-8'>
				<a href='/'>
					<img
						src='/images/logo-white.svg'
						alt='logo'
						className='object-cover sm:w-42 xl:w-52 h-[90px] w-36'
					/>
				</a>
				<h2 className='h3-bold md:h2-bold xl:h1-bold'> Create New Account</h2>
				<p className='text-gray-200/90 small-medium md:base-regular mt-1'>
					To use NetworkNest, Please enter your details!
				</p>
			</div>
			<div className='sm:w-96 w-full md:w-420 p-3'>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='w-full flex flex-col gap-2 mt-4'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input type='text' className='shad-input' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='username'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input type='text' className='shad-input' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email Address</FormLabel>
								<FormControl>
									<Input type='email' className='shad-input' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input type='password' className='shad-input' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit' className='shad-button_primary mt-3 pb-2'>
						{isLoading ? (
							<div className='flex flex-center gap-2'>
								<Loader /> Loading...
							</div>
						) : (
							'Sign up'
						)}
					</Button>

					<p className='text-small-regular text-gray-200/90 text-center mt-2'>
						Already have an account?
						<Link
							to='/sign-in'
							className='text-orange-500 font-semibold ml-1 underline'>
							Log in
						</Link>
					</p>
				</form>
			</div>
		</Form>
	);
};

export default SignupForm;
