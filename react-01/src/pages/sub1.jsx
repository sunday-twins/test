import { useState, useEffect } from "react";
import BoxProfile from "../components/list/box_profile";

const Sub1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 20)))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  return (
    <div className="page_sub">
      <div className="inner">
        <h2>sub 1</h2>

        <article className="box_thumb_profile">
          <h3>대표 이미지</h3>
          <BoxProfile src="https://picsum.photos/seed/picsum/200/300" name="name" />
        </article>

        <section className="section">
          <h3>author</h3>
          <ul className="list_img_name">
            {data.map((d, index) => (
              <li className="items_profile" key={index}>
                <BoxProfile src={d.download_url} name={d.author} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
};

export default Sub1;