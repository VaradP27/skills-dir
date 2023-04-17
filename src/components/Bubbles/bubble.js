import { useState, useEffect } from 'react';
import './bubble.css';
import Tooltip from "../Tooltip/Tooltip"
function Bubble({ left, top, content, updateItems, activeBubble, setActiveBubble, fade, skills, childNumber, tooltipType, setTooltipContent, size, maxSize, fontSize }) {
	const [show, setShow] = useState(false)

	useEffect(() => {
		setShow(activeBubble === content)
	}, [activeBubble, content])


	return (
		<div style={{ left, top }} className="bubble-container-inner fade-in-animation">
			<div
				style={{
					width: size ? size : "100px",
					height: size ? size : "100px",
					maxHeight: maxSize ? maxSize : "100px",
					maxWidth: maxSize ? maxSize : "100px",
					fontSize: fontSize? fontSize : ""
				}}
				className={`bubble  fade-in-animation ${activeBubble ? (activeBubble === content ? '' : 'blur') : null}`}
				onMouseOver={() => setTooltipContent(content)}
				onMouseOut={() => setActiveBubble(null)}
				onClick={() => updateItems(content)}>
				<span className="bubble-text">
					{content}
					{/* {`left: ${left} top: ${top}`} */}
				</span>
				<Tooltip skills={skills} show={show} childNumber={childNumber} type={tooltipType} position={left} />
			</div>
		</div>
	);
}

export default Bubble