import { useState, useEffect } from 'react';
import './bubble.css';
import { Canvas } from '../Canvas/Canvas';
import Tooltip from "../Tooltip/Tooltip"
import { SkillBubble } from '../SkillBubble/SkillBubble';
import skillBubblePositions from "../../data/skill_bubble_positions.json"
function Bubble({ left, top, content, updateItems, activeBubble, setActiveBubble, fade, skills, childNumber, tooltipType, setTooltipContent, size, maxSize, fontSize }) {
	const [show, setShow] = useState(false)

	useEffect(() => {
		setShow(activeBubble === content)
	}, [activeBubble, content])


	return (
		<div style={{ left, top, position: 'absolute' }} >
			<div className="bubble-container-inner fade-in-animation">
				<div
					style={{
						width: size ? size : "100px",
						height: size ? size : "100px",
						maxHeight: maxSize ? maxSize : "100px",
						maxWidth: maxSize ? maxSize : "100px",
						fontSize: fontSize ? fontSize : ""
					}}
					className={`bubble  fade-in-animation ${activeBubble ? (activeBubble === content ? '' : 'blur') : null}`}
					onMouseOver={() => setTooltipContent(content)}
					onMouseOut={() => setActiveBubble(null)}
					onClick={() => updateItems(content)}>
					<span className="bubble-text">
						{content}
						{/* {`left: ${left} top: ${top}`} */}
					</span>
					{
						!skills &&
						<Tooltip show={show} childNumber={childNumber} type={tooltipType} position={left} />
					}
				</div>
			</div>
			{
				skills && show && (
					<>
						{/* <SkillBubble skill="SQL" style={{ left: "-50px", top: "-30px" }} />
						<SkillBubble skill="CSS" style={{ left: "50px", top: "-90px" }} />
						<SkillBubble skill="CSS" style={{ left: "65px", top: "220px" }} />
						<SkillBubble skill="SQL" style={{ left: "150px", top: "230px" }} />
						<SkillBubble skill="CSS" style={{ left: "-75px", top: "50px" }} />
						<SkillBubble skill="CSS" style={{ left: "-40px", top: "200px" }} />
						 <SkillBubble skill="CSS" style={{ left: "220px", top: "50px" }} /> */}
						{skills.map((skill, index) =>
							index < skillBubblePositions.length &&
							<SkillBubble key={index} skill={skill} style={skillBubblePositions[index].bubblePosition} />
						)
						}
						<Canvas
							skills={skills.length}
							position={skillBubblePositions}
							width={300}
							height={300}
							style={{
								left: "-30px",
								top: "-50px",
							}}
						/>
					</>
				)
			}
		</div>
	);
}

export default Bubble