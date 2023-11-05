import { useContext } from 'react';
import ListItem from './ListItem';

// import SearchContext from '../../context';
import './styles.css';
import '../../App.css';
import PaginationContext from '../../context/paginationContext';
import Pagination from '../Pagination';
const List: React.FC = () => {
  // const context = useContext(SearchContext);
  // const { people } = context;

  const paginationContext = useContext(PaginationContext);
  const { currentItems } = paginationContext;

  return (
    // <div className="list">
    //   {people?.length ? (
    //     <ul className="cards">
    //       {people?.map((p) => (
    //         <li key={p.name}>
    //           <ListItem item={p} />
    //         </li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p className="list-warning-text">
    //       Oops, there are no people with that name
    //     </p>
    //   )}
    // </div>

    <div className="list">
      {currentItems?.length ? (
        <ul className="cards">
          {currentItems?.map((p) => (
            <li key={p.name}>
              <ListItem item={p} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="list-warning-text">
          Oops, there are no people with that name
        </p>
      )}
      {currentItems && <Pagination />}
    </div>
  );
};

export default List;
