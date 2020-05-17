import React, { Component } from "react";

class Form extends Component {
    render(){
        return(
            <div>
                <div>
                    <form onSubmit={this.props.onhandleClick}>
                        <div>
                            <input
                                name="text" className=""
                                id="text"
                                placeholder="text"
                                type="text" value={this.props.text}
                                onChange={this.props.onhandleChange}
                            />
                        </div>
                        <div>
                            <input className="" type="submit" value="送信" />
                        </div>
                    </form>
                </div>
                <div>
                    <form onSubmit={this.props.onhandleClick2}>
                        <div>
                            <input name="text"
                            id="text2"
                            placeholder="text2"
                            type="text"
                            className="" value={this.props.text2}
                            onChange={this.props.onhandleChange2}
                            />
                        </div>
                        <div>
                            <input className="" type="submit" value="送信"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;