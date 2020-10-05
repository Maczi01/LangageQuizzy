import React, {Component} from 'react'
import { Input, Button, Progress, Divider } from "antd";

class Level1 extends Component {
    render() {
        return (
            <div style={
                {padding: "1rem", border: "1px solid gray", borderRadius: "5px", maxWidth: "400px", margin: '3rem auto'}
            }>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h2>LEVEL 1</h2>
                    <h2>1/5</h2>
                </div>
                Level1
                <span style={{marginBottom: 0, color: 'grey'}}>Infinitive</span>
                <h2>lev1</h2>

                <div style={{fontSize: '1rem'}}>
                    Answer the voca`s <span style={{color: 'red'}}>past participle</span>
                </div>

                <form style={{ padding: '1rem 0' }} onSubmit={this.handleSubmit}>
                    <div style={{ display: 'flex' }}>
                        <Input
                            name="value"
                            onChange={this.handleChange}
                            value={this.state.value}
                            id="voca"
                            type="text"
                        />

                        <Button
                            className
                            type="submit"
                            onClick={this.handleSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </form>

                {/* Timer */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button>5</Button>
                    <Button>4</Button>
                    <Button>3</Button>
                    <Button>2</Button>
                    <Button>1</Button>
                    <Button
                        // onClick={this.handleRestart}
                        // style={{ display: this.state.timeOut ? 'block' : 'none' }}
                    >
                        Click to Restart!
                    </Button>
                </div>
            </div>
        );
    }
}

export default Level1