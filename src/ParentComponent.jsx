import React from 'react'

function ParentComponent(props) {
    const mapping = React.Children.map(props.children, (c => React.cloneElement(c, { color: 'bg-danger' })))
    const arrChildren = React.Children.map(props.children, c => c)
    const forEaching = () => React.Children.forEach(props.children, c => {
        console.log('name =', c.type.displayName)
    })
    const childrenToArr = React.Children.toArray(props.children)
    forEaching()
    // const arrChange = childrenToArr.pop()
    childrenToArr.push(<li>New Li</li>)

    const reverseClone = React.Children.map(props.children, (c => React.cloneElement(c)))

    return (
        <div className="">
            Original Children
            {props.children}
            {/* {mapping}
            {arrChildren}
            {React.Children.count(props.children)}
            {/* {arrChange} */}
            Array returned and reversed with new li
            {childrenToArr.reverse()}
            {/* {addArr} */}
            {/* {childrenToArr.reverse()} */}
            Clone Reversed
            {reverseClone.reverse()}



        </div>
    )
}

export default ParentComponent
