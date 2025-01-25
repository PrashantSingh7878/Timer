import React from 'react'
import './table.css'
export default function Table() {
  let data = [
  ["name", "title", "salary"],
  ["A", "cs", "2344"],
  ["B", "fg", "543"],
  ["C", "fds", "765"]
  ]
  return (
    <div>
      <table>{
        data.map(item=>{
          return <tr>{
            item.map(it=>{
              return <td>{it}</td>
            })
          }
          </tr> 
        })
      }
      </table>
    </div>
  )
}
