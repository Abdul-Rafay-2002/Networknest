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
	function onSubmit(values: z.infer<typeof SignupValidation>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Form {...form}>
			<div className=' flex-center flex-col pb-3 px-3 mt-8'>
				<a href='/'>
					<img
						src='/images/logo-white.svg'
						alt='logo'
						className='object-cover sm:w-42 xl:w-52 h-[90px] w-36'
					/>
				</a>
				<h2 className='h3-bold md:h2-bold xl:h1-bold'> Create New Account</h2>
				<p className='text-gray-200/90 small-medium md:base-regular mt-1'>
					To use NetworkNest enter your account details
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
					<Button type='submit' className='shad-button_primary mt-3'>
						{isLoading ? (
						<div className='flex flex-center gap-2'>
							<img src='/images/loader.gif' className='w-5'/>Loading...
						</div>
						): 'Sign up'}
					</Button>
				</form>
			</div>
		</Form>
	);
};

export default SignupForm;
