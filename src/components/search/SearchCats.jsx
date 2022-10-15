import React, { useEffect, Fragment } from "react";
import { requestCats, updateSearch } from "../../actions/cats";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Spinner from "../layout/Spinner";

const SearchCats = ({
  cats: { catsList, search, isPending },
  requestCats,
  updateSearch,
}) => {
  useEffect(() => {
    requestCats();
  }, [requestCats]);

  if (catsList.length > 9) {
    catsList.pop();
  }

  function onSearchChange(event) {
    updateSearch(event.target.value);
  }

  const filteredCats = catsList.filter((cat) => {
    return cat.name.split(" ")[1].toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="container main">
      <h2 className="pt-4">Cat Searching</h2>

      {isPending ? (
        <Fragment>
          <p>Loading cats. Wait a moment!</p>
          <Spinner />
        </Fragment>
      ) : (
        <Fragment>
          <SearchBox searchChange={onSearchChange} />
          <div className="row">
            <CardList catsList={filteredCats} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

SearchCats.propTypes = {
  requestCats: PropTypes.func.isRequired,
  cats: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cats: state.cats,
});

export default connect(mapStateToProps, { requestCats, updateSearch })(
  SearchCats
);
