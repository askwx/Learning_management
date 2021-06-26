import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MasterPage from  './MasterPage.jsx';
import Card from './Card.jsx';
import Header from './Header.jsx';
import MasterUser from './MasterUser.jsx';
import flow from './flow';



 {/* 
import Aside from './Asdie.jsx';
import HeaderDesk from './HeaderDesk.jsx';
*/}


function App() {

	const [page, setPage] = useState("main");
	const handleClick1 = () => {
		setPage("other");
	};

	if(page == "other") {
		return (
			<MasterUser />
		);
	}

	return (
	<div className="page-wrapper">
		<div className="page-container">
			<div className="main-content">
				<div className="section__content section__content--p30">
					<div className="container-fluid">
                       <div className="row">
							<div className="col-md-4">
								<Card title="Some title" img="images/icon/Icons_01.png" subTitle="Something else" description="kfgdheg" onClick={handleClick1} />
							</div>

							<div className="col-md-4">
								<Card title="Some title1" img="images/icon/Icons_02.png" subTitle="Something else1" description="kfgdheg1" />
							</div>

							<div className="col-md-4">
								<Card title="Some title2" img="images/icon/Icons_03.png" subTitle="Something else1" description="kfgdheg1" />
							</div>

							<div className="col-md-4">
								<Card title="Some title3" img="images/icon/Icons_06.png" subTitle="Something else1" description="kfgdheg1" />
							</div>

							<div className="col-md-4">
								<Card title="Some title4" img="images/icon/Icons_15.png" subTitle="Something else1" description="kfgdheg1" />
							</div>

							<div className="col-md-4">
								<Card title="Some title5" img="images/icon/Icons_18.png" subTitle="Something else1" description="kfgdheg1" />
							</div>
							
                       </div>
                   </div>
				</div>
			</div>
		</div>









		  {/* 
		<MasterPage  />
        
		<Header />
			*/}
		

        {/* 
		<Aside />
	    <HeaderDesk />
		*/}


	</div>
	);
}
export  default App;
