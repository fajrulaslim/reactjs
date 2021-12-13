import React, { Component } from 'react'
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp'

export class Youtube extends Component {
    render() {
        return (
            <div>
                <YoutubeComp 
                    time="7.12" 
                    title="One Piece Eps 1" 
                    desc="200x ditonton, 5 hari yang lalu"
                />
                <YoutubeComp 
                    time="5.00" 
                    title="One Piece Eps 2" 
                    desc="350x ditonton, 3 hari yang lalu"
                />
                <YoutubeComp 
                    time="9.34" 
                    title="One Piece Eps 3" 
                    desc="248x ditonton, 2 hari yang lalu"
                />
                <YoutubeComp />
            </div>
        )
    }
}

export default Youtube
