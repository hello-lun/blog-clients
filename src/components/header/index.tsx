'use client'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if(!ref.current) return;
    function handler(e: Event) {
      const position = ref.current?.getBoundingClientRect();
      if(!position) return;
      if(position.top < 5) {
        setVisible(true);
      }
      if(position.top > 10) {
        setVisible(false);
      }
    }
    ref.current.parentNode?.addEventListener('scroll', handler);

    return () => {
      ref.current?.parentNode?.removeEventListener('scroll', handler);
    }
  }, []);


  return (
    <header className={styles.header} ref={ref}>
      <div style={{flex: '2'}}>
        <span className={styles.logo}>Kenji</span>
      </div>
      {
        <div className={`${styles.sentence} ${visible && styles['sentence-show']}`}>
        Interest is the best teacher, keep your passion for learning
        </div>
      }
      <nav style={{flex: '3', textAlign: 'right'}}>
        <Link href="/" className={`${styles['menu-item']}`}>Home</Link>
        <Link href="/article" className={styles['menu-item']}>Article</Link>
      </nav>
    </header>

  );
};

export default Home;
