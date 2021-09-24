import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
	Navbar,
	Exchanges,
	Homepage,
	Cryptocurrencies,
	CryptoDetails,
	News,
} from "./components";
import "./App.css";

const App = () => {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<Switch>
							<Route path="/" exact component={Homepage} />
							<Route path="/exchanges" component={Exchanges} />
							<Route path="/cryptocurrencies" component={Cryptocurrencies} />
							<Route path="/crypto/:coinId" component={CryptoDetails} />
							<Route path="/news" component={News} />
						</Switch>
					</div>
				</Layout>
				<div className="footer">
					<Typography.Title
						level={5}
						style={{ color: "white", textAlign: "center" }}
					>
						Cryptovers <br />
						All rights reserverd
					</Typography.Title>
					<Space>
						<Link to="/">Home</Link>
						<Link to="/exchanges">Exchanges</Link>
						<Link to="/news">News</Link>
					</Space>
				</div>
			</div>
		</div>
	);
};

export default App;
