import ProjectList from "./ProjectList.js"

function Toolbar({ foo, btns, sel}) {
    return (
    <div onClick={ foo }>
        <div>{ btns }</div>
        <div>{ ProjectList(sel) } { console.log(sel) }</div>
    </div>)
}

export default Toolbar;