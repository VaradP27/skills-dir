import './App.css';
import Bubble from './components/Bubbles/bubble.js';
import { Suspense, useState } from 'react';
import positions from "./data/positions.json"
import Status from './components/Status/Status';
import Explore from './components/Explore/Explore';
import jobFamilies from "./data/job_families.json"
import CloseButton from "./components/CloseButton/CloseButton"

const getData = (content) => {
	return content
}

function App() {
	const [activeBubble, setActiveBubble] = useState(null);
	const [skills, setSkills] = useState(null)
	const [selected, setSelected] = useState(null)
	const [depth, setDepth] = useState([])
	const [itemList, setIteamList] = useState(getData(jobFamilies));
	const [itemPosistions] = useState(positions)
	const [type, setType] = useState(jobFamilies[0].children)
	const [childNumber, setChildNumber] = useState(jobFamilies[0].data.length)

	const updateItems = (content) => {
		if (itemList[0].children === "Skills") {
			return
		}
		setIteamList([])
		setActiveBubble(null)
		setTimeout(() => {
			setIteamList(itemList.find(item => item.name === content).data)
			setDepth([...depth, itemList.findIndex(item => item.name === content)])
			setSelected(content)
			setType(itemList.find(item => item.name === content).children)
		}, 100)
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
		console.log(tooltipItem)
		if (tooltipItem.children === "Skills") {
			setSkills(tooltipItem.data)
		}
		setType(tooltipItem.children)
		setActiveBubble(content)
		setChildNumber(tooltipItem.data.length)
	}

	const closeAction = () => {
		setIteamList([])
		setTimeout(() => {
			setActiveBubble(null)
			setIteamList(jobFamilies)
			setType(null)
			setSkills([])
			setDepth([])
			setSelected(null)
		})
	}

	return (
		<div className="bubble-container" >
			<Suspense fallback={<div>Loading...</div>}>
				<Explore />
				<div className="top-right-wrapper">
					{depth.length === 0 ?
						<Status status={{ jobFamilies: 9, skills: 97, roles: 69 }} />
						:
						<CloseButton closeAction={closeAction} />
					}
				</div>
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