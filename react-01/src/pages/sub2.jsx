import { SUB2_ACCORDION } from "../mock/mock_sub2";
import Accordion from "../components/accordion/accordion";
const Sub2 = () => {
  return (
    <div className="page_sub">
      <section className="section">
        <div className="inner">
          <h2>sub 2</h2>
        </div>
      </section>

      <article class="article_banner">
        <img src="https://picsum.photos/700/350" alt="" />
        <p className="text_bnr">Banner</p>
      </article>

      <section className="section">
        <div className="inner">
          {SUB2_ACCORDION.map((d, index) => (
            <Accordion button={d.button} text={d.text} />
          ))}
        </div>
      </section>
    </div>
  )
};

export default Sub2;