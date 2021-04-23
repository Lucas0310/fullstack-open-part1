import React from 'react'
import Statistic from './Statistic'

const Statistics = ({ stats }) => {
    const [good, neutral, bad, total, average] = stats

    if (total === 0) return (<div>No feedback given</div>)

    return (
        <table>
            <tbody>
                <tr>
                    <td><Statistic text='good' value={good}></Statistic></td>
                </tr>
                <tr>
                    <td><Statistic text='neutral' value={neutral}></Statistic></td>
                </tr>
                <tr>
                    <td><Statistic text='bad' value={bad}></Statistic></td>
                </tr>
                <tr>
                    <td><Statistic text='total' value={total}></Statistic></td>
                </tr>
                <tr>
                    <td><Statistic text='average' value={average}></Statistic></td>
                </tr>
                <tr>
                    <td><Statistic text='positive' value={`${(good / total) * 100}%`}></Statistic></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Statistics
