import React from 'react'
import styles from './UserStatsGraphs.module.css'

const UserStatsGraphs = ({data}) => {
  const [graph, setGraph] = React.useState([])
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  )
}

export default UserStatsGraphs