import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	BrowserRouter
} from 'react-router-dom'
import SignInPage from './pages/auth/signinPage';
import SignUpPage from './pages/auth/signupPage';
import MainPage from './pages/main/mainPage';
import Sample from './pages/sample'

export default function IdeaLab() {
  return (
		<Router>
			<Switch>				
				<Route path="/" component={MainPage} exact />
				<Route path="/home" component={MainPage} />
				<Route path="/signin" component={SignInPage} />
				<Route path="/signup" component={SignUpPage} />
				<Route path="/sample" component={Sample} />
				<Route path="/idealab" />
				<Route path="/idealab/policy" />
				<Route path="/idealab/info" />
				<Route path="/user" />
				<Route path="/newidea/:template" />
				<Route path="/upgrade" />
				<Route path="/idea/:id" />{/** p304*/}
				<Route path="/idea/all" />
			</Switch>
		</Router>
  );
}

const TestPage = () => (
	<div><h1>Hello World</h1></div>
)