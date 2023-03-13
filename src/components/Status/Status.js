import "./Status.css"

const Status = ({ status }) => {
	return (
		<div className="status">
			<div className="grid-item">
				<span className="status-number">{status.jobFamilies}</span>
				<span className="status-text">Job Families</span>
			</div>
			<div className="grid-item">
				<span className="status-number">{status.roles}</span>
				<span className="status-text">Skills</span>
			</div>
			<div className="grid-item">
				<span className="status-number">{status.skills}</span>
				<span className="status-text">Roles</span>
			</div>
		</div>
	)
}

export default Status