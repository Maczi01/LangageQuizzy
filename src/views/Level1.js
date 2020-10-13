import React, {Component} from 'react'
import {Input, Button, Progress, Divider} from "antd";
import {level1} from "../data";

class Level1 extends Component {

    state = {
        value: "",
        timeOut: false,
        round: 0,
        timer: 10,
        randomTense: "",
        wrongAnswer: "",
        wrongAnswers: [],
    }

    componentDidMount() {
        this.startTimeout();
        console.log("jest")
        // this.randomTense();
    }

    startTimeout = () => {
        this.timeout = setTimeout(() => {
            this.setState({timeOut: true})
        }, 10000)


        this.interval = setInterval(() => {
            this.setState({timer: this.state.timer - 1})
            console.log(this.state.timer)
        }, 1000)
    }

    randomTense = async () => {
        let TenseArray = ["simple", "past"]
        let randomTense = await TenseArray[Math.floor(Math.random() * TenseArray.length)]
        this.setState({randomTense})
    }

    componentDidUpdate() {
        if (this.state.timer === 0) {
            clearInterval(this.interval)
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
        clearInterval(this.interval)
    }

    handleRestart = () => {
        this.setState({
            timer: 10,
            timeOut: false,
            wrongAnswer: ""
        })

        this.startTimeout()
    }

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

                <form style={{padding: '1rem 0'}} onSubmit={this.handleSubmit}>
                    <div style={{display: 'flex'}}>
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
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button className={`${this.state.timer <= 8 && 'disabled'}`}>5</Button>
                    <Button className={`${this.state.timer <= 6 && 'disabled'}`}>4</Button>
                    <Button className={`${this.state.timer <= 4 && 'disabled'}`}>3</Button>
                    <Button className={`${this.state.timer <= 2 && 'disabled'}`}>2</Button>
                    <Button className={`${this.state.timer <= 0 && 'disabled'}`}>1</Button>
                    <Button
                        onClick={this.handleRestart}
                        // onClick={this.handleRestart}
                        // style={{ display: this.state.timeOut ? 'block' : 'none' }}
                    >
                        Click to Restart!
                    </Button>
                </div>

                <Divider/>
                <h3>Wrong! Correct answer: </h3>
                <div>
                    <li style={{display: 'block'}}>
                        <p
                            // onClick={this.handleAudio}
                            // data-value={level1[this.state.round - 1] ? level1[this.state.round - 1].mp3 : level1[this.state.round].mp3}
                        >audoio
                            {/*<AudioOutlined />   {this.state.wrongAnswer}*/}
                        </p>
                    </li>

                    <audio id="audio" controls style={{display: 'none'}}>
                        <source id="audioSource"></source>
                        Your browser does not support the audio format.
                    </audio>

                </div>
            </div>
        );
    }
}

export default Level1