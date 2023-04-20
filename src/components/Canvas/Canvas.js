import React, { useEffect, useRef } from "react";
import "./Canvas.css";

export function Canvas({ width, height, style, skills, position }) {
	const ref = useRef(null);

	useEffect(() => {
		const canvas = ref.current;
		const ctx = canvas.getContext("2d");
		ctx.strokeStyle = "#00BB3E";
		ctx.beginPath();
		ctx.setLineDash([5, 5]);
		ctx.lineWidth = 2;

		for (let i = 0; i < skills && i < position.length; i++) {
			ctx.moveTo(...position[i].canvasPosition);
			ctx.bezierCurveTo(...position[i].curvePosition);
		}
		// ctx.moveTo(100, 100);
		// ctx.bezierCurveTo(50, 10, 150, 60, 100, -10);
		// ctx.moveTo(20, 50);
		// ctx.bezierCurveTo(60, 40, 70, 100, 60, 80);
		// ctx.moveTo(0, 120);
		// ctx.bezierCurveTo(10, 160, 100, 200, 60, 80);
		// ctx.moveTo(30, 250);
		// ctx.bezierCurveTo(40, 250, 100, 200, 80, 100);
		// ctx.moveTo(130, 280);
		// ctx.bezierCurveTo(100, 250, 200, 200, 90, 70);
		// ctx.moveTo(220, 280);
		// ctx.bezierCurveTo(250, 150, 180, 300, 90, 80);
		// ctx.moveTo(280, 100);
		// ctx.bezierCurveTo(250, 50, 180, 30, 70, 90);
		ctx.stroke();
	}, []);
	return (
		<canvas
			ref={ref}
			style={style}
			width={width}
			height={height}
			className="canvasElement"
		>
		</canvas>
	);
}
