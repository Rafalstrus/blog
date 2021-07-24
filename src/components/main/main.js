import { connect } from 'react-redux'
import actions from '../../redux-store/duck/actions'

function Main({setPosts}) {
    return (
        <div className="Main">
            <p>works</p>
            {console.log('bb')}
            <button onClick={() => {
                setPosts("a")
            }}>bb</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setPosts: (post) => dispatch(actions.setPosts(post))
  })

export default connect(null, mapDispatchToProps)(Main);
