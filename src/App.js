import './App.css';
import ButtonAppBar from './Component/ButtonAppBar';
import CustomizedTabs from './Component/Tabs';


const Header = () => {

	return (
		<ButtonAppBar></ButtonAppBar>
	)
}

const Main = () => {

	return (
		<CustomizedTabs></CustomizedTabs>
	)
}

/* const Footer = () => {

} */

function App() {
  return (
    <div>
		<Header></Header>
		<Main></Main>
		
	</div>
  );
}

export default App;
