import './App.css';
import Bubble from './bubble.js';
import React, { Suspense } from 'react';
import positions from "./data/positions.json"
import Status from './components/Status/Status';
import Explore from './components/Explore/Explore';
import jobFamilies from "./data/job_families.json"

const getData = (content) => {
	return content
}

function App() {
	const [i, setI] = React.useState(0);
	const [activeBubble, setActiveBubble] = React.useState(null);
	const [skills, setSkills] = React.useState(null)
	const [selected, setSelected] = React.useState(null)
	const [depth, setDepth] = React.useState([])
	const [itemList, setIteamList] = React.useState(getData(jobFamilies));
	const [itemPosistions] = React.useState(positions)
	const [type, setType] = React.useState(jobFamilies[0].children)
	const [childNumber, setChildNumber] = React.useState(jobFamilies[0].data.length)

	const updateItems = (content) => {
		if (itemList[0].children === "Skills") {
			return
		}
		setActiveBubble(null)
		setIteamList(itemList.find(item => item.name === content).data)
		setDepth([...depth, itemList.findIndex(item => item.name === content)])
		setSelected(content)
		setI(i + 1)
		setType(itemList.find(item => item.name === content).children)
		if (type === 'Skills') {
			console.log("content: ", itemList.find(item => item.name === content).data)
			setSkills(itemList.find(item => item.name === content).data)
		}
	}

	const goBack = () => {
		setActiveBubble(null)
		setIteamList([])
		setSelected(null)
		setTimeout(() => {
			let data = jobFamilies
			depth.pop()
			depth.forEach(index => {
				data = jobFamilies[index].data
				setSelected(jobFamilies[index].name)
			})
			setIteamList(data)
			setType(null)
			setSkills([])
		}, 100)
	}

	const setTooltipContent = (content) => {
		if (content === 'back')
			return
		const tooltipItem = itemList.find(item => item.name === content)
		setType(tooltipItem.children)
		setActiveBubble(content)
		setChildNumber(tooltipItem.data.length)
		if (type === "Skills") {
			setSkills(tooltipItem.data)
		}
	}

	return (
		<div key={i} className="bubble-container" >
			<Suspense fallback={<div>Loading...</div>}>
				<Explore/>
				<Status status={{ jobFamilies: 10, skills: 9, roles: 7 }} />
				{
					itemList.map((item, index) => {
						return (
							<Bubble
								className="fade-in-animation"
								key={index}
								left={itemPosistions[index].left}
								top={itemPosistions[index].top}
								updateItems={updateItems}
								content={item.name}
								activeBubble={activeBubble}
								setActiveBubble={setActiveBubble}
								skills={skills}
								childNumber={childNumber}
								tooltipType={type}
								setTooltipContent={setTooltipContent}
							/>
						)
					})
				}
				{selected ? <Bubble
					key={itemList.length}
					left="2vw"
					top="45vh"
					updateItems={goBack}
					content={selected}
					type="back"
				/> : null}
			</Suspense>
		</div>
	);
}

export default App;