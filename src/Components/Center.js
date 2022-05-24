import '../App.css'
import Arrow from './UI/Arrow'

const Center=()=>{
    return(
        <div className='center'>
            <Arrow />
            <div style={{paddingTop : '3rem'}}>
                <button className='imigrateButton'>iMigrate</button>
            </div>
        </div>
    )
}

export default Center