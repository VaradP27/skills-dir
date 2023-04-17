import React from "react"
import "./Tooltip.css"

const Skills = ({ show, skills, childNumber, type, position }) => {
	return (
		<div key={skills} className={`${position === '85vw' || position === '86vw' ? 'tooltip-wrap-left' : 'tooltip-wrap'} ${show ? 'show' : 'hide'}`}>
			<div className={`${position === '85vw' || position==='86vw' ? 'dialogue-triangle-left' : 'dialogue-triangle'} slide-up`}></div>
			<div style={type === 'Skills' ? { width: '15vw' } : { width: '4vw', padding: '15px' }} className={`tooltip slide-up`}>
				<h2>
					<strong>
						{type === "Skills" ? null : childNumber}
					</strong>
				</h2>
				<p>
					<strong>
						{type}
					</strong>
				</p>
				{
					skills &&
					skills.map((item, index) => {
						return (
							<span key={index} className="skill-pill">{item}</span>
						)
					})
				}
			</div>
		</div>
	)
}

export default Skills