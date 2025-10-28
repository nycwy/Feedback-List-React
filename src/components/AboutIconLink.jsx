import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

function AboutIconLink() {
    return (
        <div className='about-link'>
            <Link to={{          //(to='/path'): we can also do this or pass an object with an additional parameters
                pathname: '/about',
                search: '?sort=name',
                hash: '#about'
            }}>
                <FaQuestion size={30}/>
            </Link>
        </div>
    )
}

export default AboutIconLink