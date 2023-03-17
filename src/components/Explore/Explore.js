import "./Explore.css"

const Explore = () => {
	return (
		<div className="explore-wrapper">
			<h2 className="explore-title">
				Explore verified tech roles & skills
			</h2>
			<p className="explore-text">
				We help candidates sharpen their tech skills and purue job opportunities
			</p>
			<button className="explore-link">
			<span href="#id">
					View All Roles 
					<img alt="back-button" className="explore-icon" src="./assets/arrow-right.svg" />
			</span>
				</button>
		</div>
	)
}

export default Explore