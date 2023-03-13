import './App.css';
import Bubble from './bubble.js';
import React, { Suspense, useEffect } from 'react';
import positions from "./positions.json"
import Status from './components/Status/Status';
import ReactDOM from 'react-dom'

function App() {
	const skillList = ["Communication", "Programming", "DSA"]
	const [i, setI] = React.useState(0);
	const [activeBubble, setActiveBubble] = React.useState(null);
	const [fade, setFade] = React.useState(false)
	const [skills, setSkills] = React.useState(null)
	const goBack = () => {
		setActiveBubble(null)
		setIteamList([])
		setSelected(null)
		setItemPositions(positions)
		setTimeout(() => setIteamList(list), 100)
		setSkills(null)
	}

	const list = [
		"Data Engineering",
		"Software Engineering",
		"Web Development",
		"Quality Assurance",
		"Data Science &Analytics",
		"Cloud",
		"AI & ML",
		"Android"
	]

	const [selected, setSelected] = React.useState(null);

	const list1 = [
		"E",
		"F",
		"G",
		"H",
		"I"
	]

	const [itemList, setIteamList] = React.useState(list);
	const [itemPosistions, setItemPositions] = React.useState(positions)
	const updateItems = (content) => {
		setActiveBubble(null)
		setIteamList([])
		setSkills([...skillList])
		setItemPositions(positions.map(value => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value))
		setSelected(content)
		setIteamList(list1)
		setI(i + 1)
		setFade(true)
	}


	return ReactDOM.createPortal (
		<div>
			<div key={i} className="bubble-container" >
				<Suspense fallback={<div>Loading...</div>}>
					<img src="./box.png" width="417px" height="335px" style={{
						position: "absolute",
						left: "180px",
						top: "133px",
						zIndex: "2"
					}} />
					<Status status={{ jobFamilies: 10, skills: 9, roles: 7 }} />
					{
						// positions.map((position, index) => {
						// 	return (
						// 		<Bubble
						// 			key={index}
						// 			left={position.left}
						// 			top={position.top}
						// 		/>
						// 	)
						// })
						itemList.map((item, index) => {
							const zIndex = list.length - index;
							return (
								<Bubble
									fade={fade}
									className="fade-in-animation"
									key={index}
									left={itemPosistions[index].left}
									top={itemPosistions[index].top}
									updateItems={updateItems}
									content={item}
									style={{ zIndex: zIndex }}
									activeBubble={activeBubble}
									setActiveBubble={setActiveBubble}
									skills={skills}
									/>
							)
						})
					}
					{selected?<Bubble
						key={itemList.length}
						left="2vw"
						top="45vh"
						updateItems={goBack}
						content={selected}
						type="back"
					/>:null}
				</Suspense>
			</div>
			<code
				style={
					{
						height: "100vh",
						width: "100vw",
						backgroundColor: "white",
						zIndex: "4",
						position: "absolute"
					}
				}
			>{selected}</code>
		</div>,
		document.getElementById('portal')
	);
}

export default App;