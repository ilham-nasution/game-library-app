import React from "react";

const Pagination = (props) => {
  return (
    <nav>
      <ul className="pagination justify-content-center">
        {Array.from(Array(10), (_, i) => {
          return (
            <li key={i} className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={() => props.paginate(i + 1)}
              >
                {i + 1}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
