import React from "react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import styles from "./Header.module.css";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <section>
        <div className={styles.header_container}>
          <div className={styles.logo_container}>
            {/* logo */}
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
            <div>
              <span className={styles.delivery}>
                <SlLocationPin />
                <div>
                  <p>Delivered to</p>
                  <span>Ethiopia</span>
                </div>
              </span>
            </div>
          </div>

          {/* search section */}
          <div className={styles.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="search product" />
            <BsSearch size={25} />
          </div>

          {/* right side links */}
          <div className={styles.order_container}>
            <a href="#" className={styles.language}>
              <img
                src="https://designerysigns.com/images/misc-pictures/free-printable-us-flag.jpg"
                alt="United States Flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>

            {/* Sign In */}
            <a href="#" className={styles.sign_in}>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>

            {/* Orders */}
            <a href="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </a>

            {/* Cart */}
            <a href="/cart" className={styles.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
