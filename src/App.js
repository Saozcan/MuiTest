import ButtonAppBar from './Component/ButtonAppBar';
import CustomizedTabs from './Component/Tabs-Tables/Tabs';


const Header = () => {
	return (
		<ButtonAppBar/>
	)
}

const Main = () => {

	return (
		<div style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}}>
		<CustomizedTabs/>
		</div>
	)
}

/* const Footer = () => {

} */

function App() {
  return (
    <div>
		<Header/>
		<Main/>
		
	</div>
  );
}

export default App;
