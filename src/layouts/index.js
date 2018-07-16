import React from 'react';
import styles from './index.module.css';

import Link from "gatsby-link";

export default ({ children, data }) => (
    <section className={styles['main-layout']}>
        <header className={styles.header}>
            <h1>{data.site.siteMetadata.title}</h1>
            <nav>
                <ul className={styles.menu}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
        {children()}
    </section>
);

export const query = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;