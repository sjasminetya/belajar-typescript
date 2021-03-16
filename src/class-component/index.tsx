import React, {Component} from 'react'

interface State {
    counter: number
}

interface IProps {
    titleH1: string,
    nama?: string
}

class ClassComp extends Component<IProps, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    addCount (): void {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    reduceCount (): void {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    tambah (param: number): void {
        this.setState({
            counter: param + 1
        })
    }

    kurang (param: number): void {
        this.setState({
            counter: param - 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.props.titleH1}</h1>
                {this.state.counter}
                <div>
                    {/* cara ke satu
                    <button onClick={this.addCount.bind(this)}>Add count</button>
                    <button onClick={this.reduceCount.bind(this)}>Reduce count</button> */}

                    {/* cara ke dua
                    <button onClick={() => this.addCount()}>Add count</button>
                    <button onClick={() => this.reduceCount()}>Reduce count</button> */}

                    {/* cara ke tiga menggunakan param
                    <button onClick={() => this.tambah(this.state.counter)}>tambah</button>
                    <button onClick={this.kurang.bind(this, this.state.counter)}>Kurang</button> */}
                </div>
            </div>
        )
    }
}

export default ClassComp