import React from "react";
import { CategoryInfos } from "./CategoryFullInfos";
import CategoryCard from "./CategoryCard";
import styles from "./category.module.css";
function Category() {
  return (
    <section className={styles.category_container}>
      {/* {CategoryInfos.map((infos) => (
        <CategoryCard  data={infos} />
))} */}
      {CategoryInfos.map((infos) => (
        <CategoryCard key={infos.name} data={infos} />
      ))}
    </section>
  );
}

export default Category;
