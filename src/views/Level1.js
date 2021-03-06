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

    handleChange = (event) => {
        this.setState({value: event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault()

        if (this.state.timeOut) {
            alert("Please click restart")
        }
        if (!this.state.value.trim()) {
            alert("Put something...")
        }
        this.setState({value: "", wrongAnswear: ""})
        this.checkAnswer()
    }

    checkAnswer = () => {
        (this.state.randomTense === 'simple' ? level1[this.state.round].simple : level1[this.state.round].past)
        === this.state.value ?

            this.setState({round: this.state.round + 1, timer: 10, wringAnswer: ""}, () => {
                clearInterval(this.timeout)
                this.timeout = setTimeout(() => {
                    this.setState({timeOut: true}, 10000)
                })
            })
            :
            this.setState({
                    wrongAnswer: this.state.randomTense === 'simple' ? `${level1[this.state.round].simple}`
                        : `${level1[this.state.round].past}`
                }, () => {
                    this.setState({
                        round: this.state.round + 1,
                        timer: 10,
                        wrongAnswers: this.state.wrongAnswers.concat(level1[this.state.round].voca)
                    })
                    this.randomTense()
                    clearTimeout(this.timeout)
                    this.timeout = setTimeout(() => {
                        this.setState({timeOut: true})
                    }, 10000)

                }
            )
    }

    render() {
        return (
            <div style={
                {padding: "1rem", border: "1px solid gray", borderRadius: "4px", maxWidth: "400px", margin: '3rem auto'}
            }>
                <h1>Game</h1>
                <Progress percent={50} status="active"/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h2>LEVEL 1</h2>
                    <h2>1/5</h2>
                </div>
                Level1

                <span style={{ marginBottom: 0, color: 'grey' }}>Infinitive</span>
                <h2>{level1[this.state.round].voca}</h2>

                <div style={{fontSize: '1rem'}}>
                    Answer the voca <span style={{color: 'red'}}>Past participle</span>
                    {this.state.randomTense === 'simple' ? 'simple past' : 'past participle'}

                </div>

                <form style={{padding: '1rem 0'}} onSubmit={this.handleSubmit}>
                    <div style={{display: 'flex'}}>
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
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Progress percent={(`${this.state.timer}` * 10)} status="exception" showInfo={false}/>

                </div>
                <Divider/>

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button
                        onClick={this.handleRestart}
                        style={{display: this.state.timeOut ? "block" : "none"}}
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