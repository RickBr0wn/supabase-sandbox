const EmailVerification = (): JSX.Element => {
	return (
		<div>
			<h1>EmailVerification</h1>
			<p>Please check your email, and verify your account to progress.</p>

			<p>
				Didn&apos;t recieve an email?{' '}
				<a href='https://app.supabase.io/auth/verify-request'>
					Click here to resend
				</a>
			</p>
		</div>
	)
}

export default EmailVerification

// Language: typescript
