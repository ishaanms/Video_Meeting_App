import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"


class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<div className="container2">
				
				<div className="header">
					<p className="heading" style={{ fontSize: "45px" }}>Video Chatting App</p>
					<p className="liner" style={{ fontWeight: "200" }}>This is a video conference website that helps you connect.</p>
					<p className="liner" style={{ fontWeight: "200" }}>______________________________________</p>
					<p style={{ fontWeight: "200",color:"black" }}>Create a code to start a meeting -OR- Paste the URL link to join a meeting.</p>
				</div>

				<div className="box" style={{
					background: "rgba(245, 245, 245, 0.567)", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Start or join a meeting</p>
					<Input placeholder="URL" onChange={e => this.handleChange(e)} />
					<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>Join/Create</Button>
				</div>
			</div>
		)
	}
}

export default Home;