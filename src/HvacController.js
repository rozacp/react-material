import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

const style = {
    card: {
        // marginTop: 150,
        // padding: 30
    }
};

export default class HvacController extends Component {
    
    hadleHvac = (e, val) => {
        this.props.updateHvac(val);
    };

    hvacValue = () => `HVAC: ${this.props.hvac}`;

    render() {
        return (
            <Card style={style.card}>
                <CardHeader
                    title="HVAC Control"
                    subtitle="Drag the slider to set your desired HVAC value."
                >
                    <Avatar>{this.props.hvac}</Avatar>
                </CardHeader>    
                <CardText>
                    
                    <Slider
                        min={0}
                        max={10}
                        step={1}
                        value={this.props.hvac}
                        onChange={this.hadleHvac}
                    />
                    {/* <p>The value of HVAC is: <span>{this.props.hvac}</span></p> */}
                </CardText>
            </Card>
        );
    }
}
