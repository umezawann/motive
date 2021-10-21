interface Prop {
  histories: any[]
}

const todos = Array(140).fill(0)
const History = ({histories}: Prop) => {
  return (
    <div>
      {histories.map((his, idx) => (
        <div key={idx} >{his.name}</div>
      ))}

      <div style={{display: 'flex', flexWrap: 'wrap', width: 280}}>
        {todos.map(todo => (
          <div style={{width: 20, height: 20, display: 'inline-block', border: '1px solid #ccc', background: 'green'}}/>

        ))}
      </div>

    </div>
  )
}

export default History