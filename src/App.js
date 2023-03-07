import './App.css';
import Bubble from './bubble.js';
import React, { Suspense, useEffect } from 'react';
import positions from "./positions.json"
import Status from './components/Status/Status';

function App() {

	const [i, setI] = React.useState(0);

	const goBack = () => {
		setSelected(null)
		setItemPositions(positions)
		setIteamList(list)
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
	// const [itemPosistions, setItemPositions] = React.useState(positions.map(value => ({ value, sort: Math.random() }))
	// 	.sort((a, b) => a.sort - b.sort)
	// 	.map(({ value }) => value));
	const [itemPosistions, setItemPositions] = React.useState(positions)
	const updateItems = (content) => {
		setItemPositions(positions.map(value => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value))
		setSelected(content)
		setIteamList(list1)
		setI(i + 1)
	}

	useEffect(() => {
		console.log(selected)
	}, [selected])


	return (
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
							return (
								<Bubble
									className="fade-in-animation"
									key={index}
									left={itemPosistions[index].left}
									top={itemPosistions[index].top}
									updateItems={updateItems}
									content={item}
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
					{/* {selected ?
						<div
							style={{
								position: "absolute",
								height: "690px",
								width: "690px",
								backgroundColor: "red",
								top: "30vh",
								left: "0.5vw",
								borderRadius: "50%",
								fontSize: "16px",
								color: "#E8FEED",
								textAlign: "center",
								backgroundColor: "#202020",
								fontFamily: "'Open Sans', sans-serif",
								lineHeight: "21.8px",
								fontWeight: "600",
								overflow: "hidden",
								zIndex: "1",
							}}
						>
							<div
								style={{
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)'
								}}
								onClick={goBack}
							>
								<p>
									{selected}
								</p>
								<button
									style={{
										height: '52px',
										width: '52px',
										textAlign: 'center',
										margin: '10px',
										border: '1px solid white',
										backgroundColor: '#4E4E4E',
										borderRadius: '50%',
										color: 'grey'

									}}
								>
									<p style={{
										color: 'white',
									}}>
										{"<"}
									</p>
								</button>
							</div>
						</div> : null
					} */}
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
		</div>
	);
}

export default App;