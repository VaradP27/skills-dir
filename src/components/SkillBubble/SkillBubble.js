import React from "react";
import "./SkillBubble.css";

export function SkillBubble({ skill, style, description = "" }) {
	return (
		<div className="skillBubble" style={style}>
			<div>
				<h6>{skill}</h6>
			</div>
		</div>
	);
}
