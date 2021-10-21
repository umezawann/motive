interface Prop {
  histories: any[]
}

const History = ({histories}: Prop) => {
  return (
    <div>
      {histories.map((his, idx) => (
        <div key={idx} >{his.name}</div>
      ))}


    </div>
  )
}

export default History