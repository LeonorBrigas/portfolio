import { Content, Drawer, Header, Layout, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import './App.css';
import Main from './components/main';

function App() {
	return (
		<div className="demo-big-content">
			<Layout>
				<Header title="My Portfolio" scroll className="header-color" >
					<Navigation>
						<Link to="/"><h6>Home</h6></Link>
						<Link to="/aboutme"><h6>About Me</h6></Link>
						<Link to="/projects"><h6>Projects</h6></Link>
						<Link to="/resume"><h6>Resume</h6></Link>
						<Link to="/contact"><h6>Contacts</h6></Link>
					</Navigation>
				</Header>
				<Drawer title="My Portfolio" style={ { color: "#4CA1AF" } }>
					<Navigation>
						<Link to="/">Home</Link>
						<Link to="/aboutme">About Me</Link>
						<Link to="/projects">Projects</Link>
						<Link to="/resume">Resume</Link>
						<Link to="/contact">Contacts</Link>
					</Navigation>
				</Drawer>
				<Content>
					<div className="page-content" />
					<Main />
				</Content>
			</Layout>
		</div>
	);
}

export default App;
