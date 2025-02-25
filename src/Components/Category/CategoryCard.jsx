import React from "react";
import styles from "./category.module.css";

function CategoryCard({ data }) {
  return (
    <div className={styles.category}>
      <a href={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
