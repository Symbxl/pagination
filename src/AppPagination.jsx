import { useState } from "react";

const AppPagination = ({ pageSize, items, itemsPerPage = items?.length / pageSize }) => {
  const [itemOffset, setItemOffset] = useState(0)

  const endOffset = itemOffset + itemsPerPage

  const data = items?.slice(itemOffset, endOffset)

  const handleClick = (e) => setItemOffset((e.target.id - 1) * itemsPerPage)

  const pages = [...Array(pageSize + 1).keys()].slice(1, pageSize + 1)

  return (
    <>
      { data?.map(item => {
        return (
          <div key={item.id}>
            <img src={item.image} />
            <p>{item.name}</p>
          </div> 
        )
      })}

      { pages.map(page => <button onClick={handleClick} key={page} id={page}>{page}</button> )}
    </>
  );
};

export default AppPagination;


