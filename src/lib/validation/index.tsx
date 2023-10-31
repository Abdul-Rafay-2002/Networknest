import * as z from 'zod';

export const SignupValidation = z.object({
	name: z.string().min(2, { message: 'Too Short' }),
	username: z
		.string()
		.min(6, { message: 'Username must be atleast 6 characters' })
		.max(50),
	email: z.string().email(),
	password: z
		.string()
		.min(8, { message: 'Password must be atleast 8 characters' }),
});
