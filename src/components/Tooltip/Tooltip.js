import React, { Suspense } from "react"
import "./Tooltip.css"

const Skills = ({ show, skills }) => {
	return (
		<div className={`${show ? 'show' : 'hide'}`}>
			<div className={`dialogue-triangle slide-up ${show ? 'show' : 'hide'}`}></div>
			<div className={`tooltip slide-up ${show ? 'show' : 'hide'}`}>
				<p style={{ color: 'red' }}>{show}</p>
				<h2>
					<strong>
						100
					</strong>
				</h2>
				<p>
					Skills
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