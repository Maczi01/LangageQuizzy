import React, {Component} from 'react'
import { Input, Button, Progress, Divider } from "antd";

class Level1 extends Component {
    render() {
        return (
            <div style={
                {padding: "1rem", border: "1px solid gray", borderRadius: "5px", maxWidth: "400px", margin: '3rem auto'}
            }>
                <h1>Game</h1>
                <Progress percent={70} status="active"/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h2>LEVEL 1</h2>
                    <h2>1/5</h2>
                </div>
                Level1
                <span style={{marginBottom: 0, color: 'grey'}}>Infinitive</span>
                <h2>lev1</h2>

                <div style={{fontSize: '1rem'}}>
                    Answer the voca`s <span style={{color: 'red'}}>Past participle</span>
                </div>

                <form style={{ padding: '1rem 0' }} onSubmit={this.handleSubmit}>
                    <div style={{ display: 'flex' }}>
                        <Input
                            name="value"
                            // onChange={this.handleChange}
                            // value={this.state.value}
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

                <Divider />
                <h3>Wrong! Correct answer: </h3>
                <div>
                    <li style={{ display: 'block' }}>
                        <p
                            // onClick={this.handleAudio}
                            // data-value={level1[this.state.round - 1] ? level1[this.state.round - 1].mp3 : level1[this.state.round].mp3}
                        >audoio
                            {/*<AudioOutlined />   {this.state.wrongAnswer}*/}
                        </p>
                    </li>

                    <audio id="audio" controls style={{ display: 'none' }}>
                        <source id="audioSource"></source>
                        Your browser does not support the audio format.
                    </audio>

                </div>
            </div>
        );
    }
}

export default Level1