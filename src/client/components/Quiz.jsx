import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Quiz extends React.Component {

    handler = (row, cell) => {
        console.log(row, cell);
    }


    render() {
        return (
            <div>
                <table class="table table-bordered text-center">
                    <tbody>
                    {Array(3).fill(1).map((row, rowKey) =>
                        <tr>
                            {rowKey === 0 && <td><b>HTML</b></td>}
                            {rowKey === 1 && <td><b>CSS</b></td>}
                            {rowKey === 2 && <td><b>JS</b></td>}
                            {Array(3).fill(1).map((cell, cellKey) =>
                                <td onClick={() => this.handler(rowKey, cellKey)}>
                                    {/* {rowKey}{cellKey} */}
                                    <Link to={`/game/${rowKey}/${cellKey}`}>{((cellKey + 1) * 50) * 2}</Link>
                                </td>
                            )}
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Quiz;