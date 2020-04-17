import React from 'react'

export default function withHover(Component, hoveringProp = 'hovering'){
    return class withHover extends React.Component{
        constructor(props) {
            super(props)

            this.state = {
                [hoveringProp]: false,
            }

            this.mouseOver = this.mouseOver.bind(this)
            this.mouseOut = this.mouseOut.bind(this)
        }
        mouseOver() {
            this.setState({
            hovering: true
            })
        }
        mouseOut() {
            this.setState({
            hovering: false
            })
        }
        render() {
            const props = {
                [hoveringProp]: this.state.hovering,
                ...this.props
            }

            return (
            <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                <Component {...props} />
            </div>
            )
        }
    }
}