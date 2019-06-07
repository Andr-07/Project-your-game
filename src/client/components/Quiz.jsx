import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Quiz extends React.Component {

    handler = (row, cell) => {
        console.log(row, cell)
    }


    render() {
        return (
            <div>

                <table border='2'>
                    <tbody>
                        {Array(3).fill(1).map((row, rowKey) =>
                            <tr>
                                {rowKey === 0 &&
                                    <td>HTML</td>
                                }
                                {rowKey === 1 &&
                                    <td>CSS</td>
                                }
                                {rowKey === 2 &&
                                    <td>JS</td>
                                }
                                {Array(3).fill(1).map((cell, cellKey) =>
                                    <td onClick={() => this.handler(rowKey, cellKey)}>
                                        {/* {rowKey}{cellKey} */}
                                        <Link to={`/game/${rowKey}/${cellKey}`}>{(cellKey + 1) * 50}</Link>
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