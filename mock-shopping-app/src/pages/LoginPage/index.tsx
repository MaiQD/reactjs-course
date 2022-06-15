import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import backgroundImage from "assets/images/wallpaperflare-cropped.jpg";
import React, { useContext, useMemo, useState } from "react";
import { globalContext } from "app/contexts/global";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

const CustomBox = styled(Box)`
	background-image: url(${backgroundImage});
	background-size: cover;
	height: 100vh;
	width: 100vw;
`;
const LoginBox = styled(Box)`
	padding: 4rem 2rem 4rem 2rem;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgb(253, 253, 253);
`;

type Input = typeof initialValues;

const initialValues = {
	username: "",
	password: "",
	rePassword: "",
};

const schemaLoginForm = Yup.object({
	username: Yup.string()
		.required("Làm ơn nhập username đi")
		.email("Định dạng email không đúng"),
	password: Yup.string()
		.required("Làm ơn nhập password đi")
		.min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

const schemaSignUpForm = Yup.object({
	username: Yup.string()
		.required("Làm ơn nhập username đi")
		.email("Định dạng email không đúng"),
	password: Yup.string()
		.required("Làm ơn nhập password đi")
		.min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
	rePassword: Yup.string()
		.required("Làm ơn nhập mật khẩu lại đi")
		.min(6, "Mật khẩu phải có ít nhất 6 ký tự")
		.oneOf([Yup.ref("password")], "Mật khẩu nhập lại không giông"),
});

function LoginPage() {
	const { signIn, signUp } = useContext(globalContext);
	const [mode, setMode] = useState("signIn");
	const [loading, setLoading] = useState(false);
	const [signInMessage, setSignInMessage] = useState<string>("");

	const isSignInMode = useMemo(() => mode === "signIn", [mode]);
	const navigate = useNavigate();

	const handleSignIn = async (values: Input) => {
		const user = await signIn(values.username, values.password);
		debugger;
		if (user) {
			setSignInMessage("");
			navigate("../home", { replace: true });
		} else {
			setSignInMessage("Invalid username or password");
		}
	};
	const handleSignUp = async (values: Input) => {
		await signUp(values.username, values.password);
		setMode("signIn");
	};
	const handleSubmitForm = async (
		values: Input,
		{ resetForm }: { resetForm: () => void }
	) => {
		setLoading(true);
		if (isSignInMode) {
			await handleSignIn(values);
		} else {
			await handleSignUp(values);
		}
		setLoading(false);
		resetForm();
	};

	const toggleAuthMode = () => {
		if (isSignInMode) {
			setMode("signUp");
		} else {
			setMode("signIn");
		}
	};
	return (
		<CustomBox>
			<Container
				maxWidth="xs"
				sx={{
					paddingTop: "5rem",
				}}
			>
				<CssBaseline />
				<LoginBox>
					<Avatar sx={{ m: 1, bgcolor: "error.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						{isSignInMode ? "Sign in" : "Sign up"}
					</Typography>

					<Formik
						initialValues={initialValues}
						validationSchema={isSignInMode ? schemaLoginForm : schemaSignUpForm}
						onSubmit={handleSubmitForm}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							/* and other goodies */
						}) => (
							<form onSubmit={handleSubmit}>
								<Box sx={{ mt: 1 }}>
									<TextField
										margin="normal"
										fullWidth
										id="username"
										label="Username"
										name="username"
										autoComplete="username"
										autoFocus
										value={values.username}
										onChange={handleChange}
										onBlur={handleBlur}
										helperText={touched.username && errors.username}
										error={touched.username && errors.username ? true : false}
									/>
									<TextField
										margin="normal"
										fullWidth
										name="password"
										label="Password"
										type="password"
										id="password"
										autoComplete="current-password"
										value={values.password}
										onChange={handleChange}
										onBlur={handleBlur}
										helperText={touched.password && errors.password}
										error={touched.password && errors.password ? true : false}
									/>
									{!isSignInMode && (
										<div className="input-wrapper">
											<TextField
												margin="normal"
												fullWidth
												name="rePassword"
												label="Re Password"
												type="password"
												id="rePassword"
												autoComplete="current-password"
												value={values.rePassword}
												onChange={handleChange}
												onBlur={handleBlur}
												helperText={touched.rePassword && errors.rePassword}
												error={
													touched.rePassword && errors.rePassword ? true : false
												}
											/>
										</div>
									)}
									{signInMessage && <Alert severity="error">{signInMessage}</Alert>}
									<Button
										type="submit"
										fullWidth
										variant="contained"
										sx={{
											mt: 3,
											mb: 2,
											bgcolor: "error.main",
											":hover": { bgcolor: "error.dark" },
										}}
										startIcon={
											loading && (
												<CircularProgress size={16} color="secondary" />
											)
										}
									>
										{isSignInMode ? "Sign In" : "Sign Up"}
									</Button>
									<Grid container>
										<Grid item xs></Grid>
										<Grid item>
											<Link href="#" variant="body2" onClick={toggleAuthMode}>
												{isSignInMode
													? "Don't have an account? Sign Up"
													: "Already have an account? Sign In"}
											</Link>
										</Grid>
									</Grid>
								</Box>
							</form>
						)}
					</Formik>
				</LoginBox>
			</Container>
		</CustomBox>
	);
}

export default LoginPage;
