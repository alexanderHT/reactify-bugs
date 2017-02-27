import React from 'react'

export class List extends React.Component {
render() {
const list = [
{BugId: '634c37bf-9e7f-5630-a7f6', desc: 'Alexnader', sev: 'high', ab: 'alex'},
{BugId: '634c37bf-9e7f-5630-a7f7', desc: 'Qblol', sev: 'high', ab: 'qblol'}
]
return (
<div className="columns">
<div className="column is-medium" id="listBugs">
{list.map((data) =>{
return (
<div className="card" key={data.BugId}>
<header className="card-header">
<p className="card-header-title">
BugId: {data.BugId}
</p>
</header>
<div className="card-content">
<div className="content">
{data.desc}
<span className="tag is-info">{data.sev}</span>
<p>Assigned To: {data.ab}</p>
</div>
<br/>
<small className="tag is-primary">Open</small>
</div>
<footer className="card-footer">
<a className="is-warning card-footer-item">Close</a>
<a className="card-footer-item">Delete</a>
</footer>
</div>
)
})}
<br/>
</div>
</div>
)}
}
