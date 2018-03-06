import React from 'react'
import { connect } from 'react-redux'
import {selectBook} from "../actions";
import { bindActionCreators} from 'redux'

class BookList extends React.Component {
    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

    renderList() {
        return this.props.books.map(book => {
            return(
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                    </li>
            )
        })
    }
}

function mapStateToProps(state) {

    //whatever is returned here becomes props for this container
    return {
        books : state.books
    };
}

function mapDispatchToProps(dispatch) {
    //whenever select book is called result should be passed to all reducers
    return bindActionCreators({selectBook : selectBook}, dispatch);
    
}

//promote booklist from a component to a container.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
