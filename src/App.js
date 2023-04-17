import './App.css';
import Bubble from './components/Bubbles/bubble.js';
import { Suspense, useState } from 'react';
import positions from "./data/positions.json"
import positions10 from "./data/positions10.json"
import Status from './components/Status/Status';
import Explore from './components/Explore/Explore';
import jobFamilies from "./data/job_families.json"
import CloseButton from "./components/CloseButton/CloseButton"
import BackBubble from './components/BackBubble/BackBubble';

const getData = (content) => {
	return content
}

function App() {
	const [activeBubble, setActiveBubble] = useState(null);
	const [skills, setSkills] = useState(null)
	const [selected, setSelected] = useState(null)
	const [depth, setDepth] = useState([])
	const [itemList, setIteamList] = useState(getData(jobFamilies));
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
			console.log(itemList.length)
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
		<div className="main-container" >
			<Suspense fallback={<div>Loading...</div>}>
				<div className='left-wrapper'>
					<Explore />
					{selected ? <BackBubble
						key={itemList.length}
						left="2vw"
						top="45vh"
						onClick={goBack}
						content={selected}
						type="back"
					/> : null}
				</div>
				<div>
				<div className="top-wrapper">
					{depth.length === 0 ?
						<Status status={{ jobFamilies: 9, skills: 97, roles: 69 }} />
						:
						<CloseButton closeAction={closeAction} />
					}
				</div>
				<div className='bubble-container'>
					{
						itemList.map((item, index) => {
							return (
								<Bubble
									className="fade-in-animation"
									key={index}
									left={itemList.length >= 10 ? positions[index].left : positions10[index].left}
									top={itemList.length >= 10 ? positions[index].top : positions10[index].top}
									updateItems={updateItems}
									content={item.name}
									activeBubble={activeBubble}
									setActiveBubble={setActiveBubble}
									skills={skills}
									childNumber={childNumber}
									tooltipType={type}
									setTooltipContent={setTooltipContent}
									size={itemList.length >= 10 ? '13vh' : '15vh'}
									maxSize={itemList.length >= 10 ? '6vw' : '10vw'}
									fontSize={itemList.length >= 10 ? '0.7vw' : '0.8vw'}
								/>
							)
						})
					}
					{/* {
						positions10.map((item, index) => {
							return (
								<Bubble
									className="fade-in-animation"
									key={index}
									left={item.left}
									top={item.top}
									updateItems={updateItems}
									content={"Bubble"}
									activeBubble={activeBubble}
									setActiveBubble={setActiveBubble}
									skills={skills}
									childNumber={childNumber}
									tooltipType={type}
									setTooltipContent={setTooltipContent}
									size={"18vh"}
									maxSize={"12vw"}
									fontSize={"1.0vw"}
								/>
							)
						})
					} */}
					</div>
				</div>
			</Suspense>
		</div>
	);
}

export default App;