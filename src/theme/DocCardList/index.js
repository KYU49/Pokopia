import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  useCurrentSidebarSiblings,
  filterDocCardListItems,
} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';
function DocCardListForCurrentSidebarCategory({className}) {
  const items = useCurrentSidebarSiblings();
  return <DocCardList items={items} className={className} />;
}
function DocCardListItem({item}) {
  return (
    <article className={styles.docCardListItem} style={{marginBottom: '0.5rem'}}>
      <Link 
        to={item.href} 
        style={{
          display: 'block',
          padding: '2px',
          fontSize: '1.1rem',
          fontWeight: '500',
          borderBottom: '1px solid var(--ifm-color-emphasis-200)',
          textDecoration: 'none'
        }}
      >
        📄 {item.label}
      </Link>
    </article>
  );
}
export default function DocCardList(props) {
  const {items, className} = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <section className={clsx(styles.docCardList, className)}>
      {filteredItems.map((item, index) => (
        <DocCardListItem key={index} item={item} />
      ))}
    </section>
  );
}
