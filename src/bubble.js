import React from 'react';
import './bubble.css';
import Tooltip from "./components/Tooltip/Tooltip"
function Bubble({ left, top, content, updateItems, type, activeBubble, setActiveBubble, fade, skills, childNumber, tooltipType, setTooltipContent }) {
	const [show, setShow] = React.useState(false)

	React.useEffect(() => {
		setShow(activeBubble === content)
	}, [activeBubble, content])


	return (
		<div style={
			type === 'back?' ? {} : { left, top }
		}


			className={`${type === 'back' ? 'back-bubble' : ''} bubble  fade-in-animation ${activeBubble ? (activeBubble === content ? '' : 'blur') : null} ${fade ? 'fade-out-animation' : null}}`}
			onMouseOver={() => setTooltipContent(content)}
			onMouseOut={() => setActiveBubble(null)}


			onClick={() => updateItems(content)}>

			{content}
			{type === 'back' ? <button
				className="back-button"
			>
				<img src="./assets/back.svg" alt="back button" />
			</button> : null}
			<Tooltip skills={skills} show={show} childNumber={childNumber} type={tooltipType} position={left} />
		</div>
	);
}

export default Bubble